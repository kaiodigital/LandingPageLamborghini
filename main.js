const showMenu = (toggle, nav) =>{
    const toggleMenu = document.querySelector('.nav__toggle')
    const navMenu = document.querySelector('.nav__menu')

    if(toggle && nav){
        toggleMenu.addEventListener('click', ()=>{
            navMenu.classList.toggle('show')
        })
    }
}

showMenu('nav__toggle','nav__menu')