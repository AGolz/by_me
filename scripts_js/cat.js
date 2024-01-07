document.addEventListener("DOMContentLoaded", function () {
    function getRandomPosition() {
        var screenWidth = window.innerWidth - 50;
        var screenHeight = window.innerHeight - 50;

        var randomX = Math.floor(Math.random() * screenWidth);
        var randomY = Math.floor(Math.random() * screenHeight);

        return { x: randomX, y: randomY };
    }

    function updateCatPosition() {
        var cat = document.getElementById('cat');
        var newPosition = getRandomPosition();

        cat.style.left = newPosition.x + 'px';
        cat.style.top = newPosition.y + 'px';
    }

    updateCatPosition();

    setInterval(updateCatPosition, 3000);
});
