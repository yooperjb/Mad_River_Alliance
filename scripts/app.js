
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

    const view = new MapView({
        container: "viewDiv",
        map: webmap,
    });
    console.log("View: ",view);
    
    // Create LayerList widget - set container to div element
    const layerList = new LayerList({
        view: view,
        container: document.createElement("div"),
    });
        
    console.log("layerList: ",layerList);

    // create expand instance
    const layerListExpand = new Expand({
        expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
        // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
        view: view,
        content: layerList
    });
    view.ui.add(layerListExpand, "top-right");
    
    
    const scalebar = new ScaleBar({
        view: view
    });
    
    view.ui.add(scalebar, "bottom-right");
    
  });

 