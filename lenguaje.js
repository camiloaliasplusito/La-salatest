document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        menuIcon.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });
});


