const bookmarkIcons = document.querySelectorAll(".bookmark-icon");

bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("active");
  });
});

const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach((card) => {
  const answerButton = card.querySelector(".answer-button");
  const answer = card.querySelector(".answer");

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      answerButton.textContent = "Show Answer";
    } else {
      answerButton.textContent = "Hide Answer";
    }
    console.log(answer.classList.contains("hidden"));
  });
});
