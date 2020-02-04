function darkmod() {
    
    if (document.getElementById("customSwitch1").checked) {
        document.getElementById("toto").setAttribute("href","../Login/SCSS/dark.css")
    }else {
        document.getElementById("toto").setAttribute("href","../Login/SCSS/light.css")
    }
}