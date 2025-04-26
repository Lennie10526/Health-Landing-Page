JavaScript (script.js)

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    const diff = endOfDay - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('timer').innerHTML = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = "<p>⏰ Offer expired!</p>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// Email Form Submission
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Here you would typically send to an email service (Mailchimp, ConvertKit, etc.)
    alert(`Thanks! Your free plan will be sent to ${email}. Check your inbox!`);
    this.reset();
    
    // Redirect or show confirmation
    // window.location.href = "thank-you.html";
});

// CTA Button Tracking
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Track conversions (Google Analytics, Facebook Pixel, etc.)
        console.log("CTA clicked!");
    });
});