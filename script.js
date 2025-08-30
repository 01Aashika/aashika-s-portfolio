// Typewriter effect
const text = "Aspiring Web Developer | Frontend Enthusiast | Problem Solver";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Animate Skills Progress Bars when visible
const progressBars = document.querySelectorAll(".progress-bar");
window.addEventListener("scroll", () => {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && bar.style.width === "0px") {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
// script.js
window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar");
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sectionTop + sectionHeight / 4) {
    progressBars.forEach(bar => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if(name && email && subject && message) {
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill in all fields.");
  }
});
// Section fade-in when visible
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
function openChat() {
  document.getElementById("chat-box").style.display = "flex";
}

function closeChat() {
  document.getElementById("chat-box").style.display = "none";
}

function sendMessage() {
  let input = document.getElementById("chat-input");
  let message = input.value.trim();
  if (message) {
    let chatBody = document.getElementById("chat-body");
    let newMsg = document.createElement("p");
    newMsg.innerHTML = "<b>You:</b> " + message;
    chatBody.appendChild(newMsg);
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// Page load fade-in
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Smooth fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-in-section").forEach(sec => {
    sec.classList.add("fade-in-section");
    observer.observe(sec);
  });
});
