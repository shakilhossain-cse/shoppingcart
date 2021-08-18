const plusbtn = document.getElementById('incrisebtn');
const minusbtn = document.getElementById('decrisebtn');
const inputValue = document.getElementById('input');
let price = document.getElementById('price');


function quantitySum(isPlus) {
    const value = parseInt(inputValue.value);
    if (isPlus) {
        const number = value + 1;
        inputValue.value = number;
        price.innerText = number * 59;
    }else{
        const number = value - 1;
        if (number > 0) {
            inputValue.value = number;
            price.innerText = number * 59;
        }
    }
}

plusbtn.addEventListener('click',function () {
    quantitySum(true)
});

minusbtn.addEventListener('click',function () {
    quantitySum(false)
   
});