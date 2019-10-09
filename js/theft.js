function theftMap(map){    

    API_KEY = "pk.eyJ1IjoiZGlzaGFuc2hhbGkiLCJhIjoiY2sxZ3NlZm15MDB1bjNjbjBjY2J4c3RubSJ9.pgSyU_dvrDQPL0KaZK1MKg"

    file = "resources/Auto_Theft_2014_to_2017.json"
    d3.json(file, function(d){
        data = d.features
        createFeatures(d.features)
    })

    function createFeatures(data) {

        function onEachFeature(feature, layer) {
          layer.bindPopup("<h3>" + feature.properties.Neighbourhood +
            "</h3><hr><p>" + new Date(feature.properties.occurrencedate) + "</p>");
        }
    
    
        var pins = L.geoJSON(data, {
          onEachFeature: onEachFeature
        });
      
        createMap(pins);
    }
      
    function createMap(pins) {
      
        // Define streetmap and darkmap layers
        var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
          attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken: API_KEY
        });
      
        var contrast = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
          attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
          maxZoom: 18,
          id: "high-contrast",
          accessToken: API_KEY
        });
      
        // Define a baseMaps object to hold our base layers
        var baseMaps = {
          "Street View": streetmap,
          "High Contrast View": contrast
        };
      
        // Create overlay object to hold our overlay layer
        var overlayMaps = {
          Pins: pins
        };
      
        // Create our map, giving it the streetmap and pins layers to display on load
        var myMap = L.map(map, {
          center: [43.653225, -79.383186],
          zoom: 5,
          layers: [streetmap, pins]
        });
      
        // Create a layer control
        // Pass in our baseMaps and overlayMaps
        // Add the layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
          collapsed: false
        }).addTo(myMap);
    }
}