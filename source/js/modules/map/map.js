const myMap = document.querySelector('#map');
const scriptLink = 'https://api-maps.yandex.ru/2.1/?apikey=7d566289-5540-4e2f-911d-b60b8a1f68a5&lang=ru_RU';

const initMap = () => {
  const map = new window.ymaps.Map(myMap, {
    center: [59.93863106417265, 30.323036499999905],
    zoom: 16,
    controls: [],
  });

  const myPlacemark = new window.ymaps.Placemark([59.937449374527226, 30.32259661772146], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/location.svg',
    iconImageSize: [18, 22],
  });

  map.geoObjects.add(myPlacemark);
};

const createMap = () => {
  if (myMap) {
    const mapScriptElement = document.createElement('script');
    mapScriptElement.async = true;
    mapScriptElement.src = scriptLink;
    document.body.appendChild(mapScriptElement);
    mapScriptElement.onload = () => {
      window.ymaps.ready(initMap);
    };
  }
};

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    createMap();
    observer.unobserve(entries[0].target);
  }
}, {
  threshold: [0],
});

if (myMap) {
  observer.observe(myMap);
}

const startMap = () => {
  document.addEventListener('load', () => {
    initMap();
  });
};

export {startMap};
