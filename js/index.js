const btnDigits = document.querySelectorAll('.digits button');
btnDigits.forEach(digit => digit.addEventListener('click', digitPressed));

const display = document.querySelector('.display');

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

const btnOpers = document.querySelectorAll('.opers button');
btnOpers.forEach(digit => digit.addEventListener('click', operPressed));

function operPressed(ev) {
    if (
        display.value.includes('+') === true ||
        display.value.includes('-') === true ||
        display.value.includes('*') === true ||
        display.value.includes('/') === true
    ) {
        display.value = display.value.substring(0, display.value.length - 1);
    }
    display.value += ev.target.innerText;
}

const btnEq = document.querySelector('.eq');
btnEq.addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}

const btnRoot = document.querySelector('.root');
btnRoot.addEventListener('click', rootPressed);

function rootPressed() {
    display.value = Math.sqrt(display.value);
}

const btnErase = document.querySelector('.erase');
btnErase.addEventListener('click', erasePressed);

function erasePressed() {
    display.value = "";
}

const btnZero = document.getElementById('zero');
btnZero.addEventListener('click', dividedByZero);

function dividedByZero() {
    if (display.value.includes('/0') === true) {
        alert("Nooo! You cannot do that!");
    }
}