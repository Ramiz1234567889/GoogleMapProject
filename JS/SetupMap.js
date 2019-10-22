function initMap() {
  let option = {
    zoom: 9,
    center: { lat: 15.5007, lng: 32.5599 }
  };

  let map = new google.maps.Map(document.getElementById("map"), option);

  addMarker({ lat: 15.6569, lng: 32.5486 }, map, {
    Pname: "Pumb one",
    Phone: 2315415354,
    AdminName: "Ramiz Mahammed",
    Status: true
  });
  addMarker({ lat: 15.1369, lng: 32.3186 }, map, {
    Pname: "Pumb two",
    Phone: 5468543154,
    AdminName: "Elsiddig Ahmed",
    Status: false
  });
  addMarker({ lat: 15.6369, lng: 32.5186 }, map, {
    Pname: "Pumb two",
    Phone: 5468543154,
    AdminName: "Elsiddig Ahmed",
    Status: true
  });
}
