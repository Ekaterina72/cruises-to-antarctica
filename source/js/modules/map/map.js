const ymaps = window.ymaps;
const myMap = document.querySelector('#map');

const mapInit = () => {
  const map = new ymaps.Map(myMap, {
    center: [59.93863106417265, 30.323036499999905],
    zoom: 16,
  });

  let myPlacemark = new ymaps.Placemark([59.937449374527226, 30.32259661772146], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/location.svg',
    iconImageSize: [18, 22],
  });

  map.geoObjects.add(myPlacemark);
};

if (myMap) {
  ymaps.ready(mapInit);
}
