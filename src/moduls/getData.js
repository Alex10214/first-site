export function getData() {
    const itemWraper = document.querySelector('.right_side');

    return fetch('../../db/db.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + response.status);
            }
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.warn(err);
            itemWraper.innerHTML = '<div>Что-то пошло не так..</div>';
        });
}; 