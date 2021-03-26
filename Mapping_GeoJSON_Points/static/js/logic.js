  
//Add console.log to check if our code is working
console.log("working");

//creates the map object with a center and zoom level
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

//LAX to SFO coordinates
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
]; 

// creating polyline using line coordinates and makes line red
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: "5, 7",
    opacity: 0.5
    
}).addTo(map);


//This is the Static Tiles API Format in the leaflet tileLayer() method
//To use the mapbox Styles API built into the mapbox
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//adding 'graymap' tile layer to the map
streets.addTo(map);

