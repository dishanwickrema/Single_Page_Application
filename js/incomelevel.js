// url = "https://misc.thestar.com/interactivegraphic/2017/11-nov/01-census-by-income/geojsons/geojson2015topo.json"
API_KEY = "pk.eyJ1IjoiZGlzaGFuc2hhbGkiLCJhIjoiY2sxZ3NlZm15MDB1bjNjbjBjY2J4c3RubSJ9.pgSyU_dvrDQPL0KaZK1MKg"
myMap = L.map("map", {
    center: [43.653225, -79.383186],
    zoom: 10
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 30,
    id: "mapbox.high-contrast",
    accessToken: API_KEY
}).addTo(myMap);

function getColor(d) {
    return d > 6 ? '#6699ff' :
        d > 5 ? '#3399ff' :
        d > 4 ? '#3399ff' :
        d > 3 ? 'lightblue' :
        d > 2.5 ? '#BD0026' :
        d > 2 ? '#E31A1C' :
        d > 1.5 ? '#FC4E2A' :
        d > 1 ? '#FD8D3C' :
        d > .75 ? '#FEB24C' :
        d > .5 ? '#FED976' :
        d > .3 ? 'red' :
                'white';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.RAVGINC),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '4',
        fillOpacity: 1
    };
}

// hover over
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

file = "resources/geojson2015topo.json"
d3.json(file, function (censustract) {
    // console.log(censustract)
    geodata = topojson.feature(censustract, censustract.objects.censustract)

    // L.geoJson(geodata.features,{style: style}).addTo(myMap);

    geojson = L.geoJson(geodata.features, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(myMap);
})