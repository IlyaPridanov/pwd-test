'use strict';

(function () {
    const like = document.querySelectorAll('.card__like');

    like.forEach((item)=>{
        item.addEventListener('click',function(){
            this.classList.toggle('active');
        })
    })
})();

