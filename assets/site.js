(function () {
  var button = document.getElementById("copy-apply-instructions");
  var status = document.getElementById("copy-apply-instructions-status");

  if (!button) {
    return;
  }

  function setStatus(message) {
    if (!status) {
      return;
    }
    status.textContent = message;
    window.clearTimeout(setStatus.timeout);
    setStatus.timeout = window.setTimeout(function () {
      status.textContent = "";
    }, 2600);
  }

  button.addEventListener("click", function () {
    fetch("APPLY_GUIDE.md")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Instructions could not be loaded.");
        }
        return response.text();
      })
      .then(function (text) {
        return navigator.clipboard.writeText(text);
      })
      .then(function () {
        setStatus("Copied");
      })
      .catch(function () {
        setStatus("Open the instructions link to copy manually");
      });
  });
}());
