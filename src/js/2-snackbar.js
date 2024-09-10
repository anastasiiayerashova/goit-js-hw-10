const delayInput = document.querySelector("input[name='delay']");
const inputF = document.querySelector("input[value='fulfilled']");
const inputR = document.querySelector("input[value='rejected']");
let number = delayInput.value;

const fetchData = ({ value, delay, isSuccess }) => {
    return new Promise((resolve, reject) => {
        if (isSuccess = true) {
            resolve(value);
        }
        else {
            reject(value);
        }
    }, delay);
}
const promises = [
    fetchData({
        value: `Fulfilled promise in ${number}ms`,
        delay: `${number}`,
        isSuccess: true,
    }),
    fetchData({
        value: `Rejected promise in ${number}ms`,
        delay: `${number}`,
        isSuccess: false,
    }),
];
Promise.all(promises).then(value => console.log(value)).catch(error => console.log(error));
