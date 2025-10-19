// Gallery scroll animation
export const initGalleryAnimation = () => {
    const handleScroll = () => {
        const gallerySection = document.querySelector('.feature-in-2');
        const galleryImages = document.querySelector('.gallery-images');

        if (!gallerySection || !galleryImages) {
            console.log('Gallery elements not found');
            return;
        }

        const rect = gallerySection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress through the gallery section
        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
            const translateY = -scrollProgress * 150; // Move up by 150px max

            galleryImages.style.transform = `translateY(${translateY}px)`;
            console.log('Gallery transform:', translateY);
        }
    };

    // Wait for DOM to be fully loaded
    setTimeout(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
    }, 100);

    // Cleanup function
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};
