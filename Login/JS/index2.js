var mdp;
var nb = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var checkNb;
var checkUC;
var verif = 0;
const progBar = document.getElementsByClassName('progress-bar progress-bar-striped progress-bar-animated')[0]
const inputVerif = document.getElementById('motDePasseVerification');
progBar.setAttribute('style', 'width: 1%')
progBar.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger')
document.getElementById('motDePasse').addEventListener('keyup', function(event) {
    var checkNb;
    var checkUC;
    var verif = 0;
    mdp = document.getElementById('motDePasse').value;
    if (mdp.length >= 8) {
        verif += 25;
    }
    if (format.test(mdp)) {
        verif += 25;
    }
    if (mdp.length >= 1) {
        for (var i = 0; i < mdp.length; i++) {
            var testL = mdp[i]
            if (nb.indexOf(mdp[i]) != -1) {
                checkNb = true;
            } else if (checkNb != true){
                checkNb = false;
            }
            if (nb.indexOf(mdp[i]) == -1) {
                if (format.test(mdp[i]) == false) {
                    if (mdp[i] == mdp[i].toUpperCase()) {
                        checkUC = true;
                    } else if (checkUC != true) {
                        checkUC = false;
                    }
                }
            }
        }
        if (checkNb == true) {
            verif += 25;
        }
        if (checkUC == true) {
            verif += 25;
        }
    }
    if (verif == 0) {
        progBar.setAttribute('style', 'width: 1%')
        progBar.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger')
        progBar.innerHTML = ""
    } else if (verif == 25) {
        progBar.setAttribute('style', 'width: 25%')
        progBar.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger')
        progBar.innerHTML = "25%"
    } else if (verif == 50) {
        progBar.setAttribute('style', 'width: 50%')
        progBar.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger')
        progBar.innerHTML = "50%"
    } else if (verif == 75) {
        progBar.setAttribute('style', 'width: 75%')
        progBar.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning')
        progBar.innerHTML = "75%"
    }  else if (verif == 100) {
        progBar.setAttribute('style', 'width: 100%')
        progBar.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success')
        progBar.innerHTML = "100%"
    }
});

document.getElementById('EnvoyerRegister').addEventListener('click', function(event) {
    if (inputVerif.value == mdp) {
        console.log('lol');
    } else {
        console.log('qsdqsd');
    }
});

function enregistrer() {
    location.replace("enrengistrer.html");
}
