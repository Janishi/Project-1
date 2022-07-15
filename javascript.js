let navigationActiveLinks=document.getElementById('navigation-js');
let burgerActive=document.getElementById('burger-js');

burgerActive=addEventListener('click', function() {
    navigationActiveLinks.classList.add('nav-acitve');

})