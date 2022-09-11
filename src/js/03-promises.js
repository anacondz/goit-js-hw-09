const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};

refs.form.addEventListener('submit', PrDefault);

function PrDefault(e) {
  e.preventDefault();
}

let evtDelay = Number(refs.delay.value);
let evtStep = Number(refs.step.value);
let evtAmount = Number(refs.amount.value);

for (i = 1; i <= evtAmount; i += 1) {
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

  createPromise(i, delay)
  .then(({ i, delay }) => {
    console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
  })
  .catch(({ i, delay }) => {
    console.log(`❌ Rejected promise ${i} in ${delay}ms`);
  });
}