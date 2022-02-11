import './style.css';
import loadHome from './home.js';
import loadMenu from './menu';
import loadContact from './contact';
import Logo from './images/nanda-logo.jpg';

const wrapper = document.querySelector('#wrapper');

const logo = () => {
    
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');

    wrapper.appendChild(myLogo);


}

logo();

console.log('Hell low whirled!');