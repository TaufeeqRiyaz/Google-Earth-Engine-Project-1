// AAI = Absorbing Aerosol Index 
var AAI = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_AER_AI')
  .select('absorbing_aerosol_index')
  .filterDate('2019-01-01', '2022-01-01')

AAI_layer_prop = {max: 1.5,
                  min: -1,
                  palette: ["white","cyan","blue","yellow","orange","red"]
                  }
  
Map.addLayer(AAI, AAI_layer_prop , 'Aerosol Index')
Map.setCenter(77.6, 12.9, 5)
