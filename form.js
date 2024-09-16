const form = document.querySelector(".new-card-form");
const formContainer = document.querySelector("#form-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Read all entered data from the input fields (question, answer, tags)
  const questionInput = document.querySelector("#question").value;
  const answerInput = document.querySelector("#answer").value;
  const tagInput = document.querySelector("#tag").value;

  //  Generate all DOM element for a card with createElement()
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const questionElement = document.createElement("div");
  questionElement.textContent = questionInput;

  const answerElement = document.createElement("div");
  answerElement.textContent = answerInput;

  const tagElement = document.createElement("div");
  tagElement.textContent = tagInput;

  newCard.append(questionElement, answerElement, tagElement);
  // Adds card to site below the form

  formContainer.append(newCard);

  // resets the form after submitting
  form.reset();
});

function updateCharacterCount(inputField, counterField, maxLength) {
  const remaining = maxLength - inputField.value.length;
  counterField.textContent = `${remaining} characters remaining`;
}

document.addEventListener("DOMContentLoaded", function () {
  const questionInput = document.querySelector("#question");
  const questionCharacterCounter = document.querySelector("#question-counter");
  const answerInput = document.querySelector("#answer");
  const answerCharacterCounter = document.querySelector("#answer-counter");
  const maxLength = 150;

  questionInput.addEventListener("input", function () {
    updateCharacterCount(questionInput, questionCharacterCounter, maxLength);
  });

  answerInput.addEventListener("input", function () {
    updateCharacterCount(answerInput, answerCharacterCounter, maxLength);
  });
  updateCharacterCount(questionInput, questionCharacterCounter, maxLength);
  updateCharacterCount(answerInput, answerCharacterCounter, maxLength);
});
