const bookmarkIcons = document.querySelectorAll(".bookmark-icon");

bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("active");
  });
});
