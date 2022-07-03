// import throttle from "lodash.throttle"

const formSubmit = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

savedInputs();

formSubmit.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();

  console.log('click');
}


input.addEventListener('input', onInput);
function onInput(event) {
  const email = event.target.value;
  localStorage.setItem('feedback-form-state-1', email)

  console.log(email)
}


textArea.addEventListener('input',onTextArea);
function onTextArea(evt) {
  const message = evt.target.value;
  localStorage.setItem('feedback-form-state',message)

console.log(message)
}
  

function savedInputs() {
  const inputEmail = localStorage.getItem('feedback-form-state-1')
  if (inputEmail) {
    input.value = inputEmail
  }
}




