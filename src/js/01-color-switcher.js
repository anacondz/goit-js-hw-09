function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

   const bodyEl = document.querySelector('body');
   const bStart = document.querySelector('[data-start]');
   const bStop = document.querySelector('[data-stop]');

let timerId = null;

bStart.addEventListener("click", btnStart);
bStop.addEventListener("click", btnStop);

function btnStart() {
    bStart.disabled = true;
    bStop.disabled = false;
    timerId = setInterval(() => {
        bodyEl.style.background = getRandomHexColor()
    }, 1000)
}

    function btnStop() {
        bStart.disabled = false;
        bStop.disabled = true;
        clearInterval(timerId);
    }
