const texts = [
    "My name is Edbert Chandra.",
    "I am a junior front-end developer.",
];

let index = 0; //Select index from const text 
let charIndex = 0; // The position of the letter being typed or deleted.
let deleting = false;
let speed = 120;

function type() {
    const current = texts[index]; //Get the text currently in use based on the index.

    if (deleting === false) {
        // Typing
        charIndex++;
        document.getElementById("typing").textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
            setTimeout( () => deleting = true, 1000)
        }; // pause before deleting
    } 

    else {
        // Deleting
        charIndex--;
        document.getElementById("typing").textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % texts.length; // move to the next article
        }
    }

    setTimeout(type, speed);
}

type();