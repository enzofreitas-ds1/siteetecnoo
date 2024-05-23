window.onload = function() {
    const img = document.getElementById('animatedImage');
    let movingDown = true;

    function toggleMove() {
        if (movingDown) {
            img.style.top = 'calc(50% - 50px)'; // Move the image near the bottom
        } else {
            img.style.top = '0'; // Move the image to the top
        }
        movingDown = !movingDown;
    }

    // Toggle the position every 1 seconds
    setInterval(toggleMove, 1000);
};






