import _throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');


const STORAGE_KEY = 'feedback-form-state';
let formData = {};
takeData()

formEl.addEventListener('input', _throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   console.log(formData);
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(`E-mail: ${formData.email}`);
    console.log(`Message: ${formData.message}`);
}
function takeData() {
    const values = localStorage.getItem(STORAGE_KEY);
    if (values) {
        formData = JSON.parse(values);
        Object.keys(formData).forEach(
          key => (formEl[key].value = formData[key])
        );
    }
}
