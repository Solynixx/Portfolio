const texts = [
    "Junior Front-End Developer.",
    "Building clean & simple interface.",
    "Learning by building real projects."
];

let index = 0;
let charIndex = 0;
let deleting = false;
let speed = 100;

function type() {
    const current = texts[index];

    if (!deleting) {
        charIndex++;
        document.getElementById("hero-typing").textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
            setTimeout(() => deleting = true, 250);
        }
    } else {
        charIndex--;
        document.getElementById("hero-typing").textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % texts.length;
        }
    }
    setTimeout(type, speed);
}
type();

// copy right year 
document.getElementById("year").textContent = new Date().getFullYear();

// make active scroll navbar link
const sections = document.querySelectorAll("main [id]");
const navlink = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach (section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight /3){
            current = section.getAttribute("id");
        }
    })

    navlink.forEach (link => {
        link.classList.toggle("active", link.href.includes(current) );
        }
    );
}); 


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2,
  root: null,
  rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach((el) => observer.observe(el));