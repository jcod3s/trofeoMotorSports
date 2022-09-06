const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuIcon.addEventListener('click', menu)
closeIcon.addEventListener('click', menu)

function menu() {
    if (closeIcon.classList.contains('hidden')) {
        closeIcon.classList.toggle('hidden')
        menuIcon.classList.add('hidden')
    } else if (menuIcon.classList.contains('hidden')) {
        menuIcon.classList.toggle('hidden')
        closeIcon.classList.add('hidden')
    }
}