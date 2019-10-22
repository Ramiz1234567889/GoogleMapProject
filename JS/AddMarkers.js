// الدالة التي تقوم بتنفيذ وإضافة الماركر او المؤشر
function addMarker(coords, map, PumbInfo) {
  let marker = new google.maps.Marker({
    position: coords,
    map
  });
  let InfoWindow = new google.maps.InfoWindow({
    content: addHtml(PumbInfo)
  });
  marker.addListener("mouseover", function() {
    InfoWindow.open(map, marker);
  });
}
