let currentNumber = '0';
let operator = '';
let operantee = '';

const inputDisplay = document.querySelector('input');
console.log(inputDisplay.value)
const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btnTxt = e.target.textContent;
        if (['+', '-', '*', '/', '%', '^'].includes(btnTxt)) {
            operator = btnTxt;
            operantee = Number(currentNumber);
            currentNumber = '0'
        } else if (btnTxt === '=') {
            if (operator === '+') currentNumber = parseFloat(operantee) + parseFloat(currentNumber);
            if (operator === '-') currentNumber = parseFloat(operantee) - parseFloat(currentNumber);
            if (operator === '*') currentNumber = parseFloat(operantee) * parseFloat(currentNumber);
            if (operator === '/') currentNumber = parseFloat(operantee) / parseFloat(currentNumber);
            if (operator === '%') currentNumber = parseFloat(operantee) % parseFloat(currentNumber);
            if (operator === '^') currentNumber = parseFloat(operantee) ** parseFloat(currentNumber);
        } else if (btnTxt == 'AC') {
            currentNumber = '0';
            operator = '';
            operantee = '';
        } else currentNumber =
					currentNumber != "0"
						? currentNumber + btnTxt
						: Number(btnTxt);
        inputDisplay.value = currentNumber;
    })
})