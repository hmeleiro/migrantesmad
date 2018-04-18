var format_Tasadeextranjera0 = new ol.format.GeoJSON();
var features_Tasadeextranjera0 = format_Tasadeextranjera0.readFeatures(json_Tasadeextranjera0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tasadeextranjera0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tasadeextranjera0.addFeatures(features_Tasadeextranjera0);var lyr_Tasadeextranjera0 = new ol.layer.Vector({
                source:jsonSource_Tasadeextranjera0, 
                style: style_Tasadeextranjera0,
                title: 'Tasa de extranjería<br />\
        <img src="styles/legend/Tasadeextranjera0_0.png" /> 3% - 8%<br />\
        <img src="styles/legend/Tasadeextranjera0_1.png" /> 8% - 13%<br />\
        <img src="styles/legend/Tasadeextranjera0_2.png" /> 13% - 18%<br />\
        <img src="styles/legend/Tasadeextranjera0_3.png" /> 18% - 23%<br />\
        <img src="styles/legend/Tasadeextranjera0_4.png" /> 23% - 28%<br />'
            });var format_DISTRITOS1 = new ol.format.GeoJSON();
var features_DISTRITOS1 = format_DISTRITOS1.readFeatures(json_DISTRITOS1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DISTRITOS1.addFeatures(features_DISTRITOS1);var lyr_DISTRITOS1 = new ol.layer.Vector({
                source:jsonSource_DISTRITOS1, 
                style: style_DISTRITOS1,
                title: '<img src="styles/legend/DISTRITOS1.png" /> DISTRITOS'
            });

lyr_Tasadeextranjera0.setVisible(true);lyr_DISTRITOS1.setVisible(true);
var layersList = [lyr_Tasadeextranjera0,lyr_DISTRITOS1];
lyr_Tasadeextranjera0.set('fieldAliases', {'qc_id': 'qc_id', 'cartodb_id': 'cartodb_id', 'nomdis': 'nomdis', 'codbar': 'codbar', 'coddistrit': 'coddistrit', 'codbarrio': 'codbarrio', 'nombre': 'nombre', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'created_at': 'created_at', 'updated_at': 'updated_at', 'población extranjera 2_distrito': 'población extranjera 2_distrito', 'población extranjera 2_% de extranjeros': 'población extranjera 2_% de extranjeros', 'población extranjera 2_ciudad de madrid': 'población extranjera 2_ciudad de madrid', 'población extranjera 2_españa': 'población extranjera 2_españa', 'población extranjera 2_nacionalidad más numerosa': 'población extranjera 2_nacionalidad más numerosa', 'tasa_ext': 'tasa_ext', });
lyr_DISTRITOS1.set('fieldAliases', {'qc_id': 'qc_id', 'nombre': 'Distrito', 'coddistrit': 'coddistrit', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'var 100': 'var 100', 'U_Distrito': 'U_Distrito', 'U_Total': 'Población', 'U_tasa_extranjeros': '% de extranjeros', });
lyr_Tasadeextranjera0.set('fieldImages', {'qc_id': 'TextEdit', 'cartodb_id': 'TextEdit', 'nomdis': 'TextEdit', 'codbar': 'TextEdit', 'coddistrit': 'TextEdit', 'codbarrio': 'TextEdit', 'nombre': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'población extranjera 2_distrito': 'TextEdit', 'población extranjera 2_% de extranjeros': 'TextEdit', 'población extranjera 2_ciudad de madrid': 'TextEdit', 'población extranjera 2_españa': 'TextEdit', 'población extranjera 2_nacionalidad más numerosa': 'TextEdit', 'tasa_ext': 'TextEdit', });
lyr_DISTRITOS1.set('fieldImages', {'qc_id': 'Hidden', 'nombre': 'TextEdit', 'coddistrit': 'Hidden', 'shape_area': 'Hidden', 'shape_len': 'Hidden', 'var 100': 'Hidden', 'U_Distrito': 'Hidden', 'U_Total': 'TextEdit', 'U_tasa_extranjeros': 'TextEdit', });
lyr_Tasadeextranjera0.set('fieldLabels', {'qc_id': 'no label', 'cartodb_id': 'no label', 'nomdis': 'no label', 'codbar': 'no label', 'coddistrit': 'no label', 'codbarrio': 'no label', 'nombre': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'created_at': 'no label', 'updated_at': 'no label', 'población extranjera 2_distrito': 'no label', 'población extranjera 2_% de extranjeros': 'no label', 'población extranjera 2_ciudad de madrid': 'no label', 'población extranjera 2_españa': 'no label', 'población extranjera 2_nacionalidad más numerosa': 'no label', 'tasa_ext': 'no label', });
lyr_DISTRITOS1.set('fieldLabels', {'nombre': 'no label', 'U_Total': 'inline label', 'U_tasa_extranjeros': 'inline label', });
lyr_DISTRITOS1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});