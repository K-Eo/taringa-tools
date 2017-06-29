window.onload = function () {
  document.getElementById('status').onclick = function () {
    chrome.extension.sendMessage({
      status: this.checked
    })
  }
}