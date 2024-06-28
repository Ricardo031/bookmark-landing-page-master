const navButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.nav__container');
const tabButtons = document.querySelectorAll('.features__tab');


const clickQuestions = document.querySelectorAll('.article__question');

navButton.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav__logo');

    navMenu.classList.toggle('nav__container--active');

    if(navMenu.classList.contains('nav__container--active')){

        navLogo.setAttribute('src', './images/logo-bookmark-white.svg');
        navButton.setAttribute('src', '././images/icon-close.svg');

    }else{

        navLogo.setAttribute('src', './images/logo-bookmark.svg');
        navButton.setAttribute('src', '././images/icon-hamburger.svg');

    }

});

const removeActiveElements = (selector)=> {
    const elementsActive = document.querySelectorAll(`.${selector}`);

    if(elementsActive.length) {

        elementsActive.forEach(elementsActive => {
            elementsActive.classList.remove(selector)
        });
    }
} //esto hara que escogemos todo los selectores y luego detectamos si hay mas de 1, si hay mas de uno hara que el anterior selector igual se ele elimine la clase

tabButtons.forEach(tabButtons => {
    tabButtons.addEventListener('click', (e)=> {
        e.preventDefault();

        if(!tabButtons.classList.contains('features__tab--active')) {


            const articleNumber = tabButtons.getAttribute('data-article');

            const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`)
            //hallaremos al article y con el nth... se hallara su numero de data-article
            
            removeActiveElements('features__article--active')
            removeActiveElements('features__tab--active')
            //aqui se hara que el selector se elimine ya que es anterior y pasamos al siguien al momento de agregar la clases en la sig linea

            articleShow.classList.add('features__article--active')
            tabButtons.classList.add('features__tab--active')

        }
    })
});

clickQuestions.forEach(clickQuestions => {
    clickQuestions.addEventListener('click', ()=> {
        const arrow = clickQuestions.children[0];
        arrow.classList.toggle('article__arrow--rotate')

        const anserContainer = clickQuestions.nextElementSibling;

        anserContainer.classList.toggle('article__content--show')
        

        console.log(clickQuestions.nextElementSibling);
    })
})

window.addEventListener('resize', ()=> {
    const isMenuActive =document.querySelector('.nav__container--active');

    if(isMenuActive) {
        const navLogo = document.querySelector('.nav__logo');

        navMenu.classList.remove('nav__container--active')

        navLogo.setAttribute('src', './images/logo-bookmark.svg');
        navButton.setAttribute('src', '././images/icon-hamburger.svg');
    } 
    //aqui se hace para ajustar el menu hambur y quitalo cuando se aumenta o se reduce la pantalla
})