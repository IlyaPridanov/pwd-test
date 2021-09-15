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