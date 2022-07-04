import throttle from "lodash.throttle"


const form = document.querySelector('.feedback-form');
let formInfo = JSON.parse(localStorage.getItem('feedback-form-state')) || {};




function onSubmit(evt) {
  evt.preventDefault();
  localStorage.clear();
  evt.currentTarget.reset();
  console.log(formInfo);
  formInfo = {};
}

form.addEventListener('submit', onSubmit)




function onInputForm(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

form.addEventListener('input', throttle(onInputForm, 500));




function inputsValueRefresh() {
  const savedInformation = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedInformation) {
    form.elements.email.value = savedInformation.email || "";
    form.elements.message.value = savedInformation.message || "";
  }
}

inputsValueRefresh();