    DG.then(function () {
        var map,
            marker1,
            marker2,
            marker3,
            marker4,
            marker5,
            marker6,
            geoMarker,
            group,
            myDivIcon1,
            myDivIcon2,
            myDivIcon3,
            myDivIcon4,
            myDivIcon5,
            myDivIcon6,
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
        myDivIcon2 = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 40px; height: 40px; border: 2px solid white; border-radius: 50%; background: #2895f1; font-size: 14px; color: white; text-align: center; line-height: 37px;">2</div>'
                });
        myDivIcon3 = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 40px; height: 40px; border: 2px solid white; border-radius: 50%; background: #2895f1; font-size: 14px; color: white; text-align: center; line-height: 37px;">3</div>'
                });
        myDivIcon4 = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 40px; height: 40px; border: 2px solid white; border-radius: 50%; background: #2895f1; font-size: 14px; color: white; text-align: center; line-height: 37px;">4</div>'
                });
        myDivIcon5 = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 40px; height: 40px; border: 2px solid white; border-radius: 50%; background: #2895f1; font-size: 14px; color: white; text-align: center; line-height: 37px;">5</div>'
                });
        myDivIcon6 = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 40px; height: 40px; border: 2px solid white; border-radius: 50%; background: #2895f1; font-size: 14px; color: white; text-align: center; line-height: 37px;">6</div>'
                });
        geoLocation = DG.divIcon({
                    iconSize: [0, 0],
                    html: '<div style="width: 15px; height: 15px; box-shadow: 0 0 0 10px rgba(255,255,255,.7); border-radius: 50%; background: #2895f1; font-size: 11px; color: white; text-align: center; line-height: 20px;"></div>'
                });
        
        marker1 = DG.marker([55.735648, 37.592504], {
                    icon: myDivIcon1
                }).addTo(map);
        marker2 = DG.marker([55.736108, 37.595506], {
                    icon: myDivIcon2
                }).addTo(map);
        marker3 = DG.marker([55.734881, 37.594315], {
                    icon: myDivIcon3
                }).addTo(map);
        marker4 = DG.marker([55.734948, 37.593467], {
                    icon: myDivIcon4
                }).addTo(map);
        marker5 = DG.marker([55.735443, 37.592362], {
                    icon: myDivIcon5
                }).addTo(map);
        marker6 = DG.marker([55.736343, 37.590989], {
                    icon: myDivIcon6
                }).addTo(map);
        geoMarker = DG.marker([55.735517, 37.594296], {
                    icon: geoLocation
                }).addTo(map);

        group = DG.featureGroup([marker1, marker2, marker3, marker4, marker5, marker6, geoMarker]);
        group.addTo(map);
        group.on('click', function(e) {
            map.setView([e.latlng.lat, e.latlng.lng]);
        });
    });
    