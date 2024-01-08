document.addEventListener("DOMContentLoaded", function () {
    var cat = document.getElementById('cat');
    var catWidth = 50;

    function getRandomYPosition() {
        var screenHeight = window.innerHeight - 50;
        var randomY = Math.floor(Math.random() * screenHeight);
        return randomY;
    }

    function updateCatPosition() {
        var randomSide = Math.random() < 0.5 ? 'left' : 'right';
        var screenWidth = window.innerWidth - 50;

        if (randomSide === 'left') {
            cat.style.left = '0px';
        } else {
            cat.style.left = (screenWidth - catWidth) + 'px';
        }

        var randomY = getRandomYPosition();
        cat.style.top = randomY + 'px';
    }

    updateCatPosition();

    setInterval(updateCatPosition, 3000);
});

