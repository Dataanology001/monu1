document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    // Function to start blinking animation
    function startBlinking() {
        whatsappBtn.classList.add('blink');
        
        // After 8 seconds, switch to pulse animation
        setTimeout(() => {
            whatsappBtn.classList.remove('blink');
            whatsappBtn.classList.add('pulse');
        }, 8000);
    }
    
    // Initial delay before starting animations
    setTimeout(startBlinking, 2000);
    
    // Toggle animations on hover
    whatsappBtn.addEventListener('mouseenter', function() {
        this.classList.remove('blink', 'pulse');
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        // Restart animations after hover
        setTimeout(() => {
            startBlinking();
        }, 2000);
    });
    
    // Add click animation
    whatsappBtn.addEventListener('click', function(e) {
        // Prevent default to show animation before redirecting
        e.preventDefault();
        
        // Add click effect
        this.style.transform = 'scale(0.9)';
        
        // Remove click effect after animation
        setTimeout(() => {
            this.style.transform = '';
            // Redirect after animation
            window.location.href = this.href;
        }, 200);
    });
    
    // Random blink effect every 20-40 seconds
    function randomBlink() {
        const randomTime = Math.random() * 20000 + 20000; // 20-40 seconds
        
        setTimeout(() => {
            if (!whatsappBtn.matches(':hover')) {
                whatsappBtn.classList.add('blink');
                
                setTimeout(() => {
                    whatsappBtn.classList.remove('blink');
                }, 2000);
            }
            
            // Schedule next blink
            randomBlink();
        }, randomTime);
    }
    
    // Start random blink after initial animations
    setTimeout(randomBlink, 10000);
});
