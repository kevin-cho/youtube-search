document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-btn').addEventListener('click', function() {
    sendSearch(document.getElementById('search-tb').value);
  }, false);
  document.getElementById('search-tb').addEventListener('keydown', function(event) {
    if (event.which == 13) {
      sendSearch(document.getElementById('search-tb').value);
    }
  }, false);
}, false);