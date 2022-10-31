//-------------------------------------------------------------------------------------------------------------------------------
// Night time Light (To measure Light Leakage/Pollution)

// Filtering data using dates 
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG')
                  .filter(ee.Filter.date('2017-05-01', '2017-05-31'));
                  
// Selecting Average Radiation as a factor
var nighttime = dataset.select('avg_rad');
var nighttimeVis = {min: 0.0, max: 60.0, pallete : ['white','blue']}; // Desegnating max and min values and colour pallete

Map.addLayer(nighttime, nighttimeVis, 'Night Light Intensity'); // Adding layer to map

//---------------------------------------------------------------------------------------------------------------------------------------

// Measuring Aerosol (To measure Light Pollution)

// AAI = Absorbing Aerosol Index 
var AAI = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_AER_AI')
  .select('absorbing_aerosol_index')
  .filterDate('2019-01-01', '2022-01-01')

var AAI_layer_prop = {max: 1.5,
                  min: -1,
                  palette: ["blue","white"]
                  }
  
Map.addLayer(AAI, AAI_layer_prop , 'Aerosol Index')

//---------------------------------------------------------------------------------------------------------------------------------------

// Cloud Presence (To measure cloud cover over a region)

var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CLOUD')
  .select('cloud_fraction')
  .filterDate('2022-10-01', '2022-10-31');

var band_viz = {min: 0, max: 0.95, palette: ['blue','white']};

Map.addLayer(collection.mean(), band_viz, 'S5P Cloud');

//---------------------------------------------------------------------------------------------------------------------------------------

// Terrain (To measure Terrain)

var terain_data = ee.Image("MERIT/DEM/v1_0_3");

var terrain_map = {
    bands: ['dem'],
    min: -3,
    max: 1000,
    palette: ['white','blue']
  };

Map.addLayer(terrain_data, terrain_map, "Terrain");
