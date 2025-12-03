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
        window.location.href = "solution.html";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid credentials";
    }
});

// puzzle validation
document.getElementById("puzzleBtn").addEventListener("click", function(){
    const cells = Array.from(document.querySelectorAll(".grid input")).map(i=>i.value);
    const rows = [cells.slice(0,3), cells.slice(3,6), cells.slice(6,9)];

    for(let r of rows){
        const set = new Set(r);
        if(set.size!==3 || !set.has("1") || !set.has("2") || !set.has("3")){
            document.getElementById("puzzleMsg").innerText = "Not correct yet.";
            return;
        }
    }

    document.getElementById("puzzleMsg").innerText = "Password = " + SECRET_PASS;
});
