const btnMenu = document.querySelector('.menu')
const btnClose = document.querySelector('.close')
const circle = document.querySelector('.menu-circle')
const articleSection = document.querySelector('.article-main')

btnMenu.addEventListener('click', showMenu)
function showMenu(){
    circle.style.transform=' rotate(-90deg)'
    articleSection.style.transform=' rotateZ(-30deg)'
    articleSection.style.marginTop = '-25rem'
    articleSection.style.marginLeft = '15rem'
}
btnClose.addEventListener('click', hideMenu)
function hideMenu(){
    circle.style.transform=' rotate(0deg)'
    articleSection.style.transform=' rotateZ(0deg)'
    articleSection.style.marginTop = '0rem'
    articleSection.style.marginLeft = '0rem'

}