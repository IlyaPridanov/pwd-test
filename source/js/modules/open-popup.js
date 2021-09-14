// 'use strict'

(function () {
    const popup = document.querySelectorAll('.js-popup');
    const button = document.querySelectorAll('.js-popup-btn');
    const close = document.querySelectorAll('.js-popup-close');
    const body = document.querySelector('body');

    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    const getClose = function() {
        popup.forEach((popupItem) => {
            popupItem.classList.add('hidden');
        })
        body.style.overflow = null;
        body.style.paddingRight = "0";
    }

    if (button) {
        button.forEach((btn) => {
            btn.addEventListener('click' , (evt) => {
                evt.preventDefault();
                popup.forEach((popupItem) => {
                    if (btn.dataset.block === popupItem.dataset.block) {
                        popupItem.classList.remove('hidden');
                        body.style.overflow = "hidden";
                        body.style.paddingRight = `${scrollWidth}px`;
                    }
                })
            })
        })
    }

    close.forEach((btn) => {
        btn.addEventListener('click' , () => {
            getClose();
        })
    })

})();
