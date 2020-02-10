function darkmod() {
    
    if (document.getElementById("customSwitch1").checked) {
        document.getElementById("toto").setAttribute("href","../Login/SCSS/dark.css")
        document.cookie = ", theme=dark"
    }else {
        document.getElementById("toto").setAttribute("href","../Login/SCSS/light.css")
        document.cookie = ", theme=light"
    }
}
var text = document.cookie.replace(";", ","),
    pattern = new RegExp(/\b([^=,]+)=([^=,]+)\b/g),
    obj = {};

while (match = pattern.exec(text)) obj[match[1]] = match[2];

var cookie = obj;

if (!cookie.theme) {
    document.cookie = ", theme=light"
}
if (cookie.theme == "dark") {
    document.getElementById("toto").setAttribute("href","../Login/SCSS/dark.css")
    document.getElementById("customSwitch1").checked = true;
} else {
    document.getElementById("toto").setAttribute("href","../Login/SCSS/light.css")
    document.getElementById("customSwitch1").checked = false;
}