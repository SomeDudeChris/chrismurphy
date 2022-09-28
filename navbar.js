const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');

    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
    })
}

navSlide()