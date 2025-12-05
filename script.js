document.addEventListener("DOMContentLoaded", () => {

// ⚡ Mot de passe côté JS (invisible dans HTML)
const SECRET_PASS = "P4sS_W0Rd";

// toggle login form
document.getElementById("loginCheck").addEventListener("click", function(){
    document.getElementById("loginBox").classList.remove("hidden");
});

// login validation
document.getElementById("loginBtn").addEventListener("click", function(){
    const login = document.getElementById("loginInput").value;
    const pass = document.getElementById("passInput").value;

    if(login === "L0g1n" && pass === SECRET_PASS){
         window.location.href = "network.html";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid credentials";
    }
});

// puzzle validation
document.getElementById("puzzleBtn").addEventListener("click", function() {

    const table = document.getElementById("puzzleTable");

    // ---- Extract 4x4 grid of numbers ----
    let grid = [];
    for(let r = 1; r <= 4; r++){
        let row = [];
        for(let c = 1; c <= 4; c++){
            let val = parseInt(table.rows[r].cells[c].querySelector('input').value);
            if(isNaN(val) || val < 1 || val > 4){
                document.getElementById("puzzleMsg").innerText = "Not correct yet";
                return;
            }
            row.push(val);
        }
        grid.push(row);
    }

    // ---- Helpers ----
    const visibleFromLeft = arr => {
        let max = 0, count = 0;
        for(let v of arr){
            if(v > max){
                max = v;
                count++;
            }
        }
        return count;
    };

    const visibleFromRight = arr => visibleFromLeft([...arr].reverse());

    // ---- Check rows uniqueness & visibility ----
    for(let r = 0; r < 4; r++){

        // uniqueness row
        if(new Set(grid[r]).size !== 4){
            document.getElementById("puzzleMsg").innerText = "Not correct yet";
            return;
        }

        let leftClue  = parseInt(table.rows[r+1].cells[0].innerText);
        let rightClue = parseInt(table.rows[r+1].cells[5].innerText);

        if(leftClue && visibleFromLeft(grid[r]) !== leftClue){
            document.getElementById("puzzleMsg").innerText = "Not correct yet";
            return;
        }
        if(rightClue && visibleFromRight(grid[r]) !== rightClue){
            document.getElementById("puzzleMsg").innerText = "Not correct yet";
            return;
        }
    }

    // ---- Check columns uniqueness & visibility ----
    for(let c = 0; c < 4; c++){

        let col = [ grid[0][c], grid[1][c], grid[2][c], grid[3][c] ];

        // uniqueness col
        if(new Set(col).size !== 4){
            document.getElementById("puzzleMsg").innerText = "Not correct yet";
            return;
        }

        let topClue    = parseInt(table.rows[0].cells[c+1].innerText);
        let bottomClue = parseInt(table.rows[5].cells[c+1].innerText);

        if(topClue && visibleFromLeft(col) !== topClue){
            document.getElementById("puzzleMsg").innerText = "Not correct yet";
            return;
        }
        if(bottomClue && visibleFromRight(col) !== bottomClue){
            document.getElementById("puzzleMsg").innerText = "Not correct yet";
            return;
        }
    }

    // All checks ok:
    document.getElementById("puzzleMsg").innerText = "Password = P4sS_W0Rd";
});
});
