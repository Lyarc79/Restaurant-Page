
import './styles.css';

import {createHomePage} from './modules/home.js';
import {createMenuPage} from './modules/menu.js';
import {createContactPage} from './modules/contact.js';

const navBtns = document.querySelectorAll('.nav-btn');
for(let i = 0; i < navBtns.length; i++){
    navBtns[i].dataset.id = i;
    navBtns[i].addEventListener('click', changeTabFocus);
}

function clearContent(){
    content.innerHTML = '';
}

function showHomePage(){
    clearContent();
    createHomePage(content);
}

function showMenuPage(){
    clearContent();
    createMenuPage(content);
}

function showContactPage(){
    clearContent();
    createContactPage(content);
}

function changeTabFocus(e){
    let activeTab = document.querySelector('.active');
    activeTab.classList.toggle('active');
    e.target.classList.add('active');
}
navBtns[0].classList.add('active');

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    showHomePage();
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', showHomePage);
    menuBtn.addEventListener('click', showMenuPage);
    contactBtn.addEventListener('click', showContactPage);
})