module.exports = () => {
  var sideNav = document.getElementById("mySidenav")
  var closeBtn = document.getElementsByClassName("convert-tree-closebtn")[0]
  var copyBtn = document.getElementsByClassName("copy-btn")[0]
  var fromValue = document.getElementById("fromText")
  var toValue = document.getElementById("toText")
  var tooltipText = document.getElementById("tooltiptext")
  var fromType = document.getElementById("from-type")
  var toType = document.getElementById("to-type")
  
  function convertDefault(fromType, fromValue, toType){
    const toTypeInt = parseInt(toType)
    return parseInt(fromValue, fromType).toString(toTypeInt).toUpperCase()
  }

  fromValue.addEventListener("input", (e) => {
    let convertedValue = convertDefault(fromType.value, fromValue.value, toType.value)
    toValue.value = convertedValue
  })


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
      sideNav.style.width = "0"
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
}