const buttons = Array.from(document.querySelectorAll(".btn-sw"));

const toggleClass = (e) => {
  for (let el of buttons) {
    el.classList.remove("selected");
  }
  e.currentTarget.classList.add("selected");
  if (
    e.currentTarget.classList.contains("selected") === true
      ? e.currentTarget.classList.add("opacity-50", "cursor-not-allowed")
      : e.currentTarget.classList.remove("opacity-50", "cursor-not-allowed")
  )
    return e;
};
for (let el of buttons) {
  el.addEventListener("click", toggleClass);
}
