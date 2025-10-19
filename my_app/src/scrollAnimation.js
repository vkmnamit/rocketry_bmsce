
export const initScrollAnimation = () => {
    const handleScroll = () => {
        const heroTitle = document.querySelector('.Main_img h1');
        const heroSection = document.querySelector('.Main_img');
        if (!heroTitle || !heroSection) return;

        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;


        const scrollProgress = Math.min(scrollPosition / (heroHeight * 0.8), 1);


        const translateY = scrollPosition * 0.3;
        const opacity = 1 - scrollProgress;
        const scale = 1 - (scrollProgress * 0.1);

        heroTitle.style.transform = `translateY(-${translateY}px) scale(${scale})`;
        heroTitle.style.opacity = Math.max(opacity, 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};
