const menu = document.querySelector(".menu_div");
const icn = document.querySelector("#image_menu");
const menu_links = document.querySelector(".menu_link_div");

menu_links.classList.add("hide_links");

var menu_opened = false;

icn.addEventListener('click', function (){
    if(!menu_opened){
        menu_links.classList.remove("hide_links");
        menu_links.classList.add("show_links");
        icn.src = 'Close_Icon_2.png';
        menu_opened = !menu_opened;
        
    }
    else{
        icn.src = 'Menu_Icon_2.png';
        menu_opened = !menu_opened;
        menu_links.classList.remove("show_links");
        menu_links.classList.add("hide_links");

    }
    

    menu.classList.toggle('open_menu');
});
