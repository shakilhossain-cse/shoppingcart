const plusbtn = document.getElementById('incrisebtn');
const minusbtn = document.getElementById('decrisebtn');
const phnplusbtn = document.getElementById('phnincrise');
const phnminusbtn = document.getElementById('phndecrise');
const inputValue = document.getElementById('input');
const inputValuePhn = document.getElementById('inputphn');
let price = document.getElementById('price');
let phnPrice = document.getElementById('phnPrice');


function quantitySum(isPlus,money,input,amount) {
    const value = parseInt(input.value);
    if (isPlus) {
        const number = value + 1;
        input.value = number;
        amount.innerText = number * money;
    }else{
        const number = value - 1;
        if (number > 0) {
            input.value = number;
            amount.innerText = number * money;
        }
    }
}



phnplusbtn.addEventListener('click',function () {
    quantitySum(true,1219,inputValuePhn,phnPrice)
});

phnminusbtn.addEventListener('click',function () {
    quantitySum(false,1219,inputValuePhn,phnPrice)
});


plusbtn.addEventListener('click',function () {
    quantitySum(true,59,inputValue,price)
});

minusbtn.addEventListener('click',function () {
    quantitySum(false,59,inputValue,price)
   
});