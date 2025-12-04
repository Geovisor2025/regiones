var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MUN_REGIONES_1 = new ol.format.GeoJSON();
var features_MUN_REGIONES_1 = format_MUN_REGIONES_1.readFeatures(json_MUN_REGIONES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUN_REGIONES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUN_REGIONES_1.addFeatures(features_MUN_REGIONES_1);
var lyr_MUN_REGIONES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUN_REGIONES_1, 
                style: style_MUN_REGIONES_1,
                popuplayertitle: 'MUN_REGIONES',
                interactive: true,
    title: 'MUN_REGIONES<br />\
    <img src="styles/legend/MUN_REGIONES_1_0.png" /> ALTIPLANO<br />\
    <img src="styles/legend/MUN_REGIONES_1_1.png" /> AMAZONIA<br />\
    <img src="styles/legend/MUN_REGIONES_1_2.png" /> CHACO<br />\
    <img src="styles/legend/MUN_REGIONES_1_3.png" /> CHAPARE<br />\
    <img src="styles/legend/MUN_REGIONES_1_4.png" /> LLANOS<br />\
    <img src="styles/legend/MUN_REGIONES_1_5.png" /> VALLE<br />\
    <img src="styles/legend/MUN_REGIONES_1_6.png" /> YUNGAS<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MUN_REGIONES_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MUN_REGIONES_1];
lyr_MUN_REGIONES_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MPIO': 'MPIO', 'REGION': 'REGION', });
lyr_MUN_REGIONES_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MPIO': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MUN_REGIONES_1.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MPIO': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MUN_REGIONES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});