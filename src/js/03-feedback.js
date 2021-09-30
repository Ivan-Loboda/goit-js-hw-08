import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(inputData), 500);
feedbackForm.addEventListener('submit', inputSubmit);

let data = {
    email: '',
    message: ''
}
console.log(data)
function inputData(e) {
    e.preventDefault();

    if (!e.currentTarget) return false;

    const {
        elements: { email, message }
    } = e.currentTarget;

    data = { email: email.value, message: message.value }

    localStorage.setItem('feedback-form-state', JSON.stringify(data))

    console.log(data)
}
// console.log(data)



function inputSubmit(e) {
    e.preventDefault();
    console.log({ email: email.value, password: password.value })
    e.currentTarget.reset();



}