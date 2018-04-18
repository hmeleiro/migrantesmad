var size = 0;
var ranges_Tasadeextranjera0 = [[3.000000, 8.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(247,251,255,0.8)'})
    })]],
[8.000000, 13.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(200,221,240,0.8)'})
    })]],
[13.000000, 18.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(115,179,216,0.8)'})
    })]],
[18.000000, 23.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(40,121,185,0.8)'})
    })]],
[23.000000, 28.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(8,48,107,0.8)'})
    })]]];
var styleCache_Tasadeextranjera0={}
var style_Tasadeextranjera0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("tasa_ext");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if (feature.get("población extranjera 2_nacionalidad más numerosa") !== null && resolution > 0 && resolution < 42) {
        labelText = String(feature.get("población extranjera 2_nacionalidad más numerosa"));
    } else {
        labelText = ""
    }
    var style = ranges_Tasadeextranjera0[0][2];
    for (i = 0; i < ranges_Tasadeextranjera0.length; i++){
        var range = ranges_Tasadeextranjera0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_Tasadeextranjera0[key]){
        var text = new ol.style.Text({
                font: '13.0px \'Futura\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Tasadeextranjera0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Tasadeextranjera0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};