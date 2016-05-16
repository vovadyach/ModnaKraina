/**
 * Created by vinside on 5/16/16.
 */
ymaps.ready(init);
    var myMap,
         myPlacemark;
function init(){
    myMap = new ymaps.Map ("map", {
        center: [46.50, 30.74],
        zoom: 9
    });

    myPlacemark = new ymaps.Placemark([46.50, 30.74], {
        hintContent: 'Одесса',
        balloonContent: 'Город герой'
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.enable('scrollZoom');

    //Creates traffic element control
    var trafficControl = new ymaps.control.TrafficControl({
        providerKey: 'traffic#actual',
        shown: false
    });

    // Gets a traffic provider link "Now" and shows info dots.
    trafficControl.getProvider('traffic#actual').state.set('infoLayerShown', true);

    //Adds controls
    myMap.controls
        //Changes a scale
        .add('zoomControl')
        //Lists maps types
        .add('typeSelector')
        //A standart set of tools
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine())
        //Обзорная карта, с заданным типом
        .add(new ymaps.control.MiniMap({
            type: 'yandex#publicMap'
        }))
        // Adds control to the map
        .add(trafficControl)
        .add(new ymaps.control.MiniMap({type:'yandex#hybrid'},{zoomOffset: 3},  { right: 10, top: 75 }));
}
