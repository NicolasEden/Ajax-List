var result;
var oParametre = searchToObject();
function searchToObject() {
    var pairs = window.location.search.substring(1).split("&"),
        obj = {},
        pair,
        i;
    for ( i in pairs ) {
        if ( pairs[i] === "" ) continue;
  
        pair = pairs[i].split("=");
        obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }
    return obj;
}

$.ajax({
    url: "http://92.222.69.104/todo/listes",
    headers: { 'login': oParametre.login, 'password': oParametre.password},
    type: 'GET',
    dataType: 'json',
    async: false,
    success : function(data) {
        result = data;
    }, error : function(req, err) {
        alert: ("Request:"+ JSON.stringify(req));
     }
});

for (let i = 0; i < result.todoListes.length; i++) {
    var globDiv = document.createElement('div')
    var newTitle = document.createElement('h1')
    newTitle.innerHTML = result.todoListes[i].name;
    globDiv.appendChild(newTitle);  
    for (let a = 0; a < result.todoListes[i].elements.length; a++) {
        var newDoc = document.createElement('p')
        newDoc.innerHTML = result.todoListes[i].elements[a];
        globDiv.appendChild(newDoc);     
    }
    document.body.appendChild(globDiv);
}