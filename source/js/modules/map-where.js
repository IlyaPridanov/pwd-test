ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.755814, 37.617635],
      controls: ["zoomControl"],
      zoom:10
    }),

    myPlacemark1 = new ymaps.Placemark([55.798950, 37.606954], {
      hintContent: 'Филиал в Москве',

    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/marker.png',
      iconImageSize: [27, 38],
      iconImageOffset: [-13, -15],
      balloonMaxWidth: 300,
      balloonOffset: [120,100],
      hideIconOnBalloonOpen: false

    }),

    myPlacemark2 = new ymaps.Placemark([55.783113, 37.630318], {
      hintContent: 'Ещё в Москве',

    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/marker.png',
      iconImageSize: [27, 38],
      iconImageOffset: [-13, -15],
      balloonMaxWidth: 300,
      balloonOffset: [120,100],
      hideIconOnBalloonOpen: false
    }),

    myPlacemark3 = new ymaps.Placemark([55.693364, 37.743883], {
      hintContent: 'И ещё Филиал в Москве',

    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/marker.png',
      iconImageSize: [27, 38],
      iconImageOffset: [-13, -15],
      balloonMaxWidth: 300,
      balloonOffset: [120,100],
      hideIconOnBalloonOpen: false
    });

    myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3);

    myMap.behaviors.disable('scrollZoom');
  });
