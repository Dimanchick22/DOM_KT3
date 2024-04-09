document.querySelectorAll(".menu-item").forEach(function (item) {
  item.addEventListener("click", function (event) {
    let submenu = this.querySelector(".submenu");
    if (submenu) {
      event.stopPropagation();
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    } else {
      alert("Вы можете перейти по ссылке");
    }
  });
});
