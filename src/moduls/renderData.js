import { items } from './commonModules.js';

export function renderData(data) {

    const itemWraper = document.querySelector('.right_side');
    data.goods.forEach((element, i) => {
        const boxItem = document.createElement('div');
        boxItem.className = 'card';
        boxItem.setAttribute('data-category', element.category);
        boxItem.innerHTML = `
            ${element.sale ? '<div class="sale">Hot Sale</div>' : ''}
            <div class="card-img-wrapper">
                <span class="card-img-top "style="background-image: url(${element.img})"></span>
            </div>
            <div class="text-wraper">
                <div class="card-price">${element.price} руб</div>
                <h5 class="card-title">${element.title}</h5>
                <button class="btn">В корзину</button>
            </div>
        `;
        items[i] = boxItem;
        itemWraper.appendChild(boxItem);
    });
};
