document.addEventListener("DOMContentLoaded", function () {
    var cat = document.getElementById('cat');
    var catWidth = 50;
    var rightIndentation = 50;
    var leftIndentation = 90;
    var appearanceDuration = 17100;
    var disappearanceInterval = 60000;

    function getRandomYPosition() {
        var screenHeight = window.innerHeight - 50;
        var randomY = Math.floor(Math.random() * screenHeight);
        return randomY;
    }

    function updateCatPosition() {
        var randomSide = Math.random() < 0.5 ? 'left' : 'right';
        var screenWidth = window.innerWidth - 50;

        if (randomSide === 'right') {
            cat.style.right = rightIndentation + 'px';
        } else {
            cat.style.right = (screenWidth - catWidth - leftIndentation) + 'px';
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

    cat.style.display = 'none';

    setTimeout(function () {
        cat.style.display = 'block';
        updateCatPosition();
        setInterval(updateCatPosition, appearanceDuration + disappearanceInterval);
    }, 30000);
});
