fetch(chrome.runtime.getURL('templates/sidenav.html'))
  .then(response => response.text())
  .then(data => {
    const modal = document.createElement("div")
    modal.innerHTML += data
    document.body.appendChild(modal)
    // other code
    // eg update injected elements,
    // add event listeners or logic to connect to other parts of the app
  }).catch(err => {
    console.log(err)
  })
