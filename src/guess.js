//setting game name
let game_name = 'Guess the Word';

document.title = game_name;
document.querySelector('h1').innerHTML= game_name;
document.querySelector('footer').innerHTML= `${game_name} Game Created by m7mad.tech@gmail.com`;


//setting game play
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;

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
}

window.onload = function () {
    generateInputs()
}