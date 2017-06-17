function sendSearch(query) {
  var serviceCall = 'https://www.youtube.com/results?search_query=' + query;
  chrome.tabs.create({
    url: serviceCall
  });
}
