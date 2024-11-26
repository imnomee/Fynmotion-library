const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
    const image = circle.getElementsByTagName('img')[0].src;
    circle.style.backgroundImage = `url(${image})`;
});
