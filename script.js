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
            setTimeout(() => deleting = true , 250);
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
const sections = document.querySelectorAll("main section[id]");
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

    navlink.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`); // fix
  });
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
  threshold: 0.4,
  root: null,
  rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach((el) => observer.observe(el));

// Notification for contact form submission
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name")?.value.trim() || "";
    const email = contactForm.querySelector("#email")?.value.trim() || "";
    const subject = contactForm.querySelector("#subject")?.value.trim() || "";
    const message = contactForm.querySelector("#message")?.value.trim() || "";

    // validasi basic
    if (name.length < 2) {
      formStatus.textContent = "Name must be at least 2 characters.";
      formStatus.style.color = "crimson";
      return;
    }

    if (!email.includes("@") || email.length < 5) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.style.color = "crimson";
      return;
    }

    if (message.length < 10) {
      formStatus.textContent = "Message must be at least 10 characters.";
      formStatus.style.color = "crimson";
      return;
    }

    // prevent spamming
    const now = Date.now();
    const pageLoadedAt = window.__pageLoadedAt || now;
    if (now - pageLoadedAt < 3000) {
      formStatus.textContent = "Please wait a few seconds before sending.";
      formStatus.style.color = "crimson";
      return;
    }

    formStatus.textContent = "Sending...";
    formStatus.style.color = "#222";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        formStatus.textContent = "Thanks! Your message has been sent.";
        formStatus.style.color = "green";
        contactForm.reset();
      } else {
        formStatus.textContent = "Oops! Failed to send. Please try again.";
        formStatus.style.color = "crimson";
      }
    } catch (error) {
      formStatus.textContent = "Network error. Check your internet connection.";
      formStatus.style.color = "crimson";
    }
  });
}

window.__pageLoadedAt = Date.now();