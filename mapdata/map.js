var Main;

// Assuming you're using a bundler or ES module-compatible environment

import Map from "https://js.arcgis.com/4.33/@arcgis/core/Map.js";
import Graphic from "https://js.arcgis.com/4.33/@arcgis/core/Graphic.js";
import GraphicsLayer from "https://js.arcgis.com/4.33/@arcgis/core/layers/GraphicsLayer.js";
import ElevationLayer from "https://js.arcgis.com/4.33/@arcgis/core/layers/ElevationLayer.js";
import SceneView from "https://js.arcgis.com/4.33/@arcgis/core/views/SceneView.js";

Main = (function() {
    const layer = new ElevationLayer({
        url: "http://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
    });

    const cityLookup = {
        "alabama": [-86.3, 32.3668],
        "montgomery": [-86.3, 32.3668],
        "alaska": [-134.4197, 58.3019],
        "juneau": [-134.4197, 58.3019],
        "arizona": [-112.0738, 33.4484],
        "phoenix": [-112.0738, 33.4484],
        "arkansas": [-92.2896, 34.7465],
        "little rock": [-92.2896, 34.7465],
        "california": [-121.4944, 38.5816],
        "sacramento": [-121.4944, 38.5816],
        "colorado": [-104.9903, 39.7392],
        "denver": [-104.9903, 39.7392],
        "connecticut": [-72.6851, 41.7658],
        "hartford": [-72.6851, 41.7658],
        "delaware": [-75.5244, 39.1582],
        "dover": [-75.5244, 39.1582],
        "florida": [-84.2807, 30.4383],
        "tallahassee": [-84.2807, 30.4383],
        "georgia": [-84.388, 33.749],
        "atlanta": [-84.388, 33.749],
        "hawaii": [-157.8583, 21.3069],
        "honolulu": [-157.8583, 21.3069],
        "idaho": [-116.2023, 43.615],
        "boise": [-116.2023, 43.615],
        "illinois": [-89.65, 39.7817],
        "springfield": [-89.65, 39.7817],
        "indiana": [-86.1581, 39.7684],
        "indianapolis": [-86.1581, 39.7684],
        "iowa": [-93.6091, 41.5868],
        "des moines": [-93.6091, 41.5868],
        "kansas": [-95.689, 39.0558],
        "topeka": [-95.689, 39.0558],
        "kentucky": [-84.8733, 38.2009],
        "frankfort": [-84.8733, 38.2009],
        "louisiana": [-91.1403, 30.4515],
        "baton rouge": [-91.1403, 30.4515],
        "maine": [-69.7653, 44.3106],
        "augusta": [-69.7653, 44.3106],
        "maryland": [-76.4922, 38.9784],
        "annapolis": [-76.4922, 38.9784],
        "massachusetts": [-71.0589, 42.3601],
        "boston": [-71.0589, 42.3601],
        "michigan": [-84.5555, 42.7325],
        "lansing": [-84.5555, 42.7325],
        "minnesota": [-93.0899, 44.9537],
        "saint paul": [-93.0899, 44.9537],
        "mississippi": [-90.1848, 32.2988],
        "jackson": [-90.1848, 32.2988],
        "missouri": [-92.1735, 38.5767],
        "jefferson city": [-92.1735, 38.5767],
        "montana": [-112.027, 46.5891],
        "helena": [-112.027, 46.5891],
        "nebraska": [-96.6753, 40.8136],
        "lincoln": [-96.6753, 40.8136],
        "nevada": [-119.7674, 39.1638],
        "carson city": [-119.7674, 39.1638],
        "new hampshire": [-71.5376, 43.2081],
        "concord": [-71.5376, 43.2081],
        "new jersey": [-74.767, 40.2206],
        "trenton": [-74.767, 40.2206],
        "new mexico": [-105.9378, 35.687],
        "santa fe": [-105.9378, 35.687],
        "new york": [-73.7562, 42.6526],
        "albany": [-73.7562, 42.6526],
        "north carolina": [-78.6382, 35.7796],
        "raleigh": [-78.6382, 35.7796],
        "north dakota": [-100.7837, 46.8083],
        "bismarck": [-100.7837, 46.8083],
        "ohio": [-82.9988, 39.9612],
        "columbus": [-82.9988, 39.9612],
        "oklahoma": [-97.5164, 35.4676],
        "oklahoma city": [-97.5164, 35.4676],
        "oregon": [-123.0351, 44.9429],
        "salem": [-123.0351, 44.9429],
        "pennsylvania": [-76.8867, 40.2732],
        "harrisburg": [-76.8867, 40.2732],
        "rhode island": [-71.4128, 41.824],
        "providence": [-71.4128, 41.824],
        "south carolina": [-81.0348, 34.0007],
        "columbia": [-81.0348, 34.0007],
        "south dakota": [-100.3509, 44.3683],
        "pierre": [-100.3509, 44.3683],
        "tennessee": [-86.7816, 36.1627],
        "nashville": [-86.7816, 36.1627],
        "texas": [-97.7431, 30.2672],
        "austin": [-97.7431, 30.2672],
        "utah": [-111.891, 40.7608],
        "salt lake city": [-111.891, 40.7608],
        "vermont": [-72.576, 44.2601],
        "montpelier": [-72.576, 44.2601],
        "virginia": [-77.436, 37.5407],
        "richmond": [-77.436, 37.5407],
        "washington": [-122.9007, 47.0379],
        "olympia": [-122.9007, 47.0379],
        "west virginia": [-81.6326, 38.3498],
        "charleston": [-81.6326, 38.3498],
        "wisconsin": [-89.4012, 43.0731],
        "madison": [-89.4012, 43.0731],
        "wyoming": [-104.8202, 41.1403],
        "cheyenne": [-104.8202, 41.1403]
    };


    const map = new Map({
        basemap: "hybrid",
        ground: {
            layers: [layer]
         },
    });
    
    const view = new SceneView({
        container: "map",
        viewingMode: "global",
        map: map,
        camera: {
            position: {
                x: -105.503,
                y: 44.270,
                z: 20000000,
                spatialReference: {
                    wkid: 4326
    
                }
            },
            heading: 0,
            tilt: 0
        },
        popup: {
            dockEnabled: false,
            dockOptions: {
                breakpoint: false
            }
        },
        // enable shadows to be cast from the features
        environment: {
            lighting: {
                directShadowsEnabled: false
            }
        }


    });


    view.when(() => {
        view.on("click", (event) => {
            const mapPoint = event.mapPoint;
            if (!mapPoint) return;

            view.goTo({
                target: mapPoint,
                scale: 500000
            }, {
                duration: 800
            });
        });
    });

    document.getElementById("searchBtn").addEventListener("click", function () {
        const inputField = document.getElementById("citySearch");
        const input = inputField.value.trim().toLowerCase();

        console.log("Searching for:", input);

        if (input in cityLookup) {
            const [x, y] = cityLookup[input];

        console.log("Zooming to:", x, y);

        view.goTo({
            position: {
                x: x,
                y: y,
                z: 250000, 
                spatialReference: { wkid: 4326 }
            },
            heading: 0,
            tilt: 0
        }, {
            duration: 1000
        });


        } else {
            alert("City not found. Please try again.");
        }
    });
                
    const initMap = function(){
                          
        const graphicsLayer = new GraphicsLayer();               
        map.add(graphicsLayer);

        for (const [key, value] of Object.entries(myStuff)){                       
            console.log(key, value)
                        
            const point = {                        
                type: "point",                             
                x: value.coord[0],                        
                y: value.coord[1],                            
                z: 10000                          
            };
                                
            const markerSymbol = {                            
                type: "simple-marker",                             
                color: [255, 255, 0],                            
                outline: {
                              
                    // autocasts as new SimpleLineSymbol()                              
                    color: [0, 0, 0],                             
                    width: 2
                            
                }
                          
            };
                                                
            const pointGraphic = new Graphic({                            
                geometry: point,                            
                symbol: markerSymbol,                            
                popupTemplate: {                                
                    title: value.city + ", " + value.state + " is the location of my " + key                           
                }                  
            });
                          
            graphicsLayer.add(pointGraphic);
                    
                    
        }
                                    
    }

                
    initMap()
                
    return {};

            
})();



    
