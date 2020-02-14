var sideNav = document.getElementById("mySidenav")
var closeBtn = document.getElementsByClassName("convert-tree-closebtn")[0]
var copyBtn = document.getElementsByClassName("copy-btn")[0]
var toValue = document.getElementById("toText")
var tooltipText = document.getElementById("tooltiptext")

function openSideNav() {
  sideNav.style.width = "250px"
}

function closeSideNav() {
  sideNav.style.width = "0"
}

function openTooltip() {
  tooltipText.style.opacity = 1
}

function closeTooltip() {
  tooltipText.style.opacity = 0
}

function showTooltip() {
  openTooltip()
  setTimeout(() => { closeTooltip() }, 2000)
}

closeBtn.onclick = () => {
  closeSideNav()
}

// When the user clicks anywhere outside of the sidenav, close it
window.onclick = (event) => {
  if (event.target === closeBtn) {
    closeSideNav()
  }
}


window.onkeydown = (event) => {
  if (event.keyCode === 13) {
    if (sideNav.style.width === "250px") {
      toValue.select()
      document.execCommand('copy')

      sideNav.style.width = "0"
    }
  }
}

copyBtn.onclick = () => {
  toValue.focus()
  toValue.select()
  document.execCommand("Copy")
  toValue.blur()
  showTooltip()
}

openSideNav()
