var terain_data = ee.Image("MERIT/DEM/v1_0_3");

var terrain_map = {
    bands: ['dem'],
    min: -3,
    max: 1000,
    palette: ['000000', '478FCD', '86C58E', 'AFC35E', '8F7131', 'B78D4F', 'E2B8A6', 'FFFFFF']
  };
  
  Map.setCenter(90.301, 23.052, 10);
  
  Map.addLayer(terrain_data, terrain_map, "Terrain");
  
