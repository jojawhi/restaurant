import './style.css';
import loadHome from './home.js';
import loadMenu from './menu';
import loadContact from './contact';

const wrapper = document.querySelector('#wrapper');
wrapper.classList.add('background-image');

const generateHeader = () => {

    const header = document.createElement('div');
    header.classList.add('header');

    header.appendChild(generateTextLogo('NANADA CHICKEN'));
    header.appendChild(generateNav(generateNavLinks()));

    wrapper.appendChild(header);

};

const generateTextLogo = (string) => {

    const logo = document.createElement('div');
    logo.classList.add('logo-wrapper');

    logo.textContent = string;

    return logo;

};

const generateNav = (navLinkArray) => {

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navHome = document.createElement('div');
    navHome.classList.add('nav-link-wrapper');
    navHome.setAttribute('id', 'nav-home');
    navHome.appendChild(navLinkArray[0]);


    const navMenu = document.createElement('div');
    navMenu.classList.add('nav-link-wrapper');
    navMenu.setAttribute('id', 'nav-menu');
    navMenu.appendChild(navLinkArray[1]);

    const navContact = document.createElement('div');
    navContact.classList.add('nav-link-wrapper');
    navContact.setAttribute('id', 'nav-contact');
    navContact.appendChild(navLinkArray[2]);

    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);

    return nav;

};

const generateNavLinks = () => {

    const navHomeLink = document.createElement('button');
    navHomeLink.classList.add('nav-link');
    navHomeLink.classList.add('active');
    navHomeLink.textContent = 'HOME';
    navHomeLink.addEventListener('click', () => {
        loadHome();
        navHomeLink.classList.add('active');
        navMenuLink.classList.remove('active');
        navContactLink.classList.remove('active');
    })

    const navMenuLink = document.createElement('button');
    navMenuLink.classList.add('nav-link');
    navMenuLink.textContent = 'MENU';
    navMenuLink.addEventListener('click', () => {
        loadMenu();
        navMenuLink.classList.add('active');
        navHomeLink.classList.remove('active');
        navContactLink.classList.remove('active');
    })

    const navContactLink = document.createElement('button');
    navContactLink.classList.add('nav-link');
    navContactLink.textContent = "CONTACT";
    navContactLink.addEventListener('click', () => {
        loadContact();
        navContactLink.classList.add('active');
        navHomeLink.classList.remove('active');
        navMenuLink.classList.remove('active');
    })

    let navLinkArray = [navHomeLink, navMenuLink, navContactLink]

    return navLinkArray;

};

const generateContentWrapper = () => {

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapper.setAttribute('id', 'content-wrapper');

    wrapper.appendChild(contentWrapper);

};

const generateFooter = () => {

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerContentWrapper = document.createElement('div');
    footerContentWrapper.classList.add('footer-content-wrapper');

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Designed by jojawhi for The Odin Project';

    wrapper.appendChild(footer);
    footer.appendChild(footerContentWrapper);
    footerContentWrapper.appendChild(footerText);

};


/*
const logo = () => {
    
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');

    wrapper.appendChild(myLogo);


}

logo();
*/

generateHeader();
generateContentWrapper();
generateFooter();

loadHome();


console.log('Hell low whirled!');

/*

- generate header/footer here
- add JS for nav button active indicator

*/