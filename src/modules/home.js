
import staffImgImport from '../img/staff.jpg';

export function createHomePage(parentElement){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('mainContentDiv');

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('headingDiv');
    
    const heading = document.createElement('h1');
    heading.textContent = "어니스국수";
    heading.classList.add('menuHeading1');

    const heading2 = document.createElement('h1');
    heading2.textContent = "Eonni's Noodles";

    const staffImg = document.createElement('img');
    staffImg.src = staffImgImport;
    staffImg.classList.add('staffImg');

    const restaurantDesc = document.createElement('div');
    restaurantDesc.classList.add('restaurantDesc');
    const descHeading = document.createElement('p');
    descHeading.textContent = `Welcome to 어니스국수!`;
    descHeading.classList.add('homeInfo');
    const paragraph1 = document.createElement('p');
    paragraph1.textContent =
    `Experience the warmth of traditional Korean flavors with a modern twist at Eonni's, the bustling noodle restaurant that's more than meets the eye.`;
    paragraph1.classList.add('homeInfo');
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 
    `Nestled in the heart of the city, Eonni's offers a cozy and inviting atmosphere where friends and families gather to enjoy delicious dishes that delight the senses.
    From our signature handmade noodles to savory broths simmered to perfection, each dish is crafted with care using the finest ingredients.`;
    paragraph2.classList.add('homeInfo');
    const paragraph3 = document.createElement('p');
    paragraph3.textContent = 
    `But Eonni's is more than just a restaurant, it's a haven for those with a taste for adventure. Discover the secret world within our walls, where a team of extraordinary individuals known as the Counters serve and protect.
    Amidst the savory aromas of our kitchen, they stand as guardians against the dark forces that threaten our world.`;
    paragraph3.classList.add('homeInfo');
    const paragraph4 = document.createElement('p');
    paragraph4.textContent =
    `Join us at Eonni's and embark on a culinary journey like no other. Savor the flavors, embrace the mystery, and become part of the legend.`
    paragraph4.classList.add('homeInfo');
    const dividerLine = document.createElement('hr');
    dividerLine.classList.add('dividerLine');
    const paragraph5 = document.createElement('p');
    paragraph5.textContent = 
    `We look forward to welcoming you to Eonni's, where every meal is an adventure!`;
    paragraph5.classList.add('homeInfo');
    paragraph5.classList.add('homeInfoLastPara');

    headingDiv.appendChild(heading);
    headingDiv.appendChild(heading2);
    homeDiv.appendChild(headingDiv);
    homeDiv.appendChild(staffImg);
    homeDiv.appendChild(restaurantDesc);
    restaurantDesc.appendChild(descHeading);
    restaurantDesc.appendChild(paragraph1);
    restaurantDesc.appendChild(paragraph2);
    restaurantDesc.appendChild(paragraph3);
    restaurantDesc.appendChild(paragraph4);
    restaurantDesc.appendChild(dividerLine);
    restaurantDesc.appendChild(paragraph5);

    parentElement.appendChild(homeDiv);
}