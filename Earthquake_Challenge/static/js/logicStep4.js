  
//Add console.log to check if our code is working
console.log("working");

//Tile for streets map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

//creates a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets,

};


//creates the map object with a center and zoom level
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

//creates earthquake layer for the map
let earthquakes = new L.layerGroup();

//defines the object that contains the overlay object
let overlays = {Earthquakes: earthquakes};

//passes our map layers to base control and add the layer control to the map
L.control.layers(baseMaps, overlays).addTo(map);


//Add GeoJSON Data
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(earthquakeData).then(function(data){
    //function returns style data for each earthquake plotted. the magnitude is passed into a function to calculate the radius
    function styleInfo(feature){
        return{
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.properties.mag),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    //function that returns the radius of the earthquake given its magnitude
    function getRadius(magnitude){
        if (magnitude === 0){
            return 1;
        }
        return magnitude * 4;
    }

    function getColor(magnitude){
        if (magnitude > 5){
            return "#ea2c2c";
        }
        if (magnitude > 4){
            return "#ea822c";
        }
        if (magnitude > 3){
            return "#ee9c00";
          }
          if (magnitude > 2) {
            return "#eecc00";
          }
          if (magnitude > 1) {
            return "#d4ee00";
          }
          return "#98ee00";
    }

    //creates a GeoJSON layer with retrieved data
    L.geoJson(data,{
        //creates points and circle markers with varrying radius based on magnitudes
        pointToLayer: function(feature, latlng){
            console.log(data);
            return L.circleMarker(latlng);
        },
        
        style: styleInfo,

        OnEachFeature: function(feature, layer){
            layer.bindPopup("Magnitude: "+ feature.properties.mag + "<br>Location: " + feature.properties.place)
        }


        //to toggle between "on" and "off", add to layGroup
    }).addTo(earthquakes);

    //adds layerGroup into the map
    earthquakes.addTo(map);
});


