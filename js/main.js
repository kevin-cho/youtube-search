chrome.contextMenus.create({
  title: 'Search YouTube for "%s"', 
  contexts:["selection"], 
  onclick: function(info, tab) {
    sendSearch(info.selectionText);
  }
});
