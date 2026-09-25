// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// ===========================
// DARK MODE
// ===========================

const themeBtn = document.getElementById("theme-toggle");

const body = document.body;

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// ===========================
// BACK TO TOP
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================
// SCROLL PROGRESS BAR
// ===========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ===========================
// TYPING ANIMATION
// ===========================

const typingElement = document.getElementById("typing");

const words = [
    "Python Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "Backend Developer",
    "Front-end Developer",
    "Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ===========================
// ACTIVE NAVBAR
// ===========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===========================
// SMOOTH SCROLL
// ===========================

navItems.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===========================
// SCROLL REVEAL
// ===========================

const revealElements = document.querySelectorAll(

    ".section-title,\
    .about-container,\
    .education-card,\
    .skill,\
    .tool-card,\
    .project-card,\
    .certificate-card,\
    .timeline-item,\
    .contact-container,\
    .stat-card"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===========================
// SKILL BAR ANIMATION
// ===========================

const progressBars = document.querySelectorAll(".progress-bar");

let skillAnimated = false;

function animateSkills() {

    const skillsSection = document.getElementById("skills");

    const sectionTop = skillsSection.offsetTop - 300;

    if (window.scrollY >= sectionTop && !skillAnimated) {

        progressBars.forEach(bar => {

            const width = bar.style.width || window.getComputedStyle(bar).width;

            const target = bar.className.match(/html|css|javascript|react|python|django|fastapi|postgresql/);

            if (target) {
                switch(target[0]){
                    case "html":
                        bar.style.width = "95%";
                        break;
                    case "css":
                        bar.style.width = "90%";
                        break;
                    case "javascript":
                        bar.style.width = "85%";
                        break;
                    case "react":
                        bar.style.width = "80%";
                        break;
                    case "python":
                        bar.style.width = "90%";
                        break;
                    case "django":
                        bar.style.width = "85%";
                        break;
                    case "fastapi":
                        bar.style.width = "80%";
                        break;
                    case "postgresql":
                        bar.style.width = "80%";
                        break;
                }
            }

        });

        skillAnimated = true;

    }

}

window.addEventListener("scroll", animateSkills);

// ===========================
// COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    const stats = document.getElementById("stats");

    const trigger = stats.offsetTop - 250;

    if (window.scrollY >= trigger && !counterStarted) {

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

        counterStarted = true;

    }

}

window.addEventListener("scroll", startCounter);


// ===========================
// CONTACT FORM
// ===========================

emailjs.init({
    publicKey: "j0duI09Ll6KB3g9uc"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {

        alert("Please enter a valid name.");
        return;

    }

    if (!emailRegex.test(email)) {

        alert("Please enter a valid email address.");
        return;

    }

    if (subject.length < 3) {

        alert("Subject should be at least 3 characters.");
        return;

    }

    if (message.length < 10) {

        alert("Message should contain at least 10 characters.");
        return;

    }

    const templateParams = {

        name: name,
        email: email,
        subject: subject,
        message: message

    };

    emailjs.send(
        "service_mevfovi",
        "template_o96m2fc",
        templateParams
    )

    .then(function(response) {

        console.log("SUCCESS!", response.status, response.text);

        alert("Message sent successfully!");

        form.reset();

    })

    .catch(function(error) {

        console.error("FAILED...", error);

        alert("Failed to send message. Please try again.");

    });

});

// ===========================
// PRELOADER (Optional)
// ===========================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ===========================
// CONSOLE MESSAGE
// ===========================

console.log("%cWelcome Recruiter 👋",
"font-size:24px;color:#dc2626;font-weight:bold;");

console.log("%cDesigned & Developed by K. Dinesh Kumar",
"font-size:16px;color:#2563eb;");