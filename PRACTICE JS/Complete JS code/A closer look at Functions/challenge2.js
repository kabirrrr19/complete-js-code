'use strict';

(() => {

    const header = document.querySelector('h1');
    header.style.color = 'yellow';

    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue';
    });

})();
