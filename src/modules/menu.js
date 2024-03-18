
import janchiGuksuImage from '../img/foodItems/janchi_guksu.jpg';
import japchaeImage from  '../img/foodItems/japchae02-min.jpg';
import kimchiImage from  '../img/foodItems/kimchi.jpg';
import bulgogiImage from  '../img/foodItems/bulgogi-min.jpg';
import tteokImage from  '../img/foodItems/tteokbokki-min.jpg';
import bibimbapImage from  '../img/foodItems/bibimbap-min.jpg';

const menuItems = [
    {name: "Janchi Guksu", image: janchiGuksuImage, price: 6.45},
    {name: "Japchae", image: japchaeImage, price: 8.65},
    {name: "Kimchi", image: kimchiImage, price: 4.42},
    {name: "Bulgogi", image: bulgogiImage, price: 7.99},
    {name: "Tteokbokki", image: tteokImage, price: 6.79},
    {name: "Bibimbap", image: bibimbapImage, price: 7.34},
]

export function createMenuPage(parentElement){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('mainContentDiv');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
    menuDiv.appendChild(heading);

    const menuFoodContainer = document.createElement('div');
    menuFoodContainer.classList.add('menuFoodContainer');
    menuDiv.appendChild(menuFoodContainer);

    parentElement.appendChild(menuDiv);

    menuItems.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.classList.add('food-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `${item.price}$`;

        const itemImg = document.createElement('img');
        itemImg.src = item.image;
        itemImg.alt = item.name;

        foodItemDiv.appendChild(itemName);
        foodItemDiv.appendChild(itemPrice);
        foodItemDiv.appendChild(itemImg);

        menuFoodContainer.appendChild(foodItemDiv);

    })

   
}