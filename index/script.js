document.addEventListener('DOMContentLoaded', function() {

    var topText = document.querySelector('.top-text');
    
    window.addEventListener('scroll', function() {
 
        var scrollPosition = window.scrollY;
        
        var threshold = 100;
        

        if (scrollPosition > threshold) {
            topText.style.color = '#ff5722'; 
        } else {
            topText.style.color = '#fff';
        }
    });
});