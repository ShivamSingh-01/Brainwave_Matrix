document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    close.addEventListener('click', function() {
        navbar.classList.remove('active');
    });
});
