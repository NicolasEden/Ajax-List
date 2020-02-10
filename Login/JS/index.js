document.getElementById('buttonLogin').addEventListener('click', function(event) {
    seConnecter()
});
document.getElementById('motDePasse').addEventListener('keypress', function(event) {
    if (event.key == "Enter") {
        seConnecter()
    }
});
function seConnecter() {
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
        url: "http://92.222.69.104/todo/listes",
        headers: { 'login': login, 'password': passeword},
        type: 'GET',
        dataType: 'json',
        async: false,
        success : function(data) {
            result = data;
            location.replace("list.html");
        }, error : function(req, err) {
            if (JSON.parse(req.responseText).message=="No resource found") {
                alertIdentifiant()
            }
            else {
                alertPasseword()
            }
         }
    });
}

function alertIdentifiant() {
    var body = document.getElementById("backgroundBody")
    var alertIdentifiant = document.createElement("DIV")
    alertIdentifiant.setAttribute("class","alert alert-dark")
    alertIdentifiant.setAttribute("role","alert")
    alertIdentifiant.innerHTML = "<b> Cet identifiant n'existe pas.<b>"
    alertIdentifiant.style.position = "absolute"
    alertIdentifiant.style.marginTop = "0px"
    alertIdentifiant.style.width = "80%"
    alertIdentifiant.style.marginLeft = "10%"
    alertIdentifiant.style.textAlign = "center"
    body.before(alertIdentifiant)
    
}
function alertPasseword() {
    var body = document.getElementById("backgroundBody")
    var alertIdentifiant = document.createElement("DIV")
    alertIdentifiant.setAttribute("class","alert alert-dark")
    alertIdentifiant.setAttribute("role","alert")
    alertIdentifiant.innerHTML = "<b> Mauvais mot de passe.<b>"
    alertIdentifiant.style.position = "absolute"
    alertIdentifiant.style.marginTop = "0px"
    alertIdentifiant.style.width = "80%"
    alertIdentifiant.style.marginLeft = "10%"
    alertIdentifiant.style.textAlign = "center"
    body.before(alertIdentifiant)
    
}