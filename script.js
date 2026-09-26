const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you!\n\nYour message has been received.");

    contactForm.reset();
  });
}
