import { search } from './search.js';
import { value } from './value.js';
import { minInput, maxInput } from './commonModules.js';

export function filterBtn() {
    const checkbox = document.querySelector('.stock .check');
    const searcBtn = document.querySelector('.btn_search');

    checkbox.addEventListener('click', value);
    searcBtn.addEventListener('click', search);
    minInput.onchange = () => value();
    maxInput.onchange = () => value();
};

