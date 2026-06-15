window.addEventListener('load', function() {
  var spinnerContainer = document.getElementById('spinner-container');
  if (spinnerContainer) {
    spinnerContainer.style.display = 'none';
  }
});

// 安全回退：最多3秒后隐藏
setTimeout(function() {
  var spinnerContainer = document.getElementById('spinner-container');
  if (spinnerContainer) {
    spinnerContainer.style.display = 'none';
  }
}, 3000);