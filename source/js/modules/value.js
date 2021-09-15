'use strict';

(function () {
    const cardBasket = document.querySelectorAll('.card__basket');
    const plus = document.querySelectorAll('.card__btn[data-btn="plus"]');
    const minus = document.querySelectorAll('.card__btn[data-btn="minus"]');

    const getPlus = function (value) {
        value.dataset.value++;
        value.textContent = value.dataset.value + " шт";
    }

    const getMinus = function (value) {
        value.dataset.value--
        value.textContent = value.dataset.value + " шт";
    }

    cardBasket.forEach((item)=>{
        item.addEventListener('click',function(){
            this.classList.toggle('hidden');
            this.nextElementSibling.classList.toggle('hidden');
            let value = this.nextElementSibling.querySelector('.card__value');
            getPlus(value);
        })
    })

    plus.forEach((item)=>{
        item.addEventListener('click',function(){
            let value = this.previousElementSibling;
            getPlus(value);
        })
    })

    minus.forEach((item)=>{
        item.addEventListener('click',function(){
            let value = this.nextElementSibling;
            if (+value.dataset.value === 1) {
                getMinus(value);
                let block = this.parentElement;
                let button = block.previousElementSibling;
                block.classList.add('hidden');
                button.classList.remove('hidden');
            } else {
                getMinus(value);
            }
        })
    })
})();

