const openBtn = document.querySelector('.burgerIcon');
const closeBtn = document.querySelector('.cross');
const menu = document.querySelector('.menuBurger');

openBtn.addEventListener("click", function(){
    menu.classList.add('show');
})
closeBtn.addEventListener("click", function(){
    menu.classList.remove('show');
})


