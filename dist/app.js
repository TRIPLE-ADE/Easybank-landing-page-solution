const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')
const nav = document.querySelector('nav')
const mockupImgae = document.querySelector('#mockup')

hamburger.addEventListener('click', function(){
    hamburger.classList.add('hidden')
    closeMenu.classList.remove('hidden')
    nav.classList.remove('hide-nav')
    mockupImgae.classList.add('hide-nav')

})

closeMenu.addEventListener('click', function(){
    hamburger.classList.remove('hidden')
    closeMenu.classList.add('hidden')
    nav.classList.add('hide-nav')
    mockupImgae.classList.remove('hide-nav')
})