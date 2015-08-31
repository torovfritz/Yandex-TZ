    DG.then(function () {
        var map,
            marker1,
            geoMarker,
            group,
            myDivIcon1,
            geoLocation;
        
        map = DG.map('map', {
            center: [55.735517, 37.594296],
            zoom: 16,
            dragging : false,
            touchZoom: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            geoclicker: false,
            zoomControl: false,
            fullscreenControl: false
        });
        
        myDivIcon1 = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 40px; height: 40px; border: 2px solid white; border-radius: 50%; background: #2895f1; font-size: 14px; color: white; text-align: center; line-height: 37px;">1</div>'
                });
        geoLocation = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 15px; height: 15px; box-shadow: 0 0 0 10px rgba(255,255,255,.7); border-radius: 50%; background: #2895f1; font-size: 11px; color: white; text-align: center; line-height: 20px;"></div>'
                });
        
        marker1 = DG.marker([55.735648, 37.592504], {
                    icon: myDivIcon1
                }).addTo(map);
        geoMarker = DG.marker([55.735517, 37.594296], {
                    icon: geoLocation
                }).addTo(map);

        group = DG.featureGroup([marker1, geoMarker]);
        group.addTo(map);
        group.on('click', function(e) {
            map.setView([e.latlng.lat, e.latlng.lng]);
        });
    });
    