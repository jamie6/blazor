require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {
    esriConfig.apiKey = "AAPK67d587eafb5c46c4aa6ffd3cd40bdb17tkAAPxj614aHsv67NfDbx1I77lsiBa5pSGUvYOvPqa2rr9OOE8T2PcYreAVrSTe-";

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv" // Div element
    });
});


export function showPrompt(message) {
    console.log("show prompt");
    return prompt(message, 'Type anything here');
}