document.addEventListener("DOMContentLoaded", function () {
    var cat = document.getElementById('cat');
    var catWidth = 50;
    var leftIndentation = 20;
    var appearanceDuration = 7000;
    var disappearanceInterval = 45000;

    function getRandomYPosition() {
        var screenHeight = window.innerHeight - 50;
        var randomY = Math.floor(Math.random() * screenHeight);
        return randomY;
    }

    function updateCatPosition() {
        var randomSide = Math.random() < 0.5 ? 'left' : 'right';
        var screenWidth = window.innerWidth - 50;

        if (randomSide === 'left') {
            cat.style.left = leftIndentation + 'px';
        } else {
            cat.style.left = (screenWidth - catWidth) + 'px';
        }

        var randomY = getRandomYPosition();
        cat.style.top = randomY + 'px';

        setTimeout(function () {
            cat.style.display = 'none';
            setTimeout(function () {
                cat.style.display = 'block';
            }, disappearanceInterval);
        }, appearanceDuration);
    }

    updateCatPosition();

    setInterval(updateCatPosition, appearanceDuration + disappearanceInterval);
});

