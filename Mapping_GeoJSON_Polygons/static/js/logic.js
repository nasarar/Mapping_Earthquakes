  
//Add console.log to check if our code is working
console.log("working");

//Tile for streets map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

//Tile for dark map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

//creates a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark,
    Light: light
};


//creates the map object with a center and zoom level
let map = L.map('mapid', {
    center: [44.0, -50.0],
    zoom: 2,
    layers: [dark]
});

//passes our map layers to base control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);


//Add GeoJSON Data
let torontoData = "https://raw.githubusercontent.com/nasarar/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

let myStyle = {
    color: "#3BEA1F",
    weight: 2,
}

d3.json(torontoData).then(function(data){
    console.log(data),
    //creates a GeoJSON layer with retrieved data
    L.geoJson(data,{
        style: myStyle,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h2> Airline: "+feature.properties.airline + "</h2> <hr> <h3> Destination: "+ feature.properties.dst + "</h3>")
        }
    }).addTo(map);

});


