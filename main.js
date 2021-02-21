function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin
    }
    else {
        return getPin();
    }
}

// generated pin 
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// event bubble

document.getElementById('digit-container')
    .addEventListener('click', function () {
        const digit = event.target.innerText;
        if (isNaN(digit)) {
            if (digit === 'C') {
                const typedInput = document.getElementById('typed-pin');
                typedInput.value = '';
            }
        }
        else {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = typedInput.value + digit;

        }
    })

//submit button 
function verifyPin() {
    const pin = document.getElementById('pin');
    const typedPin = document.getElementById('typed-pin');
    if (pin === typedPin) {
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';
    }
    else {
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = 'block';
    }
};



