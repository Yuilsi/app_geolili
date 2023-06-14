const apiKey = 'AIzaSyAKp5rc9KFB_CIDh14-A785thDS86NTjUg';
const mapId = 'b44a86ae07e6179a';

// Load the Google Maps JavaScript API
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.7749, lng: -122.4194 }, // Set the initial center of the map
    zoom: 10, // Set the initial zoom level
    mapId: mapId, // Provide the Map ID
    apiKey: apiKey // Provide your API key
  });
}
