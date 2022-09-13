import Notiflix from 'notiflix';

const ref = {
  delayTime : document.querySelector('input[name="delay"]'),
  stepDelay : document.querySelector('input[name="step"]'),
  amountDel : document.querySelector('input[name="amount"]'),
  btnStart: document.querySelector('.form'),
  
}

ref.btnStart.addEventListener('submit', defEv);

function defEv(event) {
  event.preventDefault();

  let delay = Number(ref.delayTime.value);
  let step = Number(ref.stepDelay.value);
  let amount = Number(ref.amountDel.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(() => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(() => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay ) {
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
