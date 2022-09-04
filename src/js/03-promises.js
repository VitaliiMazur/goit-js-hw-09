import Notiflix from 'notiflix';

const refs = {
  inputDelayEl: document.querySelector('[name="delay"]'),
  inputStepEl: document.querySelector('[name="step"]'),
  inputAmountEl: document.querySelector('[name="amount"]'),
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(refs.inputDelayEl.value);
  let delayStep = Number(refs.inputStepEl.value);
  let promiseValue = Number(refs.inputAmountEl.value);

  for (let i = 0; i < promiseValue; i += 1) {
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += delayStep;
  }
}
