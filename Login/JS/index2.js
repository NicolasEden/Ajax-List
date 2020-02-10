var mdp;
var nb = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var checkNb;
var checkUC;
var verif = 0;
var result;
var progBar;
var inputVerif;
var inputMdp;
var inputLog;
progBar = document.getElementsByClassName('progress-bar progress-bar-striped progress-bar-animated')[0]
inputVerif = document.getElementById('motDePasseVerification');
inputMdp = document.getElementById('motDePasse')
inputLog = document.getElementById('Login')
progBar.setAttribute('style', 'width: 0%')
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
        progBar.setAttribute('style', 'width: 0%')
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

inputMdp.addEventListener('focus', function(event) {
    inputMdp.style.borderBottom = "2px solid #C6C5B9"
    inputVerif.style.borderBottom = "2px solid #C6C5B9"
    document.getElementById('pMinimum').innerHTML = "*8 caractère minimum";
    document.getElementById('pMinimum').style.color = "#C6C5B9"
});
inputVerif.addEventListener('focus', function(event) {
    inputMdp.style.borderBottom = "2px solid #C6C5B9"
    inputVerif.style.borderBottom = "2px solid #C6C5B9"
    document.getElementById('pMinimum').innerHTML = "*8 caractère minimum";
    document.getElementById('pMinimum').style.color = "#C6C5B9"
    
});

document.getElementById('EnvoyerRegister').addEventListener('click', function(event) {
    if (inputVerif.value == mdp && inputLog.value.length >= 2) {
        requeteCreateAccount();
        console.log("a coup de woin woin")
    } else {
        inputVerif.style.borderBottom = '2px solid #FF7A7A';
        inputMdp.style.borderBottom = '2px solid #FF7A7A';
        document.getElementById('pMinimum').innerHTML = "Vos mots de passes ne correspondent pas.";
        document.getElementById('pMinimum').style.color = 'red';
    }
});
function alt(text){
    newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    newDiv.setAttribute('role', 'alert');
    newDiv.setAttribute('style', 'width: 500px;');
    newDiv.innerHTML = (text);
    newButton = document.createElement("button");
    newButton.setAttribute('class', 'close');
    newButton.setAttribute('data-dismiss', 'alert');
    newButton.setAttribute('aria-label', 'Close');
    newButton.innerHTML = ('<span aria-hidden="true">&times;</span>');
    newDiv.appendChild(newButton);
    document.getElementById('motDePasseVerification').appendChild(newDiv);
}

function enregistrer() {
    location.replace("enrengistrer.html");
}


function requeteCreateAccount() {
    var login = document.getElementById("Login").value
    var passeword = document.getElementById("motDePasse").value
    var res = document.cookie;
    var multiple = res.split(";");
    for(var i = 0; i < multiple.length; i++) {
        var key = multiple[i].split("=");
        document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
    document.cookie = "password="+passeword+", login="+login;
    $.ajax({
        url: "http://92.222.69.104/todo/create/"+inputLog.value+"/"+mdp,
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            result = data;
            location.replace("list.html");
        }, error : function(req, err) {
            alert: ("Request:"+ JSON.stringify(req));
            
         }
    });
}