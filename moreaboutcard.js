document.addEventListener("DOMContentLoaded", () => {
    // Founder button interactivity and click log
    const founderBtn = document.querySelector(".founder-btn");
    
    if (founderBtn) {
        founderBtn.addEventListener("click", (e) => {
            console.log("More About Alok button clicked successfully!");
        });
    }
});