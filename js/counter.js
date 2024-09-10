document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const options = {
        threshold: 1.0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;

                const updateCounter = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace(/,/g, ''); // Remove commas for calculation

                    const increment = target / 100; // Adjust the increment value to control speed

                    if (count < target) {
                        const newCount = Math.ceil(count + increment);
                        counter.innerText = formatNumber(newCount);
                        setTimeout(updateCounter, 10); // Adjust the timeout value to control speed
                    } else {
                        counter.innerText = formatNumber(target);
                    }
                };

                const formatNumber = (number) => {
                    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };

                updateCounter();
                observer.unobserve(counter); // Stop observing once the counter has started
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});