import "./css/contact.css";
import "./css/home.css";
import "./css/menu.css";
import { initialLoad } from './js/init-load.js';
import { menu } from './js/menu.js';
import { contact } from './js/contact.js';


initialLoad();

let tabSwitchModules = (function () {
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener('click', initialLoad);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);
})();
