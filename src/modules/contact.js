
import locationImageImport from  '../img/location.png';

export function createContactPage(parentElement){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('mainContentDiv');

    const infoWrapperDiv = document.createElement('div');
    infoWrapperDiv.classList.add('contactWrapper');

    const locationImg = document.createElement('img');
    locationImg.src = locationImageImport;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('infoDiv');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    heading.classList.add('contactHeading');

    const addressContainer = document.createElement('div');
    addressContainer.classList.add("infoContainer");
    const address = document.createElement('h4');
    address.textContent = 'Address:';
    const addressText = document.createElement('p');
    addressText.textContent = '경기 수원시 팔달구 신풍로63번길 3-1';

    const phoneContainer = document.createElement('div');
    phoneContainer.classList.add('infoContainer');
    const phone = document.createElement('h4');
    phone.textContent = 'Phone:';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+34 123 456 789';

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('infoContainer');
    const email = document.createElement('h4');
    email.textContent = 'Mail:';
    const emailText = document.createElement('p');
    emailText.textContent = 'info@eonnisnoodles.com';

    contactDiv.appendChild(infoWrapperDiv);
    infoWrapperDiv.appendChild(locationImg);
    infoWrapperDiv.appendChild(infoDiv);
    infoDiv.appendChild(heading);

    infoDiv.appendChild(addressContainer);
    addressContainer.appendChild(address);
    addressContainer.appendChild(addressText);

    infoDiv.appendChild(phoneContainer);
    phoneContainer.appendChild(phone);
    phoneContainer.appendChild(phoneNumber);

    infoDiv.appendChild(emailContainer);
    emailContainer.appendChild(email);
    emailContainer.appendChild(emailText);

    parentElement.appendChild(contactDiv);
}