document.addEventListener("DOMContentLoaded", handleLoad())

function handleLoad() {
  const wrapper = document.getElementById("wrapper");
  const sidebar_wrapper = document.getElementById("sidebar-wrapper");

  wrapper.style.setProperty("padding-left", 0)
  sidebar_wrapper.remove()
}