
const topMenu = document.getElementById('ct-top-menu-item');
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click',(e) => {
    if(toggleTopMenuIcon.contains(e.target)){
        // click vào menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-topmenu-expanded')

    }else{
        // click outside
        if(topMenu.classList.contains('ct-topmenu-expanded')){
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})