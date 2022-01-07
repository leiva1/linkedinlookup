chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Search Linkedin for "%s"',
        "contexts": ["selection"],
        "id": "myContextMenuId"
    });
});
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({  
        url: "https://www.linkedin.com/search/results/all/?keywords=" + encodeURIComponent(info.selectionText)
    });
})
