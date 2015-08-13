/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#header').singlePageNav({
	easing: 'easeInOutExpo',
	speed: 1250,
	offset: 50,
	currentClass: 'active',
});
$('#slideshow').singlePageNav({
	easing: 'easeInOutExpo',
	speed: 1250,
	offset: 50,
	currentClass: 'active',
});


/**
* OwlCarousel
* http://owlgraphic.com/owlcarousel/
*/
$(function() {
	$(".slideshow .owl-carousel").owlCarousel({
		navigation : false,
		navigationText: true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		autoPlay: 4000,
		stopOnHover: true,
	});
});


/**
* navbar collapse on scroll
*/
$(window).scroll(function() {
	if ($("#header").offset().top > 60) {
		$("header").addClass("header-collapse");
	} else {
		$("header").removeClass("header-collapse");
	}
});


/**
* map
*/
var bittersMap = (function () {
	var myLatlng = new google.maps.LatLng(50.429682, 30.398411),
		mapCenter = new google.maps.LatLng(50.429682, 30.398411),
		mapCanvas = document.getElementById('map'),
		mapOptions = {
			center: mapCenter,
			zoom: 17,
			scrollwheel: false,
			draggable: true,
			disableDefaultUI: true,
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			scaleControl: true,
			streetViewControl: true,
			overviewMapControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},
		map = new google.maps.Map(mapCanvas, mapOptions),
		contentString =
			'<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading">NovaSvit</h1>'+
			'<div id="bodyContent">'+
			'<p>г.Киев, ул.Семьи Сосниных, 3</p>'+
			'</div>'+
			'</div>',
		infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 300
		}),
		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'NovaSvit (Ukraine)'
		});

	return {
		init: function () {
			map.set('styles', [{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{ hue: '#ffff00' },
					{ saturation: 30 },
					{ lightness: 10}
				]}
			]);

			google.maps.event.addListener(marker, 'click', function () {
				infowindow.open(map,marker);
			});
		}
	};
}());

bittersMap.init();


/**
* mob-menu
*/
$(document).ready(function() {
	$(".mob-menu").click(function() {
		$('header nav').toggleClass('displaynone');
	});
	$("header nav a").click(function() {
		$('header nav').toggleClass('displaynone');
	});
});


