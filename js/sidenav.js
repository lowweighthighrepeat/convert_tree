var sideNav = document.getElementById("mySidenav")
var closeBtn = document.getElementsByClassName("convert-tree-closebtn")[0]

closeBtn.onclick = function() {
    sideNav.style.width = "0";
}

// When the user clicks anywhere outside of the sidenav, close it
window.onclick = function(event) {
    
    if (event.target == closeBtn) {
        sideNav.style.width = "0";
    }
}

sideNav.style.width="250px";