chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var tabId = tabs[0].id;
    chrome.tabs.executeScript(tabId,
        {file: 'js/sidenav.js', runAt: "document_end"});
})
window.close();