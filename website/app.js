const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = 'navLinkFade 1s ease forwards ${index / 7+ 0.3}s';
            } else{
            link.style.animation = 'navLinkFade 1s ease forwards ${index / 5+ 0.3}s';
        }});
    }); 
}


   

navSlide();

