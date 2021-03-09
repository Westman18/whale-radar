
//handling google map :

let map;
let markers = [];
let currentMarkerCoordinates = markers[0] ? markers[0].position : null;


const image = "../assets/pin.png";

function myMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 6,
    center: { lat: 48, lng: -125},
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false

  });
}

function placeMarkerAndPanTo(latLng, map) {


  const marker = new google.maps.Marker(
    {
      position: latLng,
      map: map,
      icon: image
    }
  );
  markers.push(marker);
  // map.panTo(latLng);
  console.log(latLng.lat, latLng.lng)
}


// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}