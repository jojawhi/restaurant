/*
class Menu {
    constructor(menuItems) {
        //placeholder parameters and key:value until structure is more fleshed out
        this.menuItems = menuItems
    }
}
*/

const generateMenu = () => {

    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(generateOriginalChickenMenu());
    menu.appendChild(generateCrispyChickenMenu());
    menu.appendChild(generateYangChickenMenu());
    menu.appendChild(generateSpecialsMenu());
    menu.appendChild(generateSidesMenu());
    menu.appendChild(generateSaladMenu());
    menu.appendChild(generateDessertMenu());
    

    return menu;

};


const generateOriginalChickenMenu = () => {

    const originalChickenMenu = [
        {
            category: 'Original Chicken',
            option: 'Whole',
            name: 'Half',
            price: '13'
        },
        {
            category: 'Original Chicken',
            option: 'Whole',
            name: 'Full',
            price: '25.5'
        },
        {
            category: 'Original Chicken',
            option: 'Thigh',
            name: '4pcs',
            price: '13'
        },
        {
            category: 'Original Chicken',
            option: 'Thigh',
            name: '8pcs',
            price: '25.5'
        }
    ];

    const originalChickenMenuDiv = document.createElement('div');
    originalChickenMenuDiv.classList.add('chicken-menu-section');

    originalChickenMenuDiv.appendChild(generateMenuHeading('ORIGINAL CHICKEN'));

    const categoryDescription = document.createElement('p');
    categoryDescription.classList.add('category-description-text', 'menu-description-text');
    categoryDescription.innerHTML = 'Gluten Friendly</br>Housemade rice flour batter fried chicken';
    originalChickenMenuDiv.appendChild(categoryDescription);

    originalChickenMenuDiv.appendChild(generateMenuSubheading('WHOLE'));

    const optionDescription = document.createElement('p');
    optionDescription.classList.add('menu-description-text');
    optionDescription.textContent = 'Breast, wing, leg, thigh, comes with individual pieces';
    originalChickenMenuDiv.appendChild(optionDescription);

    const wholeWrapper = document.createElement('div');
    wholeWrapper.classList.add('menu-list-wrapper');
    originalChickenMenuDiv.appendChild(wholeWrapper);

    originalChickenMenuDiv.appendChild(generateMenuSubheading('THIGH'));

    const thighWrapper = document.createElement('div');
    thighWrapper.classList.add('menu-list-wrapper');
    originalChickenMenuDiv.appendChild(thighWrapper);

    for (let i = 0; i < originalChickenMenu.length; i++) {

        let item = originalChickenMenu[i].name;
        let price = originalChickenMenu[i].price;

        let itemElement = document.createElement('div');
        itemElement.classList.add('menu-list-item');
        itemElement.textContent = item;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        if (originalChickenMenu[i].option === 'Whole') {
            wholeWrapper.appendChild(itemElement);
            wholeWrapper.appendChild(priceElement);
        } else if (originalChickenMenu[i].option === 'Thigh') {
            thighWrapper.appendChild(itemElement);
            thighWrapper.appendChild(priceElement);
        }

    }

    return originalChickenMenuDiv;

}



const generateCrispyChickenMenu = () => {

    const crispyChickenMenu = [
        {
            category: 'Crispy Chicken',
            option: 'Whole',
            name: 'Half',
            price: '13.5'
        },
        {
            category: 'Crispy Chicken',
            option: 'Whole',
            name: 'Full',
            price: '26.5'
        },
        {
            category: 'Crispy Chicken',
            option: 'Thigh',
            name: '4pcs',
            price: '13.5'
        },
        {
            category: 'Crispy Chicken',
            option: 'Thigh',
            name: '8pcs',
            price: '26.5'
        }
    ];

    const crispyChickenMenuDiv = document.createElement('div');
    crispyChickenMenuDiv.classList.add('chicken-menu-section');

    crispyChickenMenuDiv.appendChild(generateMenuHeading('CRISPY CHICKEN'));

    const categoryDescription = document.createElement('p');
    categoryDescription.classList.add('category-description-text', 'menu-description-text');
    categoryDescription.innerHTML = 'Over 16 herbs and spices in our house-made batter fried chicken';
    crispyChickenMenuDiv.appendChild(categoryDescription);

    crispyChickenMenuDiv.appendChild(generateMenuSubheading('WHOLE'));

    const optionDescription = document.createElement('p');
    optionDescription.classList.add('menu-description-text');
    optionDescription.textContent = 'Breast, wing, leg, thigh, comes with individual pieces';
    crispyChickenMenuDiv.appendChild(optionDescription);

    const wholeWrapper = document.createElement('div');
    wholeWrapper.classList.add('menu-list-wrapper');
    crispyChickenMenuDiv.appendChild(wholeWrapper);

    crispyChickenMenuDiv.appendChild(generateMenuSubheading('THIGH'));

    const thighWrapper = document.createElement('div');
    thighWrapper.classList.add('menu-list-wrapper');
    crispyChickenMenuDiv.appendChild(thighWrapper);

    for (let i = 0; i < crispyChickenMenu.length; i++) {

        let item = crispyChickenMenu[i].name;
        let price = crispyChickenMenu[i].price;

        let itemElement = document.createElement('div');
        itemElement.classList.add('menu-list-item');
        itemElement.textContent = item;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        if (crispyChickenMenu[i].option === 'Whole') {
            wholeWrapper.appendChild(itemElement);
            wholeWrapper.appendChild(priceElement);
        } else if (crispyChickenMenu[i].option === 'Thigh') {
            thighWrapper.appendChild(itemElement);
            thighWrapper.appendChild(priceElement);
        }

    }

    return crispyChickenMenuDiv;

};

const generateYangChickenMenu = () => {

    const yangChickenMenu = [
        {
            category: 'Yangnyeom Chicken',
            option: 'Whole',
            name: 'Half',
            price: '14'
        },
        {
            category: 'Yangnyeom Chicken',
            option: 'Whole',
            name: 'Full',
            price: '27.5'
        },
        {
            category: 'Yangnyeom Chicken',
            option: 'Thigh',
            name: '4pcs',
            price: '14'
        },
        {
            category: 'Yangnyeom Chicken',
            option: 'Thigh',
            name: '8pcs',
            price: '27.5'
        }
    ];

    const yangChickenMenuDiv = document.createElement('div');
    yangChickenMenuDiv.classList.add('chicken-menu-section');

    yangChickenMenuDiv.appendChild(generateMenuHeading('YANGNYEOM CHICKEN'));

    const categoryDescription = document.createElement('p');
    categoryDescription.classList.add('category-description-text', 'menu-description-text');
    categoryDescription.innerHTML = 'Our Crispy Chicken coated in sweet & spicy sauce';
    yangChickenMenuDiv.appendChild(categoryDescription);

    yangChickenMenuDiv.appendChild(generateMenuSubheading('WHOLE'));

    const optionDescription = document.createElement('p');
    optionDescription.classList.add('menu-description-text');
    optionDescription.textContent = 'Breast, wing, leg, thigh, comes with individual pieces';
    yangChickenMenuDiv.appendChild(optionDescription);

    const wholeWrapper = document.createElement('div');
    wholeWrapper.classList.add('menu-list-wrapper');
    yangChickenMenuDiv.appendChild(wholeWrapper);

    yangChickenMenuDiv.appendChild(generateMenuSubheading('THIGH'));

    const thighWrapper = document.createElement('div');
    thighWrapper.classList.add('menu-list-wrapper');
    yangChickenMenuDiv.appendChild(thighWrapper);

    for (let i = 0; i < yangChickenMenu.length; i++) {

        let item = yangChickenMenu[i].name;
        let price = yangChickenMenu[i].price;

        let itemElement = document.createElement('div');
        itemElement.classList.add('menu-list-item');
        itemElement.textContent = item;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        if (yangChickenMenu[i].option === 'Whole') {
            wholeWrapper.appendChild(itemElement);
            wholeWrapper.appendChild(priceElement);
        } else if (yangChickenMenu[i].option === 'Thigh') {
            thighWrapper.appendChild(itemElement);
            thighWrapper.appendChild(priceElement);
        }

    }

    return yangChickenMenuDiv;

};

const generateSpecialsMenu = () => {

    const specialsMenu = [
        {
            category: 'Special',
            name: 'Ganjang Chicken',
            description: 'Boneless fried chicken glazed with sweet soy sauce',
            price: '14'
        },
        {
            category: 'Special',
            name: 'Gangsta Sandwich',
            description: 'Italian bun, spicy chicken, bacon, cheese, cabbage, pickles',
            price: '9.75'
        },
        {
            category: 'Special',
            name: 'Veggie Chicken',
            description: 'Soy protein isolate, wheat gluten, spicy sauce mix (NO MEAT)',
            price: '12.50'
        }
    ];

    const specialsMenuDiv = document.createElement('div');
    specialsMenuDiv.classList.add('menu-section');

    specialsMenuDiv.appendChild(generateMenuHeading('HOUSE SPECIALS'));

    for (let i = 0; i < specialsMenu.length; i++) {

        let item = specialsMenu[i].name;
        let description = specialsMenu[i].description;
        let price = specialsMenu[i].price;

        let itemElement = document.createElement('h3');
        itemElement.classList.add('chicken-menu-option');
        itemElement.textContent = item;

        let descriptionElement = document.createElement('p');
        descriptionElement.classList.add('menu-description-text');
        descriptionElement.textContent = description;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        specialsMenuDiv.appendChild(itemElement);
        specialsMenuDiv.appendChild(descriptionElement);
        specialsMenuDiv.appendChild(priceElement);

    }

    return specialsMenuDiv;

};


const generateSidesMenu = () => {

    const sidesMenu = [
        {
            category: 'Sides',
            name: 'Wedged Potatoes',
            price: '6'
        },
        {
            category: 'Sides',
            name: 'Yam Fries',
            price: '6'
        },
        {
            category: 'Sides',
            name: 'Cauliflower Fries',
            price: '6.5'
        },
        {
            category: 'Sides',
            name: 'Onion Rings',
            price: '6.5'
        },
        {
            category: 'Sides',
            name: 'Mozzarella Sticks',
            price: '7'
        },
        {
            category: 'Sides',
            name: 'Truffle Fries',
            price: '7.5'
        }
    ];

    const sidesMenuDiv = document.createElement('div');
    sidesMenuDiv.classList.add('menu-section');

    const sidesMenuWrapper = document.createElement('div');
    sidesMenuWrapper.classList.add('menu-list-wrapper');

    sidesMenuDiv.appendChild(generateMenuHeading('SIDES'));
    sidesMenuDiv.appendChild(sidesMenuWrapper);

    for (let i = 0; i < sidesMenu.length; i++) {

        let item = sidesMenu[i].name;
        let price = sidesMenu[i].price;

        let itemElement = document.createElement('div');
        itemElement.classList.add('menu-list-item');
        itemElement.textContent = item;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        sidesMenuWrapper.appendChild(itemElement);
        sidesMenuWrapper.appendChild(priceElement);

    }

    return sidesMenuDiv;

};

const generateSaladMenu = () => {

    const saladMenu = [
        {
            category: 'Salad',
            name: 'Green Salad',
            description: 'Spinach, spring mix, carrot, paprika',
            price: '7.50'
        },
        {
            category: 'Salad',
            name: 'Super Food Salad',
            description: 'Spinach, spring mix, carrot, paprika, tomato, mixed seeds, pecan, egg, avocado, dried berries, grana padano cheese',
            price: '10.50'
        },
    ];

    const saladMenuDiv = document.createElement('div');
    saladMenuDiv.classList.add('menu-section');

    saladMenuDiv.appendChild(generateMenuHeading('SALADS'));

    for (let i = 0; i < saladMenu.length; i++) {

        let item = saladMenu[i].name;
        let description = saladMenu[i].description;
        let price = saladMenu[i].price;

        let itemElement = document.createElement('h3');
        itemElement.classList.add('chicken-menu-option');
        itemElement.textContent = item;

        let descriptionElement = document.createElement('p');
        descriptionElement.classList.add('menu-description-text');
        descriptionElement.textContent = description;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        saladMenuDiv.appendChild(itemElement);
        saladMenuDiv.appendChild(descriptionElement);
        saladMenuDiv.appendChild(priceElement);

    }

    return saladMenuDiv;

}


const generateDessertMenu = () => {

    const dessertMenu = [
        {
            category: 'Dessert',
            name: 'Tiramisu Pie',
            price: '7'
        },
        {
            category: 'Dessert',
            name: 'Raspberry Cheesecake',
            price: '7'
        }
    ];

    const dessertMenuDiv = document.createElement('div');
    dessertMenuDiv.classList.add('menu-section');

    const dessertMenuWrapper = document.createElement('div');
    dessertMenuWrapper.classList.add('menu-list-wrapper');

    dessertMenuDiv.appendChild(generateMenuHeading('DESSERTS'));
    dessertMenuDiv.appendChild(dessertMenuWrapper);

    for (let i = 0; i < dessertMenu.length; i++) {

        let item = dessertMenu[i].name;
        let price = dessertMenu[i].price;

        let itemElement = document.createElement('div');
        itemElement.classList.add('menu-list-item');
        itemElement.textContent = item;

        let priceElement = document.createElement('div');
        priceElement.classList.add('menu-list-price');
        priceElement.textContent = price;

        dessertMenuWrapper.appendChild(itemElement);
        dessertMenuWrapper.appendChild(priceElement);

    }

    return dessertMenuDiv;

}

const generateMenuHeading = (string) => {

    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('chicken-menu-heading');
    menuHeading.textContent = string;

    return menuHeading;

}

const generateMenuSubheading = (string) => {

    const menuSubheading = document.createElement('h3');
    menuSubheading.classList.add('chicken-menu-option');
    menuSubheading.textContent = string;

    return menuSubheading;

}








const drinksMenu = [
    {
        category: 'Drinks',
        name: 'Pop',
        price: '2'
    },
    {
        category: 'Drinks',
        name: 'Juice',
        price: '3'
    },
    {
        category: 'Drinks',
        name: 'Sparkling Water',
        price: '3.50'
    }
];

const beerSojuMenu = [
    {
        category: 'Beer & Soju',
        name: 'Makgeolli 750mL',
        description: 'Korean rice wine',
        price: '12.95'
    },
    {
        category: 'Beer & Soju',
        name: 'Korean Beer',
        description: 'Cass, Kloud',
        price: '5.95'
    },
    {
        category: 'Beer & Soju',
        name: 'Kloud',
        description: 'Korean beer',
        price: '5.95'
    },
    {
        category: 'Beer & Soju',
        name: 'Soju 360mL',
        description: 'Korean vodka',
        price: '5.95'
    },
    {
        category: 'Beer & Soju',
        name: 'Domestic Beer',
        description: 'Molson Canadian, Kokanee, Coors Light',
        price: '5.5'
    }
];




const loadMenu = () => {

    //connect to main content wrapper and create and append the menu to it
    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.textContent = '';
    contentWrapper.appendChild(generateMenu());

}

export default loadMenu;