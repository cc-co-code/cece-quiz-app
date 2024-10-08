const form = document.querySelector(".new-card-form");
const formContainer = document.querySelector("#form-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Read all entered data from the input fields (question, answer, tags)
  const questionInput = document.querySelector("#question").value;
  const answerInput = document.querySelector("#answer").value;
  const tagInput = document.querySelector("#tag").value;

  //Create a new div element for the new card
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const questionElement = document.createElement("div");
  questionElement.textContent = questionInput;

  const answerElement = document.createElement("div");
  answerElement.textContent = answerInput;

  const tagElement = document.createElement("div");
  tagElement.textContent = tagInput;

  // Append the question, answer, and tag elements to the new card
  newCard.append(questionElement, answerElement, tagElement);

  // Adds card to site below the form
  formContainer.append(newCard);

  // resets the form after submitting
  form.reset();
});

function updateCharacterCount(inputField, counterField, maxLength) {
  const remaining = maxLength - inputField.value.length;
  // Update the counter field with the remaining character count
  counterField.textContent = `${remaining} characters remaining`;
  // If the remaining characters are less than 0, turn the counter red
  if (remaining < 0) {
    counterField.classList.add("overlimit"); // Add class to change color to red
  } else {
    counterField.classList.remove("overlimit"); // Remove class if within limit
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Select the question input field and the counter for it
  const questionInput = document.querySelector("#question");
  const questionCounter = document.querySelector("#question-counter");
  // Select the answer input field and the counter for it
  const answerInput = document.querySelector("#answer");
  const answerCounter = document.querySelector("#answer-counter");
  const maxLength = 150;

  // Add an event listener for the question input field
  // Every time the user types, the character count will update
  questionInput.addEventListener("input", function () {
    updateCharacterCount(questionInput, questionCounter, maxLength);
  });

  answerInput.addEventListener("input", function () {
    updateCharacterCount(answerInput, answerCounter, maxLength);
  });
  // Initialize the character counters when the page loads
  updateCharacterCount(questionInput, questionCounter, maxLength);
  updateCharacterCount(answerInput, answerCounter, maxLength);
});
