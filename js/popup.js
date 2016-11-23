document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-btn').addEventListener('click', function() {
    sendSearch(document.getElementById('search-tb').value);
  });
  document.getElementById('search-tb').addEventListener('keydown', function() {
    if (event.which == 13) {
      sendSearch(document.getElementById('search-tb').value);
    }
  });
});