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
const SOLUTION = [
    [1,3,4,2],
    [4,2,1,3],
    [2,4,3,1],
    [3,1,2,4]
];

document.getElementById("puzzleBtn").addEventListener("click", function(){
    const table = document.getElementById("puzzleTable");
    let correct = true;

    for(let r=1;r<=4;r++){
        for(let c=1;c<=4;c++){
            const val = parseInt(table.rows[r].cells[c].querySelector('input').value);
            if(val !== SOLUTION[r-1][c-1]){
                correct = false;
                break;
            }
        }
        if(!correct) break;
    }

    document.getElementById("puzzleMsg").innerText = correct ? "Password = P4sS_W0Rd" : "Not correct yet";
});
