// Bookmark icon toggle functionality
const bookmarkIcons = document.querySelectorAll(".bookmark-icon");

// For each bookmark icon, add a click event listener
bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    // Toggle the "active" class when the icon is clicked
    bookmarkIcon.classList.toggle("active");
  });
});

// Show/hide answer functionality
const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach((card) => {
  // Find the "answer-button" and "answer" elements inside each question card
  const answerButton = card.querySelector(".answer-button");
  const answer = card.querySelector(".answer");

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    // Change the button text depending on whether the answer is shown or hidden
    if (answer.classList.contains("hidden")) {
      answerButton.textContent = "Show Answer";
    } else {
      answerButton.textContent = "Hide Answer";
    }
    console.log(answer.classList.contains("hidden"));
  });
});

const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
