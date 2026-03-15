document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate
    const elementsToAnimate = [
        document.querySelector('.brand'),
        document.querySelector('.title'),
        document.querySelector('.subtitle'),
        document.querySelector('.flavor-badge'),
        document.querySelector('.description-box'),
        ...document.querySelectorAll('.feature-item'),
        document.querySelector('.dosage-info')
    ];

    // Initial state setup
    elementsToAnimate.forEach((el, index) => {
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.15 + 0.5}s`;
    });

    const productImage = document.querySelector('.product-image');
    if (productImage) {
        productImage.style.opacity = '0';
        productImage.style.transform = 'scale(0.9) translateY(20px)';
        productImage.style.transition = 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s';
    }

    // Trigger animations after a short delay
    setTimeout(() => {
        elementsToAnimate.forEach(el => {
            if (!el) return;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });

        if (productImage) {
            productImage.style.opacity = '1';
            productImage.style.transform = 'scale(1) translateY(0)';

            // Allow CSS hover animation to take over after entrance
            setTimeout(() => {
                productImage.style.transition = 'none';
            }, 1400);
        }
    }, 100);

    // Subtle background parallax effect based on mouse movement
    // Even though it's digital signage, this adds a nice touch if tested on desktop
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const shapes = document.querySelectorAll('.bg-shape');
        shapes.forEach((shape, i) => {
            const speed = (i + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
            shape.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
        });
    });
});