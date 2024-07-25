function scrollToSection(direction) {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    const sectionHeights = Array.from(sections).map(section => section.offsetTop);

    if (direction === 'next') {
        const nextSectionIndex = sectionHeights.findIndex(height => height > currentScroll);
        if (nextSectionIndex !== -1) {
            window.scrollTo({
                top: sectionHeights[nextSectionIndex],
                behavior: 'smooth'
            });
        }
    } else if (direction === 'prev') {
        const prevSectionIndex = sectionHeights.slice().reverse().findIndex(height => height < currentScroll);
        if (prevSectionIndex !== -1) {
            window.scrollTo({
                top: sectionHeights[sectionHeights.length - 1 - prevSectionIndex],
                behavior: 'smooth'
            });
        }
    }
}
