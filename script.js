/*
 * Button Ripple Effect on Click
 * This script creates a "ripple" effect when a button with the class "btn-ripple" is clicked.
 * The effect is achieved by dynamically creating a <span> element positioned at the click location,
 * which then fades out and is removed after 1 second.
 */

const btnRipple = document.querySelectorAll('.btn-ripple');

// Loop through each button and add a click event listener
btnRipple.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        // Calculate the click position relative to the button
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        // Create a <span> element to act as the ripple
        let ripples = document.createElement('span');
        ripples.style.left = `${x}px`; // Set the horizontal position
        ripples.style.top = `${y}px`; // Set the vertical position

        // Append the ripple <span> to the button
        this.appendChild(ripples);

        // Remove the ripple <span> after 1 second to avoid memory leaks
        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});

/* Button Bouncing on Hover*/
const bounceButtons = document.querySelectorAll('.btn-bouce');

// Loop through each button to apply the animation
bounceButtons.forEach((btn) => {
    // Replace the button's inner text with individually wrapped letters
    btn.innerHTML = btn.innerText // Access the button's current text content
        .trim() // Remove any extra whitespace from the beginning or end
        .split('') // Split the text into an array of individual characters
        .map((ltr, i) => {
            if (ltr === ' ') {
                // Preserve spaces without wrapping them
                return ' ';
            } else {
                // Wrap each letter in a span with a unique transition delay
                return `<span style="transition-delay:${
                    i * 30
                }ms">${ltr}</span>`;
            }
        })
        .join(''); // Rejoin the array of strings into a single string with wrapped letters
});

/* Hover change buttons */

// Add mouse movement tracking for hover-shadow effect on buttons
const hoverShadowButtons = document.querySelectorAll('.btn-shadow');

// Loop through each button to track mouse movement
hoverShadowButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        // Get mouse position relative to the button
        let x = e.pageX - btn.offsetLeft;
        let y = e.pageY - btn.offsetTop;

        // Update custom properties used for positioning in CSS
        btn.style.setProperty('--x', `${x}px`);
        btn.style.setProperty('--y', `${y}px`);
    });
});
