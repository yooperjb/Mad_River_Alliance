
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/LayerList",
      "esri/widgets/ScaleBar"
    ], 
  
function (WebMap, MapView, LayerList, ScaleBar) {
    
    const webmap = new WebMap({
        portalItem: {
            id: "2559b1d4178444a7beb08f9ddb27ec01"
        }
    });

    const view = new MapView({
        container: "viewDiv",
        map: webmap,
    });

    // Show LayerList
    view.when(function () {
        var layerList = new LayerList({
          view: view
        });

        view.ui.add(layerList, "top-right");
    });
    
    const scalebar = new ScaleBar({
        view: view
    });
    
    view.ui.add(scalebar, "bottom-right");
    
  });

 