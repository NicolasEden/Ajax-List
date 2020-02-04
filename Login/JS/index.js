var mdp;
var nb = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var checkNb;
var checkUC;
var verif = 0;
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
});


function enregistrer() {
    location.replace("enrengistrer.html");
}


function seConnecter() {
    var login = document.getElementById("Login").value
    var passeword = document.getElementById("motDePasse").value
    $.ajax({
        url: "http://92.222.69.104/todo/listes",
        headers: { 'login': login, 'password': passeword},
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            result = data;
            location.replace("list.html?login="+login+"&password="+passeword);
        }, error : function(req, err) {
            alert: ("Request:"+ JSON.stringify(req));
         }
    });
}