addEventListener("DOMContentLoaded", () => {
  document.getElementById("wrapper").style.setProperty("padding-left", 0);
  document.getElementById("wrapper").style.setProperty("transition", "0s");

  // // Cannot remove element outright, it breaks the search feature somehow
  // document.getElementById("sidebar-wrapper").remove(); 

  let parent = document.getElementById("sidebar-wrapper");
  parent.querySelector(".row").remove();
  let to_remove = parent.querySelectorAll(".sidebar-nav > div:not(.hidden-lg)")
  to_remove.forEach((item) => {
    item.remove();
  });
  parent.style.setProperty("width", "0px")
});