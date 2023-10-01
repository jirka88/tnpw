var center = SMap.Coords.fromWGS84(15.8443725, 50.1904394);
var m = new SMap(JAK.gel("m"), center, 16);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

var options = {};
var marker = new SMap.Marker(center, "myMarker", options);
layer.addMarker(marker);