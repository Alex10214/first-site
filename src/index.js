import {basket} from './moduls/basket.js';
import {filterBtn} from "./moduls/filterBtn.js";
import {addRemoveItems} from './moduls/addRemoveItems.js';
import {getData} from './moduls/getData.js';
import {renderData} from './moduls/renderData.js';
import {renderCatalog} from './moduls/renderCatalog.js';


(async function(){
    const db = await getData();
    renderData(db);
    renderCatalog();
    basket();
    filterBtn();
    addRemoveItems();
}());