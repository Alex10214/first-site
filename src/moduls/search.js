export function search() {
    const searchInput = document.querySelector('.search_input');
    const cardAllDoc = document.querySelectorAll('.right_side .card');
    const searchText = new RegExp(searchInput.value.trim(), 'i');

    cardAllDoc.forEach((elem) => {
        const title = elem.querySelector('.card-title');
        if (!searchText.test(title.textContent)) {
            elem.style.display = 'none';
        } else {
            elem.style.display = '';
        }
    });
};