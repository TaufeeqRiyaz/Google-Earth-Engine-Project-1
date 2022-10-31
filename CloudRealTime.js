var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CLOUD')
  .select('cloud_fraction')
  .filterDate('2022-10-01', '2022-10-31');

var band_viz = {min: 0, max: 0.95, palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']};

Map.addLayer(collection.mean(), band_viz, 'S5P Cloud');
Map.setCenter(-58.14, -10.47, 2);
