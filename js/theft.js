function theftMap(map){
    API_KEY = "pk.eyJ1IjoiZGlzaGFuc2hhbGkiLCJhIjoiY2sxZ3NlZm15MDB1bjNjbjBjY2J4c3RubSJ9.pgSyU_dvrDQPL0KaZK1MKg"
    myMap = L.map(map, {
        center: [43.653225, -79.383186],
        zoom: 10
    });

    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 30,
        id: "mapbox.streets",
        accessToken: API_KEY
    }).addTo(myMap);

    // file = "resources/Auto_Theft_2014_to_2017.json"
    // d3.json(file, function(d){
    //     data = d 
    // })
}