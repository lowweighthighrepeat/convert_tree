chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  var tabId = tabs[0].id
  chrome.tabs.executeScript(tabId,
    {file: 'js/sidenav.js', runAt: "document_end"}, function() {
      var clipboardText = document.getElementById("clipboardText")
      clipboardText.value = ''
      clipboardText.focus()
      document.execCommand('paste')
      chrome.tabs.executeScript(tabId,
        {code: 'document.getElementById("fromText").value="'+clipboardText.value+'"', runAt: "document_end"})
    })
})
