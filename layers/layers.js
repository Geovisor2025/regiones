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
var format_MUN_SUB_REGIONES_1 = new ol.format.GeoJSON();
var features_MUN_SUB_REGIONES_1 = format_MUN_SUB_REGIONES_1.readFeatures(json_MUN_SUB_REGIONES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUN_SUB_REGIONES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUN_SUB_REGIONES_1.addFeatures(features_MUN_SUB_REGIONES_1);
var lyr_MUN_SUB_REGIONES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUN_SUB_REGIONES_1, 
                style: style_MUN_SUB_REGIONES_1,
                popuplayertitle: 'MUN_SUB_REGIONES',
                interactive: true,
    title: 'MUN_SUB_REGIONES<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_0.png" /> ALTIPLANO CENTRAL<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_1.png" /> ALTIPLANO NORTE<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_2.png" /> ALTIPLANO SUR<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_3.png" /> AMAZONIA<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_4.png" /> CHACO LLANO<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_5.png" /> CHACO LLANOS<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_6.png" /> CHACO SERRANO<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_7.png" /> CHACOS LLANOS<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_8.png" /> CHAPARE<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_9.png" /> GUARAYO CHIQUITANO<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_10.png" /> LLANOS DE SANTA CRUZ<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_11.png" /> NORTE INTEGRADO DE SANTA CRUZ<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_12.png" /> PAMPA DE MOXOS<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_13.png" /> PAMPA INUNDABLE DE MOXOS<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_14.png" /> VALLE CERRADOS<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_15.png" /> VALLE DEL NORTE<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_16.png" /> VALLE DEL SUR<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_17.png" /> VALLES CENTRALES<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_18.png" /> VALLES CERRADOS<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_19.png" /> VALLES DEL NORTE<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_20.png" /> VALLES DEL SUR<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_21.png" /> YUNGAS DEL NORTE<br />\
    <img src="styles/legend/MUN_SUB_REGIONES_1_22.png" /> YUNGAS DEL SUR<br />' });
var format_MUN_REGIONES_2 = new ol.format.GeoJSON();
var features_MUN_REGIONES_2 = format_MUN_REGIONES_2.readFeatures(json_MUN_REGIONES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUN_REGIONES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUN_REGIONES_2.addFeatures(features_MUN_REGIONES_2);
var lyr_MUN_REGIONES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUN_REGIONES_2, 
                style: style_MUN_REGIONES_2,
                popuplayertitle: 'MUN_REGIONES',
                interactive: false,
    title: 'MUN_REGIONES<br />\
    <img src="styles/legend/MUN_REGIONES_2_0.png" /> ALTIPLANO<br />\
    <img src="styles/legend/MUN_REGIONES_2_1.png" /> AMAZONIA<br />\
    <img src="styles/legend/MUN_REGIONES_2_2.png" /> CHACO<br />\
    <img src="styles/legend/MUN_REGIONES_2_3.png" /> CHAPARE<br />\
    <img src="styles/legend/MUN_REGIONES_2_4.png" /> LLANOS<br />\
    <img src="styles/legend/MUN_REGIONES_2_5.png" /> VALLE<br />\
    <img src="styles/legend/MUN_REGIONES_2_6.png" /> YUNGAS<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MUN_SUB_REGIONES_1.setVisible(true);lyr_MUN_REGIONES_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_MUN_SUB_REGIONES_1,lyr_MUN_REGIONES_2];
lyr_MUN_SUB_REGIONES_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MPIO': 'MPIO', 'REGION': 'REGION', 'subregion': 'subregion', 'verif': 'verif', });
lyr_MUN_REGIONES_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MPIO': 'MPIO', 'REGION': 'REGION', });
lyr_MUN_SUB_REGIONES_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MPIO': 'TextEdit', 'REGION': 'TextEdit', 'subregion': 'TextEdit', 'verif': 'TextEdit', });
lyr_MUN_REGIONES_2.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MPIO': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MUN_SUB_REGIONES_1.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MPIO': 'inline label - always visible', 'REGION': 'inline label - always visible', 'subregion': 'inline label - always visible', 'verif': 'inline label - visible with data', });
lyr_MUN_REGIONES_2.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MPIO': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MUN_REGIONES_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});