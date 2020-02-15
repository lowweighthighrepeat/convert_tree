module.exports = () => {
  var sideNav = document.getElementById("mySidenav")
  var closeBtn = document.getElementsByClassName("convert-tree-closebtn")[0]
  var copyBtn = document.getElementsByClassName("copy-btn")[0]
  var fromValue = document.getElementById("fromText")
  var toValue = document.getElementById("toText")
  var tooltipText = document.getElementById("tooltiptext")
  var fromType = document.getElementById("from-type")
  var toType = document.getElementById("to-type")
  
  var hexRe = /^(0x)?[0-9a-fA-F]+$/
  var binRe = /^[0-1]+$/

  function convertDefault(fromType, fromValue, toType){
    const toTypeInt = parseInt(toType)
    return parseInt(fromValue, fromType).toString(toTypeInt).toUpperCase()
  }

  fromValue.addEventListener("input", (e) => {
    let fromValue_ = fromValue.value
    let fromType_ = fromType.value
    let toType_ = toType.value
    let recommendFromSection = document.getElementsByClassName('recommend-from-section')[0]
    let recommendFromTypeList = []

    recommendFromSection.innerHTML = '' // clear all child nodes of remmend-from-section 
    
    if (fromValue_.search(hexRe) > -1)
      recommendFromTypeList.push({type: "hex", value: 16})
    if (fromValue_.search(binRe) > -1)
      recommendFromTypeList.push({type: "bin", value: 2})
    
    for (let obj of recommendFromTypeList) {
      let btn = document.createElement("button");
      
      btn.innerText = obj.type
      btn.value = obj.value
      
      btn.addEventListener('click', (e) => {
        fromType.value = e.target.value
        fromValue.dispatchEvent(new Event('input'))
      })

      recommendFromSection.appendChild(btn)
    }

    let convertedValue = convertDefault(fromType_, fromValue_, toType_)
    toValue.value = convertedValue
  })


  function openSideNav() {
    fromValue.focus()
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