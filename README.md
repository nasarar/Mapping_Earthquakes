# Mapping_Earthquakes

## Project Overview
To visualize earthquake events for the last 7 days using an interactive map. The dataset includes, both major and minor earthquakes that occured the past 7 days and tectonic plates around the globe.

## Resources
-Data Source: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson, https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson, https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

-Software: Python 3.6.7, Javascript ES6+, Leaflet 1.7, D3 6.6.0, GeoMap 3.6.12

## Results
Using javascript and the d3 library, the geographical coordinates and magnitudes of earthquakes from the GeoJSON data was extracted directly from the USGS website for the last 7 days. The leaflet library was then used to plot the data on top of the mapbox map via an API request. All map interactivity was then added included being able to choose which data and base maps are displayed. A screenshot of the project can be seen below.

![](/Earthquake_Challenge/static/images/map_sample.png)
