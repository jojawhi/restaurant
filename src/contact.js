

const generateContactPageDiv = () => {

    const contactPageDiv = document.createElement('div');
    contactPageDiv.classList.add('contact-page-div');

    contactPageDiv.appendChild(generateContactHeading('Open for Dine-in and Take-out!'));

    contactPageDiv.appendChild(generatePhone('Call us at</br><span class="bold">250-777-8888</span>'));

    contactPageDiv.appendChild(generateAddress('Or find us at</br><span class="bold">477 Wallace St A, Nanaimo, BC</span>'));

    contactPageDiv.appendChild(generateMap());

    return contactPageDiv;

}

const generateContactHeading = (string) => {

    const contactPageHeading = document.createElement('h2');
    contactPageHeading.classList.add('contact-page-heading');
    
    contactPageHeading.textContent = string;

    return contactPageHeading;

}

const generatePhone = (string) => {

    const contactPhone = document.createElement('h3');
    contactPhone.classList.add('contact-page-subheading');
    contactPhone.innerHTML = string;

    return contactPhone;

}

const generateAddress = (string) => {

    const contactAddress = document.createElement('h3');
    contactAddress.classList.add('contact-page-subheading');
    contactAddress.innerHTML = string;

    return contactAddress;

}

const generateMap = () => {

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map-div');

    return mapDiv;

}


const loadContact = () => {

    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.textContent = "";
    contentWrapper.appendChild(generateContactPageDiv());

}

export default loadContact;

/*

On refactor:

- add google map link or embedded google map

*/