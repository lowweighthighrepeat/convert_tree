var sideNav = document.getElementById("mySidenav")
var closeBtn = document.getElementsByClassName("convert-tree-closebtn")[0]
var copyBtn = document.getElementsByClassName("copy-btn")[0]
closeBtn.onclick = () => {
  sideNav.style.width = "0"
}

// When the user clicks anywhere outside of the sidenav, close it
window.onclick = (event) => {
  if (event.target === closeBtn) {
    sideNav.style.width = "0"
  }
}



window.onkeydown = (event) => {
  if (event.keyCode === 13) {
    if (sideNav.style.width === "250px") {
      var toValue = document.querySelector("#to-value")
      toValue.select()
      document.execCommand('copy')
      sideNav.style.width = "0"
    }
  }
}
sideNav.style.width = "250px"

copyBtn.onclick = () => {
  var copytext = document.getElementById("toText")
  copytext.focus()
  copytext.select()
  document.execCommand("Copy")
  copytext.blur()
  document.getElementById("tooltiptext").style.opacity = 1
  self.setTimeout(() => { document.getElementById("tooltiptext").style.opacity = 0 }, 2000)
}
