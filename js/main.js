function sendSearch(query) {
  var serviceCall = 'https://www.youtube.com/results?search_query=' + query;
  chrome.tabs.create({
    url: serviceCall
  });
}

chrome.contextMenus.create({
  title: 'Search YouTube for "%s"', 
  contexts:["selection"], 
  onclick: function(info, tab) {
    sendSearch(info.selectionText);
  }
});