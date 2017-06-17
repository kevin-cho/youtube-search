document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('search-btn').addEventListener('click', function() {
    sendSearch(document.getElementById('search-tb').value);
  });

});
