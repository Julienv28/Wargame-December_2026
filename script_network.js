(function(){

    // Encodage base64 pour masquer les réponses
    const decode = s => atob(s);

    const SOL = {
        a_ip:   decode("MTAuMC4wLjI="),
        a_mask: decode("MjU1LjI1NS4yNTUuMA=="),
        a_gw:   decode("MTAuMC4wLjE="),

        r1_lan: decode("MTAuMC4wLjE="),
        r1_wan: decode("MTAuMC4xLjE="),

        r2_wan: decode("MTAuMC4xLjE="),
        r2_lan: decode("MTAuMC4xLjE="),

        b_ip:   decode("MTAuMC4xLjI="),
        b_mask: decode("MjU1LjI1NS4yNTUuMA=="),
        b_gw:   decode("MTAuMC4xLjE=")
    };

    const v = id => document.getElementById(id).value.trim();

    document.getElementById("checkBtn").addEventListener("click", () => {

        const ok =
            v("a_ip")   === SOL.a_ip   &&
            v("a_mask") === SOL.a_mask &&
            v("a_gw")   === SOL.a_gw   &&

            v("r1_lan") === SOL.r1_lan &&
            v("r1_wan") === SOL.r1_wan &&

            v("r2_wan") === SOL.r2_wan &&
            v("r2_lan") === SOL.r2_lan &&

            v("b_ip")   === SOL.b_ip   &&
            v("b_mask") === SOL.b_mask &&
            v("b_gw")   === SOL.b_gw;

        if(ok){
            document.getElementById("msg").style.color="lime";
            document.getElementById("msg").innerText = "✔️ Network restored! Redirecting...";
            setTimeout(() => window.location.href = "solution.html", 1200);
        } else {
            document.getElementById("msg").innerText = "❌ Network still broken";
        }
    });

})();
