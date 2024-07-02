//setting game name
let game_name = 'Guess the Word';

document.title = game_name;
document.querySelector('h1').innerHTML= game_name;
document.querySelector('footer').innerHTML= `${game_name} Game Created by m7mad.tech@gmail.com`;


//setting game play
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;

let wordToGuess = '';
const words = ['Create' , 'Update' , 'Select' , 'Delete' , 'Branch' , 'School'];
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(wordToGuess)
function generateInputs() {
    const inputContainer = document.querySelector('.inputs');

    for (let i=1; i <= numberOfTries; i++) {
        const tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>try ${i}</span>`

        if (i !== 1) tryDiv.classList.add('disabled-input');

        inputContainer.appendChild(tryDiv);

        for (let j=1; j <= numberOfLetters; j++) {
            const input = document.createElement('input');
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute('maxlength','1')

            tryDiv.appendChild(input);
        }
    }

    inputContainer.children[0].children[1].focus()

    //disable all inputs except first one
    const disable_inputs = document.querySelectorAll('.disabled-input input')
    disable_inputs.forEach((input) => (input.disabled = true));

    const inputs = document.querySelectorAll('input')

    inputs.forEach((input , n_index) => {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();

            const nextInput = inputs[n_index + 1]
            if (nextInput) nextInput.focus();
        });

        input.addEventListener('keydown' , function(event) {
            
            if (event.key === 'ArrowRight') {
                if(inputs[n_index + 1]) inputs[n_index + 1].focus();
            }

            if (event.key === 'ArrowLeft') {
                if(inputs[n_index - 1]) inputs[n_index - 1].focus();
            }
        })
    })
}

const check_button = document.querySelector('.check');
check_button.addEventListener('click',handleGuess);
function handleGuess() {
    let success = true;

    for (i=1; i<=numberOfLetters; i++){
        const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`)
        const letter =inputField.value.toLowerCase();

        let actualLetter = wordToGuess[i-1];
        if (letter === actualLetter) {
            inputField.classList.add('inplace')
        }
        else if (wordToGuess.includes(letter) && letter !== ""){
            inputField.classList.add('not-inplace')
            success = false;
        }
        else {inputField.classList.add('wrong'); success = false;}
    }
}

window.onload = function () {
    generateInputs()
}