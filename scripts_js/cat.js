function getRandomPosition() {
    var screen Width = window.innerWidth - 50;
    var screenHeight = window.innerHeight - 50;

    var content = document.getElementById('content');
    var contentRect = content.getBoundingClientRect();
    var contentWidth = contentRect.width;
    var contentHeight = contentRect.height;

    // Calculate the maximum positions without overlapping with the text content
    var maxX = screen Width - contentWidth;
    var maxY = screenHeight - contentHeight;

    // Generate random positions within the calculated limits
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
