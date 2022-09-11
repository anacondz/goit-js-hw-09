import Notiflix from 'notiflix';

const ref = {
  delayTime : document.querySelector('input[name="delay"]'),
  StepDelay : document.querySelector('input[name="step"]'),
  amountDel : document.querySelector('input[name="amount"]'),
  btnStart: document.querySelector('button'),
  
}

ref.btnStart.addEventListener('click', defEv)

function defEv(event) {
  event.preventDefault();

  let delay = Number(ref.delayTime.value);
  let step = Number(ref.StepDelay.value);

  for (let i = 1; i <= ref.amountDel.value; i += 1) {
    delay += step;
    createPromise(i, delay)
  }

  function createPromise(i, delay) {
  
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve();
        } else {
          reject();
        }
      }, delay);
    });
    promise.then(() => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
    })
      .catch(() => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
  }
}