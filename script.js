//LINKING DOM
const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const outputBox = document.getElementById('output-box');
const output = document.getElementById('output');

const romanNumbers = [
    {symbol: 'M', value: 1000},
    {symbol: 'CM', value: 900},
    {symbol: 'D', value: 500},
    {symbol: 'CD', value: 400},
    {symbol: 'C', value: 100},
    {symbol: 'XC', value: 90},
    {symbol: 'L', value: 50},
    {symbol: 'XL', value: 40},
    {symbol: 'X', value: 10},
    {symbol: 'IX', value: 9},
    {symbol: 'V', value: 5},
    {symbol: 'IV', value: 4},
    {symbol: 'I', value: 1}
];

//FUNCTIONS


const findHighestValue = (n) => {
   return romanNumbers.find(obj => obj.value <= n)
}



const convertNumber = (n) => {
    n = Number(n); // Converting string to number

    if (n === 0){
        return ''
    }


    if(n > 0 && n < 4000){
    const {value, symbol} = findHighestValue(n);
    
    return symbol + convertNumber(n - value);
    };
};




//EVENT LISTENERS
button.addEventListener('click', () => {
    outputBox.classList.remove('hide');

    if(input.value === ""){
        output.innerText="Please enter a valid number";
        return
    } else if(input.value < 0){
        output.innerText="Please enter a number greater than or equal to 1";
        return
    } else if (input.value >= 4000){
        output.innerText="Please enter a number less than or equal to 3999";
        return
    }

    output.innerText = convertNumber(input.value);
    input.value = '';
    });