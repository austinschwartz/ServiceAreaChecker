var coords;
var serviceArea;
var mapOptions;
var map;
function initialize() {
	coords = [
		new google.maps.LatLng(39.736500,-86.187813),
		new google.maps.LatLng(39.736053,-86.191025),
		new google.maps.LatLng(39.735657,-86.192337),
		new google.maps.LatLng(39.735329,-86.193771),
		new google.maps.LatLng(39.735275,-86.195061),
		new google.maps.LatLng(39.735394,-86.196327),
		new google.maps.LatLng(39.735474,-86.197746),
		new google.maps.LatLng(39.735493,-86.198578),
		new google.maps.LatLng(39.735622,-86.199226),
		new google.maps.LatLng(39.735935,-86.200531),
		new google.maps.LatLng(39.736134,-86.201180),
		new google.maps.LatLng(39.736202,-86.201843),
		new google.maps.LatLng(39.736202,-86.203362),
		new google.maps.LatLng(39.736153,-86.204140),
		new google.maps.LatLng(39.736118,-86.204521),
		new google.maps.LatLng(39.736134,-86.205101),
		new google.maps.LatLng(39.736004,-86.207054),
		new google.maps.LatLng(39.735954,-86.207809),
		new google.maps.LatLng(39.735954,-86.208405),
		new google.maps.LatLng(39.735935,-86.209564),
		new google.maps.LatLng(39.735954,-86.211113),
		new google.maps.LatLng(39.735935,-86.211929),
		new google.maps.LatLng(39.735855,-86.212807),
		new google.maps.LatLng(39.735592,-86.213791),
		new google.maps.LatLng(39.735344,-86.214714),
		new google.maps.LatLng(39.735229,-86.215210),
		new google.maps.LatLng(39.734932,-86.216217),
		new google.maps.LatLng(39.734650,-86.217209),
		new google.maps.LatLng(39.734352,-86.218597),
		new google.maps.LatLng(39.734074,-86.221367),
		new google.maps.LatLng(39.733891,-86.225121),
		new google.maps.LatLng(39.734516,-86.225105),
		new google.maps.LatLng(39.743050,-86.225121),
		new google.maps.LatLng(39.747356,-86.225121),
		new google.maps.LatLng(39.751480,-86.225082),
		new google.maps.LatLng(39.751610,-86.225067),
		new google.maps.LatLng(39.751659,-86.225067),
		new google.maps.LatLng(39.751743,-86.225067),
		new google.maps.LatLng(39.751766,-86.225067),
		new google.maps.LatLng(39.751827,-86.225060),
		new google.maps.LatLng(39.751884,-86.225044),
		new google.maps.LatLng(39.751900,-86.225060),
		new google.maps.LatLng(39.752106,-86.225105),
		new google.maps.LatLng(39.752277,-86.225105),
		new google.maps.LatLng(39.752537,-86.225090),
		new google.maps.LatLng(39.752666,-86.225105),
		new google.maps.LatLng(39.752831,-86.225113),
		new google.maps.LatLng(39.752972,-86.225113),
		new google.maps.LatLng(39.753063,-86.225113),
		new google.maps.LatLng(39.753120,-86.225105),
		new google.maps.LatLng(39.753197,-86.225082),
		new google.maps.LatLng(39.753120,-86.225090),
		new google.maps.LatLng(39.753078,-86.225113),
		new google.maps.LatLng(39.753036,-86.225121),
		new google.maps.LatLng(39.753155,-86.225113),
		new google.maps.LatLng(39.753212,-86.225105),
		new google.maps.LatLng(39.753254,-86.225105),
		new google.maps.LatLng(39.753262,-86.225082),
		new google.maps.LatLng(39.753277,-86.225090),
		new google.maps.LatLng(39.753345,-86.225105),
		new google.maps.LatLng(39.753376,-86.225090),
		new google.maps.LatLng(39.753418,-86.225105),
		new google.maps.LatLng(39.753296,-86.225082),
		new google.maps.LatLng(39.753345,-86.225090),
		new google.maps.LatLng(39.753391,-86.225067),
		new google.maps.LatLng(39.753418,-86.225105),
		new google.maps.LatLng(39.753452,-86.225090),
		new google.maps.LatLng(39.753502,-86.225090),
		new google.maps.LatLng(39.753887,-86.225105),
		new google.maps.LatLng(39.753574,-86.225105),
		new google.maps.LatLng(39.753723,-86.225105),
		new google.maps.LatLng(39.753880,-86.225105),
		new google.maps.LatLng(39.753986,-86.225090),
		new google.maps.LatLng(39.754120,-86.225105),
		new google.maps.LatLng(39.754150,-86.225113),
		new google.maps.LatLng(39.754177,-86.225113),
		new google.maps.LatLng(39.754200,-86.225113),
		new google.maps.LatLng(39.754219,-86.225113),
		new google.maps.LatLng(39.754211,-86.225113),
		new google.maps.LatLng(39.754227,-86.225113),
		new google.maps.LatLng(39.754250,-86.225113),
		new google.maps.LatLng(39.754269,-86.225113),
		new google.maps.LatLng(39.754269,-86.225105),
		new google.maps.LatLng(39.754276,-86.225113),
		new google.maps.LatLng(39.754284,-86.225090),
		new google.maps.LatLng(39.754349,-86.225090),
		new google.maps.LatLng(39.754398,-86.225090),
		new google.maps.LatLng(39.754433,-86.225082),
		new google.maps.LatLng(39.754532,-86.225082),
		new google.maps.LatLng(39.754581,-86.225082),
		new google.maps.LatLng(39.754616,-86.225082),
		new google.maps.LatLng(39.754753,-86.225082),
		new google.maps.LatLng(39.754902,-86.225090),
		new google.maps.LatLng(39.755066,-86.225090),
		new google.maps.LatLng(39.755192,-86.225105),
		new google.maps.LatLng(39.755421,-86.225105),
		new google.maps.LatLng(39.755653,-86.225113),
		new google.maps.LatLng(39.756100,-86.225082),
		new google.maps.LatLng(39.756329,-86.225082),
		new google.maps.LatLng(39.756569,-86.225090),
		new google.maps.LatLng(39.757484,-86.225037),
		new google.maps.LatLng(39.757946,-86.225014),
		new google.maps.LatLng(39.758408,-86.225082),
		new google.maps.LatLng(39.759365,-86.225037),
		new google.maps.LatLng(39.759892,-86.225037),
		new google.maps.LatLng(39.760204,-86.224998),
		new google.maps.LatLng(39.760502,-86.224953),
		new google.maps.LatLng(39.761345,-86.222160),
		new google.maps.LatLng(39.761806,-86.220810),
		new google.maps.LatLng(39.762218,-86.220169),
		new google.maps.LatLng(39.762417,-86.219780),
		new google.maps.LatLng(39.762417,-86.219460),
		new google.maps.LatLng(39.762432,-86.219353),
		new google.maps.LatLng(39.762383,-86.219269),
		new google.maps.LatLng(39.762432,-86.219200),
		new google.maps.LatLng(39.762417,-86.219139),
		new google.maps.LatLng(39.762417,-86.219070),
		new google.maps.LatLng(39.762432,-86.218834),
		new google.maps.LatLng(39.762447,-86.218475),
		new google.maps.LatLng(39.762516,-86.217957),
		new google.maps.LatLng(39.762516,-86.217567),
		new google.maps.LatLng(39.762547,-86.216667),
		new google.maps.LatLng(39.762596,-86.215637),
		new google.maps.LatLng(39.762745,-86.213211),
		new google.maps.LatLng(39.762844,-86.211624),
		new google.maps.LatLng(39.762913,-86.210617),
		new google.maps.LatLng(39.762943,-86.210190),
		new google.maps.LatLng(39.763042,-86.208969),
		new google.maps.LatLng(39.763191,-86.205467),
		new google.maps.LatLng(39.763256,-86.203728),
		new google.maps.LatLng(39.763325,-86.202873),
		new google.maps.LatLng(39.763374,-86.201950),
		new google.maps.LatLng(39.763916,-86.191116),
		new google.maps.LatLng(39.764164,-86.186905),
		new google.maps.LatLng(39.764297,-86.183647),
		new google.maps.LatLng(39.764412,-86.181969),
		new google.maps.LatLng(39.764446,-86.181175),
		new google.maps.LatLng(39.764477,-86.180382),
		new google.maps.LatLng(39.764397,-86.178665),
		new google.maps.LatLng(39.764179,-86.176949),
		new google.maps.LatLng(39.764000,-86.175407),
		new google.maps.LatLng(39.763885,-86.174507),
		new google.maps.LatLng(39.763851,-86.174095),
		new google.maps.LatLng(39.763836,-86.173904),
		new google.maps.LatLng(39.763687,-86.173775),
		new google.maps.LatLng(39.763519,-86.173950),
		new google.maps.LatLng(39.762959,-86.174332),
		new google.maps.LatLng(39.762547,-86.174545),
		new google.maps.LatLng(39.762104,-86.174568),
		new google.maps.LatLng(39.761841,-86.174568),
		new google.maps.LatLng(39.761593,-86.174545),
		new google.maps.LatLng(39.761330,-86.174637),
		new google.maps.LatLng(39.761032,-86.174675),
		new google.maps.LatLng(39.760635,-86.174652),
		new google.maps.LatLng(39.760204,-86.174675),
		new google.maps.LatLng(39.759792,-86.174637),
		new google.maps.LatLng(39.759430,-86.174652),
		new google.maps.LatLng(39.759068,-86.174614),
		new google.maps.LatLng(39.758770,-86.174438),
		new google.maps.LatLng(39.758026,-86.174438),
		new google.maps.LatLng(39.757584,-86.174416),
		new google.maps.LatLng(39.757271,-86.174400),
		new google.maps.LatLng(39.756874,-86.174294),
		new google.maps.LatLng(39.756577,-86.174271),
		new google.maps.LatLng(39.755901,-86.174072),
		new google.maps.LatLng(39.755505,-86.174011),
		new google.maps.LatLng(39.754959,-86.174141),
		new google.maps.LatLng(39.754696,-86.174141),
		new google.maps.LatLng(39.754517,-86.174141),
		new google.maps.LatLng(39.754349,-86.174202),
		new google.maps.LatLng(39.754101,-86.174294),
		new google.maps.LatLng(39.753922,-86.174416),
		new google.maps.LatLng(39.753723,-86.174568),
		new google.maps.LatLng(39.753277,-86.174591),
		new google.maps.LatLng(39.752899,-86.174744),
		new google.maps.LatLng(39.752468,-86.174805),
		new google.maps.LatLng(39.751759,-86.174980),
		new google.maps.LatLng(39.750999,-86.174873),
		new google.maps.LatLng(39.749878,-86.174416),
		new google.maps.LatLng(39.749237,-86.174187),
		new google.maps.LatLng(39.748642,-86.173950),
		new google.maps.LatLng(39.747322,-86.173347),
		new google.maps.LatLng(39.745689,-86.172165),
		new google.maps.LatLng(39.744846,-86.171585),
		new google.maps.LatLng(39.744038,-86.170944),
		new google.maps.LatLng(39.743362,-86.170555),
		new google.maps.LatLng(39.743065,-86.170319),
		new google.maps.LatLng(39.742802,-86.170189),
		new google.maps.LatLng(39.742519,-86.170059),
		new google.maps.LatLng(39.741730,-86.169891),
		new google.maps.LatLng(39.740623,-86.170082),
		new google.maps.LatLng(39.740112,-86.170174),
		new google.maps.LatLng(39.739567,-86.170319),
		new google.maps.LatLng(39.739334,-86.170258),
		new google.maps.LatLng(39.739239,-86.170021),
		new google.maps.LatLng(39.738674,-86.170189),
		new google.maps.LatLng(39.738510,-86.170189),
		new google.maps.LatLng(39.738361,-86.170387),
		new google.maps.LatLng(39.738281,-86.170578),
		new google.maps.LatLng(39.737949,-86.170639),
		new google.maps.LatLng(39.737770,-86.170731),
		new google.maps.LatLng(39.737572,-86.170792),
		new google.maps.LatLng(39.737408,-86.170860),
		new google.maps.LatLng(39.737225,-86.170944),
		new google.maps.LatLng(39.737225,-86.171738),
		new google.maps.LatLng(39.737209,-86.172424),
		new google.maps.LatLng(39.737225,-86.173325),
		new google.maps.LatLng(39.737091,-86.174355),
		new google.maps.LatLng(39.736992,-86.175430),
		new google.maps.LatLng(39.736961,-86.176155),
		new google.maps.LatLng(39.736927,-86.177956),
		new google.maps.LatLng(39.736893,-86.180344),
		new google.maps.LatLng(39.736813,-86.182724),
		new google.maps.LatLng(39.736813,-86.183861),
		new google.maps.LatLng(39.736763,-86.184418),
		new google.maps.LatLng(39.736794,-86.185059),
		new google.maps.LatLng(39.736500,-86.187813)
	];
	serviceArea = new google.maps.Polygon({
		paths: coords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	mapOptions = {
	  center: new google.maps.LatLng(39.751071,-86.195116),
	  zoom: 13,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    geocoder = new google.maps.Geocoder();
	infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	serviceArea.setMap(map);
}
function mark(llat, llong, addr) {
	var center = new google.maps.LatLng(llat, llong);
	var contained = google.maps.geometry.poly.containsLocation(center, serviceArea);
	if (contained)
	{
		$('div#results').removeClass('red').addClass('green').text('Eligible');
	}
	else
	{
		$('div#results').removeClass('green').addClass('red').text('Not Eligible');
	}
	/*var marker = new google.maps.Marker({    
		  position: center,    
		  map: map,
		  title: addr
		});  
	*/
	//map.panTo(center);
	geocoder.geocode({'address': addr}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0]) {
				map.setZoom(13);
				marker = new google.maps.Marker({
					position: center,
					map: map,
					title: results[0].formatted_address
				});
				map.panTo(center);
				infowindow.setContent(results[0].formatted_address);
				//infowindow.setContent(addr);
				infowindow.open(map, marker);
			}
		} else {
			alert("Geocoder failed due to: " + status);
		}
	});
}
function postAddr(addr) {
	$.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(addr) + "&sensor=false", function(data) {
		xlat = data['results'][0].geometry.location.lat;
		xlong = data['results'][0].geometry.location.lng;
		$('span#debug').text('Address: ' + xlat + '    ' + xlong);
		mark(xlat, xlong, addr);
	});
	
}
function check() {
	var name_element = document.getElementById('address');
}