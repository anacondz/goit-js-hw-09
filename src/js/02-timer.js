import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  inputDate: document.querySelector('input'),
     btnStart : document.querySelector('button[data-start]'),
     pick : document.querySelector('#datetime-picker'),
     days : document.querySelector('[data-days]'),
     hours : document.querySelector('[data-hours]'),
     minutes : document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    timer: document.querySelector('.timer'),
    field: document.querySelectorAll('.field'),
    value: document.querySelectorAll('.value'),
    label: document.querySelectorAll('.label'),
}
refs.btnStart.disabled = true;
refs.timer.style.display = 'flex';
refs.timer.style.marginTop = '10px';

refs.field.forEach(e => {
  e.style.marginRight = '20px';
});

refs.value.forEach(e => {
  e.style.fontSize = '20px';
 
});

refs.label.forEach(e => {
  e.style.fontSize = '20px';
 
});


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let deltaTime = selectedDates[0].getTime() - currentDate;

    if (deltaTime <= 0) {
      alert('Please choose a date in the future');
    } else {
      refs.btnStart.disabled = false;
     
      refs.btnStart.addEventListener('click', () => {

        const timer = setInterval(() => {
          
          const newTime = Date.now();
          this.isActive = true;
          const newDelta = selectedDates[0].getTime() - newTime;
           refs.pick.disabled = true;
            refs.btnStart.disabled = true;
          const ReverseTimer = convertMs(newDelta);
          refs.seconds.textContent = addLeadingZero(ReverseTimer.seconds);
          refs.minutes.textContent = addLeadingZero(ReverseTimer.minutes);
          refs.hours.textContent = addLeadingZero(ReverseTimer.hours);
          refs.days.textContent = addLeadingZero(ReverseTimer.days);
          if (newDelta <= 1000) {
            clearInterval(timer);

            
          }
        }, 1000);
      });
    }
  },

};

flatpickr(refs.pick, options);

const currentDate = Date.now();

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

