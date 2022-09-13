import Notiflix from 'notiflix';
const refs = {
  inputDelay: document.querySelector(`input[name="delay"]`),
  inputAmount: document.querySelector(`input[name="amount"]`),
  inputStep: document.querySelector(`input[name="step"]`),
  submitBtn: document.querySelector(`button[type="submit"]`),
};
const { inputDelay, inputAmount, inputStep, submitBtn } = refs;

let delayValue = Number;
console.log(inputDelay, inputStep, inputAmount, submitBtn);

submitBtn.addEventListener('click', onSubmitBtn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.info('qwwe');
  } else {
    // Reject
  }
}

function onSubmitBtn(evt) {
  evt.preventDefault();
  createPromise();
}
