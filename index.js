
function createElement(tag, attributes = {}, text = "") {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  if (text) element.textContent = text;

  return element;
}

function addDynamicContent(text) {
  const container = document.getElementById("dynamic-content");
  const p = createElement("p", {}, text);
  container.appendChild(p);
}

function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const p = createElement("p", {}, text);
  container.appendChild(p);
}


function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) element.remove();
}


function simulateClick(containerId, text) {
  addElementToDOM(containerId, text);
}


function handleFormSubmit(formId, containerId) {
  const input = document.getElementById("user-input");
  const errorDiv = document.getElementById("error-message");

  errorDiv.textContent = "";
  errorDiv.classList.add("hidden");

  if (!input.value.trim()) {
    errorDiv.textContent = "Input cannot be empty";
    errorDiv.classList.remove("hidden");
    return;
  }

  addElementToDOM(containerId, input.value);
  input.value = "";
}


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");
  const input = document.getElementById("user-input");

  if (button) {
    button.addEventListener("click", () => {
      addDynamicContent("Button clicked!");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleFormSubmit("user-form", "dynamic-content");
    });
  }
});

 
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
};