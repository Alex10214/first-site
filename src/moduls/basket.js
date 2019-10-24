export function basket() {

    const btnBasket = document.querySelector('.basket');
    const basketCont = document.querySelector('.basket_container');
    const btnClose = document.querySelector('.btn_close');
    const container = document.querySelector('.basket_container');

    btnBasket.addEventListener('click', () => {
        basketCont.style.display = 'block';
        document.body.style.overflow = 'hidden';
        container.style.display = 'flex';
    });
    btnClose.addEventListener('click', () => {
        basketCont.style.display = '';
        document.body.style.overflow = '';
    });
};
