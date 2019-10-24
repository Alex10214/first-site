import {value} from './value.js';

export function renderCatalog() {
    const cardAllDoc = document.querySelectorAll('.right_side .card');
    const categories = new Set();
    const catalogList = document.querySelector('.catalog_list');
    const CatalogBTN = document.querySelector('.box_catalog');
    
    cardAllDoc.forEach((elem) => {
        categories.add(elem.dataset.category);
    });
    categories.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        catalogList.appendChild(li);
    });

    CatalogBTN.addEventListener('click', (event) => {

        if (event.target.tagName === 'LI') {

            const allLi = catalogList.querySelectorAll('li');

            allLi.forEach((elem)=>{
                if(elem === event.target){
                    elem.classList.add('active');
                }else{
                    elem.classList.remove('active');
                }
            });
            value();
        };
    });
};