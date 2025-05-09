document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('openMapBtn').onclick = function() {
    document.getElementById('mapModal').style.display = 'flex';
  };
  document.getElementById('closeMapBtn').onclick = function() {
    document.getElementById('mapModal').style.display = 'none';
  };
  window.onclick = function(event) {
    if (event.target == document.getElementById('mapModal')) {
      document.getElementById('mapModal').style.display = 'none';
    }
  };
});
