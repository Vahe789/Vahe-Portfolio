

const phrases = ["Frontend Developer...", "Web Developer..."]; 
const typingText = document.getElementById("text");
let index = 0;
let charIndex = 0;
let currentPhrase = phrases[index]; 
let typingSpeed = 100; 
let deletingSpeed = 50; 
let pauseTime = 1500; 

function type() {
    if (charIndex < currentPhrase.length) {
        typingText.innerHTML += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseTime); 
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        index = (index + 1) % phrases.length; 
        currentPhrase = phrases[index];
        setTimeout(type, pauseTime); 
    }
}


type();
