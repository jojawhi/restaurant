import './style.css';
import Logo from './nanda-logo.jpg';

const content = document.querySelector('#content');

const logo = () => {
    
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.classList.add('logo');

    content.appendChild(myLogo);


}

logo();

console.log('Hell low whirled!');