
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/Expand",
      "esri/widgets/LayerList",
      "esri/widgets/ScaleBar"
    ], 
  
function (WebMap, MapView, Expand,LayerList, ScaleBar) {
    
    const webmap = new WebMap({
        portalItem: {
            id: "2559b1d4178444a7beb08f9ddb27ec01"
        }
    });
    
    // created mapview
    const view = new MapView({
        container: "viewDiv",
        map: webmap,
    });

    // set view zoom level
    view.zoom = 9;
    
    // Create LayerList widget - set container to div element
    const layerList = new LayerList({
        view: view,
        container: document.createElement("div"),
    });
        
    // create expand instance
    const layerListExpand = new Expand({
        // icon used for the expand
        expandIconClass: "esri-icon-layer-list",
        view: view,
        content: layerList
    });
    
    const scalebar = new ScaleBar({
        view: view
    });
    
    // add UI elements
    view.ui.add(scalebar, "bottom-left");
    view.ui.add(layerListExpand, "top-right");
    //view.ui.add("logoDiv", "bottom-right");
  });

 