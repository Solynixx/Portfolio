const texts = [
    "My name is Edbert Chandra",
    "I am a junior front-end developer",
];

let index = 0;
let charIndex = 0;
let deleting = false;
let speed = 120;

function type() {
    const current = texts[index];

    if (!deleting) {
        // Mengetik
        charIndex++;
        document.getElementById("typing").textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
            setTimeout(() => deleting = true, 1000); // jeda sebelum delete
        }
    } else {
        // Menghapus
        charIndex--;
        document.getElementById("typing").textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % texts.length; // pindah ke tulisan berikutnya
        }
    }

    setTimeout(type, speed);
}

type();