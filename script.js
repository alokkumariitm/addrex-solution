document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EXPERTISE LINKS EXTERNAL CONFIGURATION
    const cards = document.querySelectorAll(".exp-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const destination = card.getAttribute("data-link");
            if (destination) {
                window.open(destination, "_blank");
            }
        });
    });

    // 2. MARQUEE SEAMLESS LOOP ENGINE
    const track = document.getElementById("marqueeTrack");
    if(track) {
        track.innerHTML += track.innerHTML; // Duplicates element blocks seamlessly
    }

    // 3. SECURE GSAP INTERACTION SYSTEM
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Core Sequencing
        gsap.from(".hero-container > *", {
            opacity: 0,
            y: 25,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out"
        });

        // Dynamic Elements Scroll Reveals
        gsap.from(".plan-card, .exp-card", {
            scrollTrigger: {
                trigger: ".plans-grid, .expertise-grid",
                start: "top 85%"
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out"
        });
    }
    // 4. FAQ ACCORDION ENGINE
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const answer = item.querySelector(".faq-answer");
            
            // Toggle active status
            item.classList.toggle("active");
            
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0px";
            }
        });
    });
});


