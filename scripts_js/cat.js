document.addEventListener("DOMContentLoaded", function () {
    function getRandomPosition() {
        var screenWidth = window.innerWidth - 50;
        var screenHeight = window.innerHeight - 50;

        var randomX = Math.floor(Math.random() * screenWidth);
        var randomY = Math.floor(Math.random() * screenHeight);

        return { x: randomX, y: randomY };
    }

    function isOverlap(element1, element2) {
        var rect1 = element1.getBoundingClientRect();
        var rect2 = element2.getBoundingClientRect();

        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }

    function updateCatPosition() {
        var cat = document.getElementById('cat');
        var content = document.getElementById('content');
        var newPosition = getRandomPosition();

        if (!isOverlap(cat, content)) {
            cat.style.left = newPosition.x + 'px';
            cat.style.top = newPosition.y + 'px';
        }
    }

    updateCatPosition();

    setInterval(updateCatPosition, 3000);
});
