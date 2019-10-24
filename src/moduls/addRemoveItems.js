import { count } from './counter.js';
import { basketWraperDoc } from './commonModules.js';

export function addRemoveItems() {
    
    const cardAllDoc = document.querySelectorAll('.right_side .card');

    cardAllDoc.forEach((elem) => {
        const btn = elem.querySelector('.btn');

        btn.addEventListener('click', () => {
            const cardClone = elem.cloneNode(true);
            cardClone.style.width = "25%";
            basketWraperDoc.appendChild(cardClone);
            count();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                count();
            });
        });
    });
};
