fetch(chrome.runtime.getURL('sidenav.html'))
  .then(response => response.text())
  .then(data => {
    const modal = document.createElement("div")
    modal.innerHTML += data
    document.body.appendChild(modal)

  }).catch(err => {
    console.log(err)
  })
