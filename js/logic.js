
function markerSize(population) {
  return population / 20;
}
// An array containing each city's name, location, and population

var areas = [{
  location: [51.25, -85.32],
  name: "Ontario",
  population: "14,446,515"
},
{
  location: [46.81, -71.20],
  name: "Quebec",
  population: "8,433,301"
},
{
  location: [43.65, -79.38],
  name: "Toronto",
  population: "2,930,000"
},
{
  location: [43.85, -79.02],
  name: "Ajax",
  population: "121,780"
},
{
  location: [43.83, -79.87],
  name: "Caledon",
  population: "72,900"
},
{
  location: [43.58, -79.64],
  name: "Mississauga",
  population: "726,359"
},
{
  location: [43.92, -79.52],
  name: "King",
  population: "24,512"
},
{
  location: [44.38, -79.69],
  name: "Barrie",
  population: "141,434"
},
{
  location: [43.85, -79.33],
  name: "Markham",
  population: "301,709"
},
{
  location: [43.88, -79.44],
  name: "Richmond Hill",
  population: "195,022"
},
{
  location: [43.85, -79.50],
  name: "Vaughan",
  population: "323,281"
},
{
  location: [43.73, -79.76],
  name: "Brampton",
  population: "603,346"
},
{
  location: [43.65, -79.38],
  name: "Toronto",
  population: "2,930,000"
},
{
  location: [44.10, -80.48],
  name: "Durham",
  population: "683,600"
},
{
  location: [43.53, -79.87],
  name: "Halton",
  population: "548,435"
},
{
  location: [43.69, -79.45],
  name: "York",
  population: "1,110,000"
},
{
  location: [44.05, -80.18],
  name: "Duffrin",
  population: "61,735"
},
{
  location: [42.83, -80.30],
  name: "Simcoe",
  population: "13,922"
}
];


// // Define arrays to hold created region markers
var regionMarkers = [];


// Define variables for our base layers

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create a separate layer for regions
var regions = L.layerGroup(regionMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object

var overlayMaps = {
  "Region Population": regions
};

// Define a map object

var mymap = L.map("mymap", {
  center: [43.65, -79.38],
  zoom: 7,
  layers: [streetmap, regions]
});
// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false

}).addTo(mymap);

// Create a some circles over Toronto
L.circle([43.6532, -79.3832], {
  color: "yellow",
  fillColor: "purpule",
  fillOpacity: 0.75,
  radius: 10000
}).addTo(mymap);

for (var i = 0; i < areas.length; i++) {
  var area = areas[i];
  L.marker(area.location)
    .bindPopup("<h1>" + area.name + "</h1> <hr> <h3>Population " + area.population + "</h3>")
    .addTo(mymap);
}