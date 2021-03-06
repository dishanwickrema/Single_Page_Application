function accidentsMap(map) {
    // Creating map object
    API_KEY = "pk.eyJ1IjoiZGlzaGFuc2hhbGkiLCJhIjoiY2sxZ3NlZm15MDB1bjNjbjBjY2J4c3RubSJ9.pgSyU_dvrDQPL0KaZK1MKg"
    var myMap = L.map(map, {
        center: [43.651070, -79.347015],
        zoom: 10
    });

    // Adding tile layer to the map
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 30,
        id: "mapbox.high-contrast",
        accessToken: API_KEY
    }).addTo(myMap);


    // var url = "https://opendata.arcgis.com/datasets/1b2929dc396d4fd38917fdde37fd22d9_0.geojson";

    // Grab the data with d3
    file = "resources/Fatal_Collisions.json"
    d3.json(file, function (response) {
        // Create a new marker cluster group
        var markers = L.markerClusterGroup();

        // Loop through data
        for (var i = 0; i < response.features.length; i++) {

            // Set the data location property to a variable
            var location = response.features[i].geometry;

            // Check for location property
            if (location) {

                // Add a new marker to the cluster group and bind a pop-up
                markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]]).bindPopup("Location: " + response.features[i]
                    .properties.STREET1 + " and " + response.features[i].properties.STREET2 + "<hr> Date and Time: " + response.features[i].properties.DATE + "<hr> District: " + response.features[i].properties.District));

            }

        }

        // Add our marker cluster layer to the map
        myMap.addLayer(markers);

    });
}