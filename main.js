(() => {
    'use strict';

    let div = document.querySelector('.js-merge-pr');
    let base = document.querySelector('.base-ref').textContent;
    let head = document.querySelector('.head-ref').textContent;

    const requiredMergeTypeClass = base==='master' && head==='staging' ?'is-merging' : 'is-squashing' ;

    setInterval(() => {
        [...div.querySelectorAll('.js-details-target')]
            .map(item =>
                 div.classList.contains(requiredMergeTypeClass) ? item.removeAttribute('disabled') : item.setAttribute('disabled', 'disabled')
                );
    }, 1500);
})();
