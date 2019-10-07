
function markerSize(population) {
  return population / 20;
}

var locations = [
  {
    coordinates: [43.65, -79.38],
    region: {
      name: "Toronto",
      population: 2930000
    }
  },
  {
    coordinates: [44.10, -80.48],
    region: {
      name: "Durham",
      population: 683600
    }
  },
  {
    coordinates: [43.53, -79.87],
    region: {
        name : "Halton",
        population: 548435
      }
    },
    {
      coordinates: [43.69, -79.45],
      region: {
        name : "York",
        population: 1110000
      }
    }, 
    {
      coordinates: [44.05, -80.18],
      region: {
        name : "Duffrin",
        population: 61735
      }
    }, 
    {
      coordinates: [42.83, -80.30],
      region: {
        name : "Simcoe",
        population: 13922
      } 
    }
  ];

  // for (var i = 0; i < locations.length; i++) {
  //   var region = locations[i];
  //   L.marker(region.location)
  //     .bindPopup("<h1>" + region.name + "</h1> <hr> <h3>Population " + region.population + "</h3>")
  //     .addTo(mymap);
  // };
// // Define arrays to hold created region markers
var regionMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  regionMarkers.push(
    L.marker(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "red",
      fillColor: "white",
      radius: markerSize(locations[i].region.population)
      })
  );
}

// Define variables for our base layers

API_KEY  = "pk.eyJ1IjoiYmFuYWZzaGUiLCJhIjoiY2swc3d5bDg1MDdlcDNocG92ZGltZGg0ZSJ9.bXiVYEWfgPNVEIiVNBK4dA"
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
"Ragion Population": regions
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
  
// Create a red circle over Toronto
L.circle([43.6532, -79.3832], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius:10000
  }).addTo(mymap);

// // Function that will determine the color of a neighborhood based on the borough it belongs to
//   for (var i = 0; i < regions.length; i++) {
//   function chooseColor(region) {
//   switch (region) {
//   case "Durham":
//     return "yellow";
//   case "Halton":
//     return "red";
//   case "York":
//     return "orange";
//   case "Duffrin":
//     return "green";
//   case "Simcoe":
//     return "purple";
//   default:
//     return "black";
//   }
// }