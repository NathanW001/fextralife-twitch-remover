document.addEventListener("DOMContentLoaded", handleLoad())

function handleLoad() {
  document.getElementById("wrapper").style.setProperty("padding-left", 0);
  document.getElementById("sidebar-wrapper").remove();
}