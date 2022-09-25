let icon = document.querySelector("i");
let sidebare = document.querySelector("#sidebar");
icon.addEventListener("click", () => {
  sidebare.classList.toggle("active");
});
