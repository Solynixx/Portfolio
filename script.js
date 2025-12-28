const texts = [
    "Junior Front-End Developer.",
    "Building clean & simple interface.",
    "Learning by building real projects."
];

let index = 0; //Select index from const text 
let charIndex = 0; // The position of the letter being typed or deleted.
let deleting = false;
let speed = 100;

function type() {
    const current = texts[index]; //Get the text currently in use based on the index.

    if (deleting === false) {
        // Typing
        charIndex++;
        document.getElementById("typing").textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
            setTimeout( () => deleting = true, 250)    
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

// copy right year 
document.getElementById("year").textContent = new Date().getFullYear();
