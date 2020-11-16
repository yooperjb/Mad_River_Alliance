
  require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/Legend",
      "esri/widgets/ScaleBar"
      //"esri/widgets/BasemapToggle",
      //"esri/widgets/BasemapGallery",
    ], 
  
  function (WebMap, MapView, Legend, ScaleBar) {
    
    var webmap = new WebMap({
        portalItem: {
            id: "2559b1d4178444a7beb08f9ddb27ec01"
        }
    });

    var view = new MapView({
        container: "viewDiv",
        map: webmap,
    });

    // If toggle UI is wanted
    // var basemapToggle = new BasemapToggle({
    //     view: view,
    //     nextBasemap: "topo"
    // });

    var legend = new Legend({
        view: view
    });

    var scalebar = new ScaleBar({
        view: view
    });
    
    // var basemapGallery = new BasemapGallery({
    //     view: view,
    //     source: {
    //         portal: {
    //         url: "https://www.arcgis.com",
    //         useVectorBasemaps: true // Load vector tile basemaps
    //         }
    //     }
    // });

    // // trailhead point icons using renderer
    // var trailheadsRenderer = {
    //     type: "simple",
    //     symbol: {
    //       type: "picture-marker",
    //       url: "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
    //       width: "18px",
    //       height: "18px"
    //     }
    //   };

    // // Trailheads feature layer (points) 
    // var trailheadsLayer = new FeatureLayer({
    //     url:
    //         "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
        
    //     // renderer above
    //     renderer: trailheadsRenderer,
    // });

    // // Trails feature layer (lines)
    // var trailsLayer = new FeatureLayer({
    //     url:
    //         "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
        
    //     renderer: {
    //         type: "simple",
    //         symbol: {
    //             type: "simple-line",
    //             color: "brown",
    //             width: "2px"
    //         }
    //     },
    //     opacity: 0.75,
    // });

    // var bikeTrailsRenderer = {
    //     type: "simple",
    //     symbol: {
    //       type: "simple-line",
    //       style: "short-dot",
    //       color: "#FF91FF",
    //       width: "1px"
    //     }
    //   };

    // var bikeTrails = new FeatureLayer({
    // url:
    //     "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
    // renderer: bikeTrailsRenderer,
    // // uses same trail layer bike bike onlyl using expression
    // definitionExpression: "USE_BIKE = 'YES'"
    // });
    
    // adds toggle UI if wanted
    // view.ui.add(basemapToggle, "top-right");

    // adds basemap gallery UI
    //view.ui.add(basemapGallery, "top-right");
    //view.ui.add(legend, "bottom-left");
    view.ui.add(scalebar, "bottom-right");

    // add trailheads and trails layers to map
    // map.add(trailheadsLayer);
    // map.add(trailsLayer,0);
    // map.add(bikeTrails,1);
  });

 