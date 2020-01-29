var sideNav = document.getElementById("mySidenav")
var closeBtn = document.getElementsByClassName("convert-tree-closebtn")[0]
var fromType = document.getElementById("from-type")
var fromInput = document.getElementById("from-value")
var toType = document.getElementById('to-type')
var toInput = document.getElementById('to-value')

var convert = (fromType, fromValue, toType) => {
  const toTypeInt = parseInt(toType)
  return parseInt(fromValue, fromType).toString(toTypeInt).toUpperCase()
}

fromType.onselect = (e) => {
  console.log(e)
  toInput.value = convert(e.target.value, fromInput.value, toType.value)
}

fromInput.oninput = (e) => {
  console.log(e)
  toInput.value = convert(fromType.value, e.target.value, toType.value)
}

toType.onselect = (e) => {
  console.log(e)
  toInput.value = convert(fromType.value, fromInput.value, e.target.value)
}

closeBtn.onclick = () => {
  sideNav.style.width = "0"
}

// When the user clicks anywhere outside of the sidenav, close it
window.onclick = (event) => {
  if (event.target === closeBtn) {
    sideNav.style.width = "0"
  }
}

sideNav.style.width="250px"
