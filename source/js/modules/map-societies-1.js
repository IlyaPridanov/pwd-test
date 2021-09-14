ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.710504, 37.587164],
      controls: ["zoomControl"],
      zoom:15
    }),

    myPlacemark1 = new ymaps.Placemark([55.710504, 37.587164], {
      hintContent: 'Московский офис',
    },
     {
      iconLayout: 'default#image',
      iconImageHref: '../img/blue-map.png',
      iconImageSize: [41, 68],
      iconImageOffset: [-20, -67],
      balloonMaxWidth: 300,
      balloonOffset: [120,100],
      hideIconOnBalloonOpen: false
    })

    myMap.geoObjects
    .add(myPlacemark1);

    myMap.behaviors.disable('scrollZoom');
  });
