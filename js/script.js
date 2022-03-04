var scrollTop = document.getElementById("scroll-top");
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.classList.remove('noactive')
        scrollTop.classList.add('active')
    } else {
        scrollTop.classList.add('noactive')
    }
}

function loader() {
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();