// Подключение js-файлов с помощью rigger-а
// Modules
'use strict';

(function () {
  var like = document.querySelectorAll('.card__like');
  like.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
})();

'use strict';

(function () {
  var cardBasket = document.querySelectorAll('.card__basket');
  var plus = document.querySelectorAll('.card__btn[data-btn="plus"]');
  var minus = document.querySelectorAll('.card__btn[data-btn="minus"]');

  var getPlus = function getPlus(value) {
    value.dataset.value++;
    value.textContent = value.dataset.value + " шт";
  };

  var getMinus = function getMinus(value) {
    value.dataset.value--;
    value.textContent = value.dataset.value + " шт";
  };

  cardBasket.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('hidden');
      this.nextElementSibling.classList.toggle('hidden');
      var value = this.nextElementSibling.querySelector('.card__value');
      getPlus(value);
    });
  });
  plus.forEach(function (item) {
    item.addEventListener('click', function () {
      var value = this.previousElementSibling;
      getPlus(value);
    });
  });
  minus.forEach(function (item) {
    item.addEventListener('click', function () {
      var value = this.nextElementSibling;

      if (+value.dataset.value === 1) {
        getMinus(value);
        var block = this.parentElement;
        var button = block.previousElementSibling;
        block.classList.add('hidden');
        button.classList.remove('hidden');
      } else {
        getMinus(value);
      }
    });
  });
})();