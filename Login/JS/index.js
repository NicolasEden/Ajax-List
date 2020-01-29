var mdp;
var nb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var checkNb;
var verif = 0;
document.getElementById('motDePasse').addEventListener('keyup', function(event) {
    var verif = 0;
    mdp = document.getElementById('motDePasse').value;
    if (mdp.length >= 6) {
        verif += 25;
    }
    if (mdp.length >= 12) {
        verif += 25;
    }
    for (var i = 0; i < mdp.length; i++) {
        if (nb.indexOf(mdp[i]) != -1) {
            checkNb = true;
        }
    }
    if (checkNb == true) {
        verif += 25;
    }
    console.log(verif);
});
