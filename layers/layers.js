var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MunicpiosPar_1 = new ol.format.GeoJSON();
var features_MunicpiosPar_1 = format_MunicpiosPar_1.readFeatures(json_MunicpiosPar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosPar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosPar_1.addFeatures(features_MunicpiosPar_1);
var lyr_MunicpiosPar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicpiosPar_1, 
                style: style_MunicpiosPar_1,
                interactive: true,
                title: '<img src="styles/legend/MunicpiosPar_1.png" /> Municípios Pará'
            });
var format_TerrasIndgenas_2 = new ol.format.GeoJSON();
var features_TerrasIndgenas_2 = format_TerrasIndgenas_2.readFeatures(json_TerrasIndgenas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrasIndgenas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrasIndgenas_2.addFeatures(features_TerrasIndgenas_2);
var lyr_TerrasIndgenas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TerrasIndgenas_2, 
                style: style_TerrasIndgenas_2,
                interactive: true,
                title: '<img src="styles/legend/TerrasIndgenas_2.png" /> Terras Indígenas'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_MunicpiosPar_1.setVisible(true);lyr_TerrasIndgenas_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_MunicpiosPar_1,lyr_TerrasIndgenas_2];
lyr_MunicpiosPar_1.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', });
lyr_TerrasIndgenas_2.set('fieldAliases', {'gid': 'gid', 'terrai_cod': 'terrai_cod', 'terrai_nom': 'terrai_nom', 'etnia_nome': 'etnia_nome', 'municipio_': 'municipio_', 'uf_sigla': 'uf_sigla', 'superficie': 'superficie', 'fase_ti': 'fase_ti', 'modalidade': 'modalidade', 'reestudo_t': 'reestudo_t', 'cr': 'cr', 'faixa_fron': 'faixa_fron', 'undadm_cod': 'undadm_cod', 'undadm_nom': 'undadm_nom', 'undadm_sig': 'undadm_sig', 'dominio_un': 'dominio_un', 'data_atual': 'data_atual', 'epsg': 'epsg', });
lyr_MunicpiosPar_1.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', });
lyr_TerrasIndgenas_2.set('fieldImages', {'gid': '', 'terrai_cod': '', 'terrai_nom': '', 'etnia_nome': '', 'municipio_': '', 'uf_sigla': '', 'superficie': '', 'fase_ti': '', 'modalidade': '', 'reestudo_t': '', 'cr': '', 'faixa_fron': '', 'undadm_cod': '', 'undadm_nom': '', 'undadm_sig': '', 'dominio_un': '', 'data_atual': '', 'epsg': '', });
lyr_MunicpiosPar_1.set('fieldLabels', {'ID': 'no label', 'CD_GEOCODM': 'header label', 'NM_MUNICIP': 'no label', });
lyr_TerrasIndgenas_2.set('fieldLabels', {'gid': 'no label', 'terrai_cod': 'no label', 'terrai_nom': 'no label', 'etnia_nome': 'no label', 'municipio_': 'no label', 'uf_sigla': 'no label', 'superficie': 'no label', 'fase_ti': 'no label', 'modalidade': 'no label', 'reestudo_t': 'no label', 'cr': 'no label', 'faixa_fron': 'no label', 'undadm_cod': 'no label', 'undadm_nom': 'no label', 'undadm_sig': 'no label', 'dominio_un': 'no label', 'data_atual': 'no label', 'epsg': 'no label', });
lyr_TerrasIndgenas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});