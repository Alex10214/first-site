import { minInput, maxInput } from './commonModules.js';

export function value() {
    const cardAllDoc = document.querySelectorAll('.right_side .card');
    const activeLi = document.querySelector('.catalog_list li.active');
    
    let min = minInput.value ? minInput.value : 0;
    let max = maxInput.value ? maxInput.value : 999999;

    cardAllDoc.forEach((elem) => {
        const checkbox = document.querySelector('.stock .check');
        const sale = elem.querySelector('.sale');
        const price = elem.querySelector('.card-price');
        const res = parseFloat(price.textContent);

        elem.style.display = "";

        if ((res < min) || (res > max)) {
            elem.style.display = "none";
        } else if (checkbox.checked && !sale) {
            elem.style.display = "none";
        } else if (activeLi){
            if(elem.dataset.category !== activeLi.textContent){
            elem.style.display = "none";
            };  
        };
    });
};





















// import * as commonModules from "./commonModules.js";
// let visible = commonModules.visible;
// let checkbox = commonModules.checkbox;

// export default function test(minValue, maxValue) {
//     const card = document.querySelectorAll('.box');

//     let min = minValue ? minValue : 0;
//     let max = maxValue ? maxValue : 999999;

//     card.forEach((elem) => {
//         const price = elem.querySelector('.card-price');
//         const res = parseFloat(price.textContent);
//         visible (elem, checkPrice(min, max, res)) && (elem, checkSale(elem));
//     });

//     function checkSale(elem) {
//         const sale = elem.querySelector('.sale');
//          console.log('hi');
//         if (checkbox.checked && !sale) {
//             return false; // добавляется hidden
//         } else {
//             return true;
//         };
//     };

//     function checkPrice(min, max, res) {
//         if ((res < min) || (res > max)) {
//             return false;
//         } else {
//             return true;
//         };
//     };
// };


