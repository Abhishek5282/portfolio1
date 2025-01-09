document.addEventListener('DOMContentLoaded', function() {
    // Select the 'Work Experience' section and entries within it.
    const experienceSection = document.querySelector('.experience-section');
    const experienceEntries = document.querySelectorAll('.experience-entry');
    let animated = false;  // Flag to control animation triggering once.

    // Function to start the animation by adding a 'start' class to each entry.
    function startAnimation() {
        if (!animated) {
            experienceEntries.forEach(entry => {
                entry.classList.add('start');
            });
            animated = true; // Ensure that the animation only plays once.
        }
    }

    // IntersectionObserver to observe when the '.experience-section' comes into view.
    const observer = new IntersectionObserver(entries => {
        // Loop through entries that are observed.
        entries.forEach(entry => {
            // Check if the observed entry is intersecting (visible).
            if (entry.isIntersecting && !animated) {
                startAnimation();  // Trigger the animation when section is visible.
                // You can unobserve after first play, if animation is needed only once.
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5  // Percentage of target's visibility at which callback is executed
    });

    // Start observing the 'Work Experience' section.
    observer.observe(experienceSection);
});