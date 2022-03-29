
const toggleMenu = () => {
    let nav = document.getElementById('nav-bar'); // menu container 
    let navButton = document.getElementById('menu-button'); // open close menu button 
    nav.style.height = nav.style.height == "auto" ? "0" : "auto";
    navButton.src = navButton.src.toString().endsWith("assets/menu.png") ? "assets/cross.png" : "assets/menu.png";
}
