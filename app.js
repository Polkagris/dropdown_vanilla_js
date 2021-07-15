const dropDownTitle = document.getElementById("title");
const list = document.getElementById("dropDownList");

dropDownTitle.addEventListener("click", () => {
  list.classList.toggle("visibleList");
  // hidden by default
  list.classList.toggle("hiddenList");
});
