(() => {
    'use strict';

    let div = document.querySelector('.js-merge-pr');
    let base = document.querySelector('.base-ref').textContent;
    let head = document.querySelector('.head-ref').textContent;

    if (base !== 'master' && head !== 'staging') {
        return false;
    }

    setInterval(() => {
        [...div.querySelectorAll('.js-details-target')].map(item => div.classList.contains('is-merging') ? item.removeAttribute('disabled') : item.setAttribute('disabled', 'disabled'));
    }, 1500);
})();
