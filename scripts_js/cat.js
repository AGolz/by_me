document.addEventListener("DOMContentLoaded", function () {
    var cat = document.getElementById('cat');
    var screenWidth = window.innerWidth - 50;
    var catWidth = 50;

    function getRandomYPosition() {
        var screenHeight = window.innerHeight - 50;
        var randomY = Math.floor(Math.random() * screenHeight);
        return randomY;
    }

    function updateCatPosition() {
        var randomY = getRandomYPosition();
        
        cat.style.left = '0px';
        cat.style.top = randomY + 'px';

        cat.style.transition = 'left 3s linear';
        cat.style.left = screenWidth - catWidth + 'px';

        // Reset cat's position after the animation
        setTimeout(function () {
            cat.style.transition = 'none';
            cat.style.left = '0px';
            requestAnimationFrame(updateCatPosition);
        }, 3000);
    }

    updateCatPosition();
});

