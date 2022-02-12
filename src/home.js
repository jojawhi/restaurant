const generateHomePageDiv = () => {

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('home-page-div');

    homePageDiv.appendChild(generateHeading("AUTHENTIC KOREAN FRIED CHICKEN IN THE HEART OF NANAIMO!"));
    homePageDiv.appendChild(generateSubheading("Come get your crunch on!"));

    return homePageDiv;

}

const generateHeading = (string) => {

    const heading = document.createElement('h2');
    heading.classList.add('home-page-heading');

    heading.textContent = string;

    return heading;

}

const generateSubheading = (string) => {

    const subheading = document.createElement('h3');
    subheading.classList.add('home-page-subheading');

    subheading.textContent = string;

    return subheading;

}

const loadHome = () => {

    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.textContent = "";
    contentWrapper.appendChild(generateHomePageDiv());
    //connect to content wrapper, clear content wrapper, create and append home to it

}

export default loadHome;