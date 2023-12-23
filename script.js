/*
Real-time Character Counter project features a dynamic textarea with adjustable character limit.
Users can input text, change the maximum length on-the-fly, and receive instant character count updates.
The values persist across page refreshes, enhancing the user experience. Built with HTML, CSS, and JavaScript.

*/

const textArea = document.querySelector('#textarea');
const totalCounter = document.querySelector('#total-counter');
const remainingCounter = document.querySelector('#remaining-counter');
const maxLengthInput = document.querySelector('#max-length');
const wordCounter = document.querySelector('#word-counter');

// Retrieve the stored value from localStorage
textArea.value = localStorage.getItem('savedTextAreaValue') || '';

// Set the maxlength from localStorage or the default value
textArea.maxLength = parseInt(localStorage.getItem('savedTextAreaValue') || maxLengthInput.value, 10);

textArea.addEventListener('keyup', (event) => {
    updateCounter();
    localStorage.setItem('savedTextareaValue', textArea.value);
});

maxLengthInput.addEventListener('input', () => {
    textArea.maxLength = parseFloat(maxLengthInput.value, 10);
    updateCounter();
    localStorage.setItem('savedMaxLength', textArea.maxLength);
});

function updateCounter() {
    const text = textArea.value;
    totalCounter.innerText = textArea.value.length;
    remainingCounter.innerText = textArea.maxLength - textArea.value.length;

    // Count Words
    const countWords = text.split(/\s+/).filter((word) => {
        return word.length > 0;
    }).length;

    wordCounter.innerText = countWords;
}
