var result;
var text = document.cookie,
    pattern = new RegExp(/\b([^=,]+)=([^=,]+)\b/g),
    obj = {};

while (match = pattern.exec(text)) obj[match[1]] = match[2];

var cookie = obj;
console.log(cookie)
console.log(document.cookie)
$.ajax({
    url: "http://92.222.69.104/todo/listes",
    headers: { 'login': cookie.login, 'password': cookie.password},
    type: 'GET',
    dataType: 'json',
    async: false,
    success : function(data) {
        result = data;
    }, error : function(req, err) {
        alert: ("Request:"+ JSON.stringify(req));
     }
});

for (let start = 0; start < result.todoListes.length; start++) {
    creerNewList(result.todoListes[start].name, result.todoListes[start].elements)
}

function creerNewList(title, content) {
    if (title) {
        var div = document.createElement("DIV")
        var woinWoin = document.getElementById("woinWoin")
        woinWoin.before(div)
        div.setAttribute("class","col-sm-3")
        var div1 = document.createElement("DIV")
        div.appendChild(div1)
        for (let a = 0; a < content.length; a++) {
            var divDoc = document.createElement('div')
            divDoc.style.borderBottom = "2px solid #C6C5B9"
            var newDoc = document.createElement('p')
            newDoc.setAttribute('class', 'newDoc')
            newDoc.innerHTML = "<b>"+content[a]+"</b>";
            divDoc.appendChild(newDoc)
            div1.appendChild(divDoc)
            var poubelle2 = document.createElement("i")
            divDoc.appendChild(poubelle2)
            poubelle2.setAttribute("class","far fa-trash-alt petite-poubelle")
            poubelle2.addEventListener('click', function(event) {
                event.target.parentElement.parentNode.removeChild(event.target.parentElement)
            })
        }
        var div3 = document.createElement("DIV")
        div.appendChild(div3)
        div3.setAttribute("class","bandeau-poubelle")
        var trash = document.createElement("i")
        div3.appendChild(trash)
        trash.setAttribute("class","fas fa-trash")
        trash.setAttribute("onclick","supprimer(event)")
        var divDoc = document.createElement('div')
        var newDoc = document.createElement('i')
        newDoc.setAttribute('class', 'fas fa-plus')
        newDoc.setAttribute('onclick', 'addList(event)')
        newDoc.setAttribute('class', 'fas fa-plus newPLus')
        divDoc.appendChild(newDoc)
        div1.appendChild(divDoc)
        div1.setAttribute("class","creer-list")
        var div2 = document.createElement("DIV")
        div2.setAttribute("class", "contenerTitle")
        div.appendChild(div2)
        var newTitle = document.createElement('P')
        newTitle.setAttribute("class", "TitleR noselect")
        newTitle.innerHTML = "<b>"+title+"</b>";
        div2.appendChild(newTitle)
        div2.setAttribute("class","bandeau-bottom")
    } else {
        var div = document.createElement("DIV")
        div.style.transition = "0.4s";
        var woinWoin = document.getElementById("woinWoin")
        woinWoin.before(div)
        div.setAttribute("class","col-sm-3 woin-woin")
        var div1 = document.createElement("DIV")
        div.appendChild(div1)
        div1.setAttribute("class","creer-list")
        var divDoc = document.createElement('div')
        var newDoc = document.createElement('i')
        divDoc.setAttribute('onclick', 'addList(event)')
        newDoc.setAttribute('class', 'fas fa-plus newPLus')
        divDoc.appendChild(newDoc)
        div1.appendChild(divDoc)
        var div3 = document.createElement("DIV")
        div.appendChild(div3)
        div3.setAttribute("class","bandeau-poubelle")
        var trash = document.createElement("i")
        div3.appendChild(trash)
        trash.setAttribute("class","fas fa-trash")
        trash.setAttribute("onclick","supprimer(event)")
        var div2 = document.createElement("DIV")
        div.appendChild(div2)
        div2.setAttribute("class","bandeau-bottom")
        var input = document.createElement("INPUT")
        div2.appendChild(input)
        input.setAttribute("id","focus")
        input.setAttribute("onkeydown","valider(event)") 
        focus();
    }
    for (let a = 0; a < document.getElementsByClassName('TitleR').length; a++) {
        document.getElementsByClassName('TitleR')[a].addEventListener('dblclick', function(event) {
            random2 = event
            addList2(event)
            event.target.parentElement.parentNode.removeChild(event.target.parentElement)
        })
        
    }
}
var random2;
function addList2(event) {
    var input = document.createElement("INPUT")
    event.target.parentElement.parentElement.appendChild(input)
    input.setAttribute("id","focus")
    input.setAttribute("onkeydown","valider3(event)")
    focus();
}

function addList(event) {
    var input = document.createElement("INPUT")
    event.target.before(input)
    input.setAttribute("id","focus")
    input.setAttribute("onkeydown","valider2(event)")
    focus();
}

function valider3(event){
    if (event.keyCode == 13){
        var saisie = document.getElementById("focus").value
        var Titre = document.createElement("P")
        var TitreB = document.createElement("B")
        event.target.parentElement.appendChild(Titre)
        TitreB.innerHTML = saisie;
        Titre.appendChild(TitreB); 
        var focus = document.getElementById("focus")
        focus.parentNode.removeChild(focus)
        Titre.setAttribute("class","titre-liste noselect")
        Titre.addEventListener('dblclick', function(event) {
            random2 = event
            addList2(event)
            event.target.parentElement.parentNode.removeChild(event.target.parentElement)
        })
        if (saveauto == true) {
            envoyerElement()
        }
    }
}

function valider2(event) {
    if (event.keyCode == 13) {
        var saisie = document.getElementById("focus").value
        var divDoc = document.createElement('div')
        var parent = event.target.parentElement
        var newDoc = document.createElement('P')

        divDoc.setAttribute('class', 'divDoc')
        divDoc.style.borderBottom = "2px solid #C6C5B9"
        newDoc.innerHTML = "<b>"+saisie+"</b>";
        newDoc.setAttribute('class', 'newDoc')
        divDoc.appendChild(newDoc)
        parent.before(divDoc)
        var focus = document.getElementById("focus")
        focus.parentNode.removeChild(focus)
        
        var poubelle2 = document.createElement("i")
        divDoc.appendChild(poubelle2)
        poubelle2.setAttribute("class","far fa-trash-alt petite-poubelle")
        poubelle2.addEventListener('click', function(event) {
            event.target.parentElement.parentNode.removeChild(event.target.parentElement)
        })
        if (saveauto == true) {
            envoyerElement()
        }
    }
}


function focus() {
    document.getElementById("focus").focus();
}

function valider() {
    if (event.keyCode == 13) {
        var saisie = document.getElementById("focus").value
        var parent = event.target.parentElement
        var Titre = document.createElement("P")
        var TitreB = document.createElement("B")
        parent.appendChild(Titre)
        TitreB.innerHTML = saisie
        Titre.appendChild(TitreB); 
        var focus = document.getElementById("focus")
        focus.parentNode.removeChild(focus)
        Titre.setAttribute("class","titre-liste noselect")
        Titre.addEventListener('dblclick', function(event) {
            random2 = event
            addList2(event)
            event.target.parentElement.parentNode.removeChild(event.target.parentElement)
        })
        if (saveauto == true) {
            envoyerElement()
        }
    }
}

function supprimer(event) {
    var grosseDiv = event.target.parentElement.parentElement;
    grosseDiv.parentNode.removeChild(grosseDiv);
}

document.getElementById('soummettre').addEventListener('click', function(event) {
    envoyerElement()
})

var enter = {}
function envoyerElement() {
    enter = {}
    enter = {"utilisateur" : cookie.login, "password": cookie.password, "todoListes": []}
    for (let checkList = 0; checkList < document.getElementsByClassName('col-sm-3').length ; checkList++) {
        if (document.getElementsByClassName('col-sm-3')[checkList] != undefined && document.getElementsByClassName('col-sm-3')[checkList].children.length == 3) {
            enter.todoListes.push({'name':document.getElementsByClassName('col-sm-3')[checkList].children[2].children[0].textContent, "elements": []})
            for (let checkInfos = 0; checkInfos < document.getElementsByClassName('col-sm-3')[checkList].children[0].children.length; checkInfos++) {
                if (document.getElementsByClassName('col-sm-3')[checkList].children[0].children[checkInfos]) {
                    if (document.getElementsByClassName('col-sm-3')[checkList].children[0].children[checkInfos].children[0].tagName == "P") {
                        enter.todoListes[checkList].elements.push(document.getElementsByClassName('col-sm-3')[checkList].children[0].children[checkInfos].textContent)
                    }
                }
                
            }
        }    
    }
    $.ajax({
        type: 'post',
        data: JSON.stringify(enter),
        contentType: "application/json; charset=utf-8",
        url: "http://92.222.69.104/todo/listes"
        }).done(function(data) {
        console.log(data);
        });
    }

window.addEventListener('unload', function(event) {
    this.alert('sdqsd')
    alert('sdqsd')
    envoyerElement()
})
window.addEventListener('beforeunload', function(event) {
    this.alert('sdqsd')
    alert('sdqsd')
    envoyerElement()
})
var saveauto;
function autosave() {
    if (!saveauto) {
        saveauto = false;
    }
    if (saveato == false) {
        document.getElementById("customSwitch2").checked = false;
    } else if (saveauto == true) {
        document.getElementById("customSwitch2").checked = true;
    }
}