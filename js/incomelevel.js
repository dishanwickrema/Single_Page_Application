// url = "https://misc.thestar.com/interactivegraphic/2017/11-nov/01-census-by-income/geojsons/geojson2015topo.json"
function incomeLevelMap(map) {
    API_KEY = "pk.eyJ1IjoiZGlzaGFuc2hhbGkiLCJhIjoiY2sxZ3NlZm15MDB1bjNjbjBjY2J4c3RubSJ9.pgSyU_dvrDQPL0KaZK1MKg"
    myMap = L.map(map, {
        center: [43.653225, -79.383186],
        zoom: 9
    });

    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 30,
        id: "mapbox.high-contrast",
        accessToken: API_KEY
    }).addTo(myMap);

    function getColor(d) {
        // return d > 6 ? 'aqua' :
        //     d > 5 ? 'black' :
        //     d > 4 ? 'black' :
        //     d > 3 ? 'lblack' :
            return d > 2.5 ? 'aqua' :
            d > 2 ? 'rgba(255, 255, 0, 0.555)' :
            d > 1.5 ? 'rgb(53, 204, 91)' :
            d > 1 ? 'rgb(4, 182, 4)' :
            d > .75 ? 'rgb(251, 65, 65)' :
            d > .5 ? 'red' :
            d > .3 ? 'rgb(163, 0, 0)' :
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

        info.update(layer.feature.properties);
    }

    // info control

    function resetHighlight(e) {
        geojson.resetStyle(e.target);

        info.update();
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

        // new
        info = L.control();

        info.onAdd = function () {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };
        props = geodata.features

        info.update = function (props) {
            this._div.innerHTML =    
            (props ?
                '<b>' + props.CSDNAME + '</b><br />$' + props.AVGINC.toLocaleString()
                : '<h4>Average Income</h4>Hover over...');
        };
        
        info.addTo(myMap);

    })
}