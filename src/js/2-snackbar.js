import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
`);

const form = document.querySelector(".form");
const labelElement = document.querySelector('label');
labelElement.classList.add("css-delay");
    
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delayInput = document.querySelector("input[name='delay']");
    const inputF = document.querySelector("input[value='fulfilled']").checked;
    const inputR = document.querySelector("input[value='rejected']").checked;
  
    let delay = Number(delayInput.value);

    if (isNaN(delay) || delay <= 0 || (!inputF && !inputR)) {
        console.log("e");
       
    }
    
    const fetchData = ({ value, delay, isSuccess }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isSuccess) {
                    resolve(value);
                }
                else {
                    reject(value);
                }
            }, delay);
        });
    }

    if (inputF) {
        fetchData({
            value: `Fulfilled promise in ${delay}ms`,
            delay: delay,
            isSuccess: true,
        }).then(value => iziToast.success({
            title: "OK",
            titleColor: "white",
              position: 'topCenter',
              messageColor: 'white',
              backgroundColor: 'lightgreen',
              progressBarColor: 'black',
              theme: 'light',
              icon: 'fa-solid fa-check',
              iconColor: "white",
              class: "custom-toast",
              message: value, }));
    }

    else if (inputR) {
        fetchData({
            value: `Rejected promise in ${delay}ms`,
            delay: delay,
            isSuccess: false,
        }).catch(error => iziToast.error({
            class: "custom-toast",
              position: 'topCenter',
              messageColor: 'white',
              backgroundColor: 'red',
              progressBarColor: 'black',
              theme: 'light',
            icon: 'fa-solid fa-xmark',
              iconColor: "white",
              message: error, }));
    }
});
    
