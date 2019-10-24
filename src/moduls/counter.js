import { basketWraperDoc } from './commonModules.js';

export function count() {
    const cardAllDoc = basketWraperDoc.querySelectorAll('.card');
    const counter = document.querySelector('.counter');
    counter.textContent = cardAllDoc.length;

    const basketPrice = document.querySelector('.basket_price span');
    const price = basketWraperDoc.querySelectorAll('.card-price');
    const wraperText = document.querySelector('.wraper_text');

    let sum = 0;

    price.forEach((price) => {
        const res = parseFloat(price.textContent);
        sum += res;
    });
    basketPrice.textContent = sum;

    if (cardAllDoc.length !== 0) {
        wraperText.style.display = 'none';
    } else {
        wraperText.style.display = '';
    };
};