const currencyEl_one = document.getElementById
('currency-one');
const amountEl_one = document.getElementById
('amount-one');
const currencyEl_two = document.getElementById
('currency-two');
const amountEl_two = document.getElementById
('amount-two');


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update DOM
function calculate(){

const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;

//This is a free currency exchange API that I got from the internet.
fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
.then(res => res.json())
.then(data => {
   
   const rate = data.rates[currency_two];

   rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

   amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
});


}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


calculate();