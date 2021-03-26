//Add console.log to check if our code is working
console.log("working");

//creates the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

/*
//add a marker to  the map for Los Angeles, California
let marker = L.marker([34.0522, -118.2437]).addTo(map); 
*/


//adding a circle marker on our map for los angeles
//L.circle works its radius in meters vs L.circleMarker works its radius in pixels
let circle = L.circle([34.0522, -118.2437],{
    radius: 300,
    color:'black',
    fillColor:'#ffffa1'
}).addTo(map);

/*
//creates the tile layer that will be the background for our map
let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox.streets', //mapbox API
    accessToken: API_KEY
});
*/


//This is the Static Tiles API Format in the leaflet tileLayer() method
//To use the mapbox Styles API built into the mapbox
// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//adding 'graymap' tile layer to the map
streets.addTo(map);

