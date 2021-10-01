import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle((inputData), 500));
feedbackForm.addEventListener('submit', inputSubmit);

let parsedData = JSON.parse(localStorage.getItem('feedback-form-state'))

if (localStorage.getItem('feedback-form-state')) {
    feedbackForm.querySelector('input').value = parsedData.email;
    feedbackForm.querySelector('textarea').value = parsedData.message;
}

function inputData(e) {
    e.preventDefault();

    const {
        elements: { email, message }
    } = feedbackForm;

    const data = { email: email.value, message: message.value }
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}



function inputSubmit(e) {
    e.preventDefault();

    parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(parsedData)
    localStorage.removeItem("feedback-form-state");

    e.currentTarget.reset();
}