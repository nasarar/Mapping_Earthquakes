  
//Add console.log to check if our code is working
console.log("working");

//creates the map object with a center and zoom level
let map = L.map('mapid').setView([30, 30], 2);



/*
//Add GeoJSON Data
let sanFranAirport = 
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//add GeoJson data layer to the map using the pointToLayer function
L.geoJson(sanFranAirport,{
    //we turn each feature into a marker on the map
    pointToLayer: function(feature, latlng){
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
    }
}).addTo(map);

//
L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer)
        layer.bindPopup("<h2>" +"Airport Code:  " +  feature.properties.faa + "</h2> <hr> <h3>" + "Aiport Name: " +feature.properties.name + "</h3>");
     }
}).addTo(map);

*/



//This is the Static Tiles API Format in the leaflet tileLayer() method
//To use the mapbox Styles API built into the mapbox
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//adding 'graymap' tile layer to the map
streets.addTo(map);

//Add GeoJSON Data
let airportData = "https://raw.githubusercontent.com/nasarar/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/majorAirports.json";

d3.json(airportData).then(function(data){
    console.log(data),

    //creates a GeoJSON layer with retrieved data
    L.geoJson(data).bindPopup("<h2> Airport Code: " + "</h2> <hr> <h3> Airport Name: " + "</h3>").addTo(map);

});


