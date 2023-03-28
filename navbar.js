const navbar = document.querySelector('#mynav');
window.onscroll = () => {
    if (window.scrollY > 70) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};