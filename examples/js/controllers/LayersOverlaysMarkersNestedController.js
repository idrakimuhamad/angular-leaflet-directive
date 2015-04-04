<<<<<<< HEAD:examples/js/controllers/LayersOverlaysMarkersNestedController.js
        app.controller('LayersOverlaysMarkersNestedController', ['$scope', 'leafletData','$timeout',
=======
<!DOCTYPE html>
<html ng-app="demoapp">
<head>
    <script src="../bower_components/angular/angular.min.js"></script>
    <script src="../bower_components/leaflet/dist/leaflet-src.js"></script>
    <script src="../dist/angular-leaflet-directive_dev_mapped.js"></script>
    <link rel="stylesheet" href="../bower_components/leaflet/dist/leaflet.css"/>
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        var app = angular.module("demoapp", ["leaflet-directive"]);
        app.controller('OverlaysController', ['$scope', 'leafletData','$timeout',
>>>>>>> ability to disable watches in markers 100%:examples/overlays-markers-nested-example.html
        function ($scope, leafletData, $timeout) {
            var _map;
            leafletData.getMap().then(function(map){
                _map = map;
            });
            angular.extend($scope, {
                eraseMarkers: function(){
                    $scope.markers = {
                        cars: {
                            m1: {
                                lat: 42.20133,
                                lng: 2.19110,
                                message: "I'm a car"
                            }
                        }
                    };
                    //$scope.$apply();
                    leafletData.getMarkers().then(function(lmarkers) {
                        $scope.hasM1 = _map.hasLayer(lmarkers.m1);
                        $scope.hasM2 = _map.hasLayer(lmarkers.m2);
                    });
                    $timeout(function(){
                        leafletData.getMarkers().then(function(lmarkers){
                            $scope.lMarkers = Object.keys(lmarkers);
                            $scope.hasM1 = _map.hasLayer(lmarkers.m1);
                            $scope.hasM2 = _map.hasLayer(lmarkers.m2);
                        });
                    },1000);
                },
                lMarkers:{},
                ripoll: {
                    lat: 42.20133,
                    lng: 2.19110,
                    zoom: 11
                },
                layers: {
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            type: 'xyz',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            layerOptions: {
                                subdomains: ['a', 'b', 'c'],
                                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                continuousWorld: true
                            }
                        },
                        cycle: {
                            name: 'OpenCycleMap',
                            type: 'xyz',
                            url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
                            layerOptions: {
                                subdomains: ['a', 'b', 'c'],
                                attribution: '&copy; <a href="http://www.opencyclemap.org/copyright">OpenCycleMap</a> contributors - &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                continuousWorld: true
                            }
                        }
                    },
                    overlays: {
                        hillshade: {
                            name: 'Hillshade Europa',
                            type: 'wms',
                            url: 'http://129.206.228.72/cached/hillshade',
                            visible: true,
                            layerOptions: {
                                layers: 'europe_wms:hs_srtm_europa',
                                format: 'image/png',
                                opacity: 0.25,
                                attribution: 'Hillshade layer by GIScience http://www.osm-wms.de',
                                crs: L.CRS.EPSG900913
                            }
                        },
                        fire: {
                            name: 'OpenFireMap',
                            type: 'xyz',
                            url: 'http://openfiremap.org/hytiles/{z}/{x}/{y}.png',
                            layerOptions: {
                                attribution: '&copy; <a href="http://www.openfiremap.org">OpenFireMap</a> contributors - &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                continuousWorld: true
                            }
                        },
                        cars: {
                            name: 'Cars',
                            type: 'group',
                            visible: true
                        },
                        bikes: {
                            name: 'Bicycles',
                            type: 'group',
                            visible: false
                        },
                        runners:{
                            name: 'Runners',
                            type: 'group',
                            visible: false
                        }
                    }
                },
                markers: {
                    cars: {
                        m1: {
                            lat: 42.20133,
                            lng: 2.19110,
                            message: "I'm a car"
                        },
                        m2: {
                            lat: 42.21133,
                            lng: 2.18110,
                            message: "I'm a car"
                        }
                    },
                    bikes: {
                        m3: {
                            lat: 42.19133,
                            lng: 2.18110,
                            layer: 'bikes',
                            message: 'A bike!!'
                        },
                        m4: {
                            lat: 42.3,
                            lng: 2.16110,
                            layer: 'bikes'
                        }
                    },
                    runners: {
                        m5: {
                            lat: 42.1,
                            lng: 2.16910
                        },
                        m6: {
                            lat: 42.15,
                            lng: 2.17110
                        }
                    }
                }
            });
<<<<<<< HEAD:examples/js/controllers/LayersOverlaysMarkersNestedController.js
        }]);
=======
        }]);

    </script>
</head>
<body>
<div class="container" ng-controller="OverlaysController">
    <button ng-click="eraseMarkers()">erase markers</button>
            <leaflet center="ripoll"
                     markers="markers"
                     layers="layers"
                     markers-nested="true"
                     height="480px"
                     width="640px">

            </leaflet>
    <div>{{lMarkers}}</div>
    <div>m1: {{hasM1}}</div>
    <div>m2: {{hasM2}}</div>
</div>
</div>
</body>
</html>
>>>>>>> ability to disable watches in markers 100%:examples/overlays-markers-nested-example.html
