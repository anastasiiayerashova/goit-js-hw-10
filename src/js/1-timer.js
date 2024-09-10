document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">`);

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate = null;
let intervalId = null;
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;
const datetimePicker = document.querySelector("#datetime-picker");
datetimePicker.classList.add('datetime-picker');

const options = {
    enableTime: true,
   dateFormat: "Y-m-d H:i",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate <= new Date()) {
          iziToast.error({
              position: 'topCenter',
              messageColor: 'white',
              backgroundColor: 'red',
              progressBarColor: 'red',
              theme: 'light',
              icon: 'fa-regular fa-circle-xmark fa-beat',
              iconColor: 'black',
              message: "Please choose a date in the future", });
      }
      else {
          userSelectedDate = selectedDate;
          startBtn.disabled = false;
      }
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", () => {
    if (!userSelectedDate) return;
    startBtn.disabled = true;
    datetimePicker.disabled = true;
    intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = userSelectedDate - currentTime;
        if (timeDifference <= 0) {
            clearInterval(intervalId);
            addLeadingZero(0);
            datetimePicker.disabled = false;
            return;
        }
        addLeadingZero(timeDifference);
    }, 1000);
});

function addLeadingZero(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    document.querySelector("[data-days]").textContent = days;
    document.querySelector("[data-hours]").textContent = String(hours).padStart(2, '0');
    document.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, '0');
document.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, '0');
}

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

console.log(convertMs(2000)); 
console.log(convertMs(140000)); 
console.log(convertMs(24140000)); 



