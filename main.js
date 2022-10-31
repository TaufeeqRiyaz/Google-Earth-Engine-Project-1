
var terrain_map = {
  bands: ['dem'],
  min: -3,
  max: 1000,
  palette: ['000000', '478FCD', '86C58E', 'AFC35E', '8F7131', 'B78D4F', 'E2B8A6', 'FFFFFF']
};

Map.setCenter(90.301, 23.052, 10);

Map.addLayer(terrain_data, terrain_map, "Terrain");

var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG')
                  .filter(ee.Filter.date('2017-05-01', '2017-05-31'));
var nighttime = dataset.select('avg_rad');
var nighttimeVis = {min: 0.0, max: 60.0};
Map.addLayer(nighttime, nighttimeVis, 'Nighttime');

var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CLOUD')
  .select('cloud_fraction')
  .filterDate('2022-10-01', '2022-10-31');

var band_viz = {min: 0, max: 0.95, palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']};

Map.addLayer(collection.mean(), band_viz, 'S5P Cloud');
Map.setCenter(-58.14, -10.47, 2);

var AAI = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_AER_AI')
  .select('absorbing_aerosol_index')
  .filterDate('2019-01-01', '2022-01-01')

var AAI_layer_prop = {max: 1.5,
                  min: -1,
                  palette: ["white","cyan","blue","yellow","orange","red"]
                  }
  
Map.addLayer(AAI, AAI_layer_prop , 'Aerosol Index')
Map.setCenter(77.6, 12.9, 5)
