/*document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.abstract-wrapper');
    if (!wrapper) return;

    // start paused
    wrapper.classList.add('paused');

    // on first enter: remove paused class and force immediate start
    const onEnter = () => {
        wrapper.classList.remove('paused');
        document.querySelectorAll('.blob').forEach(b => b.style.animationDelay = '0s');
        wrapper.removeEventListener('mouseenter', onEnter);
    };
    wrapper.addEventListener('mouseenter', onEnter);

    // on leave: clear inline delays so animations continue naturally
    wrapper.addEventListener('mouseleave', () => {
        document.querySelectorAll('.blob').forEach(b => b.style.animationDelay = '');
    });
});*/
