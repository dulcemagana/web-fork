document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#d7aefb', '#fdcfe8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
