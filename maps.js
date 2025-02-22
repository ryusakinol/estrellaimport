navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitud: " + position.coords.latitude);
    console.log("Longitud: " + position.coords.longitude);
});

const fakePosition = {
    coords: {
        latitude: 18.4861,  // Cambia esto por la latitud que quieras
        longitude: -69.9312 // Cambia esto por la longitud que quieras
    }
};

console.log("Latitud falsa: " + fakePosition.coords.latitude);
console.log("Longitud falsa: " + fakePosition.coords.longitude);
