$( document ).ready(function() {
	preloader();
	hideNavbar();
	lazyLoadImg();
	scrollToDiv();
});

function socialClick(){
	$("#insta").click(function (){
		$("#instaHide").removeClass("redesHide");
		$("#insta").addClass("redesHide");
	});
	$("#face").click(function (){
		facebook();
		$("#faceHide").removeClass("redesHide");
		$("#face").addClass("redesHide");
	});
}

function hideNavbar(){
	if ($(window).width() < 1040) {
		$('.navbar-collapse a').click(function (e) {
			$('.navbar-collapse').collapse('toggle');
		});
	}
}

function lazyLoadImg() {
	$("img.lazy").lazyload({
		effect : "fadeIn"
	});
}


function preloader () {
	window.loading_screen = window.pleaseWait({
		logo: "css/images/logo_preloader.png",
		backgroundColor: '#FFFFFF',
		loadingHtml: "<div id='loader-wrapper'><div id='loader'></div></div>"

	});

	
	$(window).on("load", function() {
		window.loading_screen.finish();
		menuTop();
		popUp();
		socialClick();
	}); 

}


function menuTop(){

	if ($(window).width() < 991) {
		$( ".navbar" ).addClass( "navbar-fixed-top" );
		$( "body" ).addClass( "bodyMarginTop" );
		$(".quienesSomos").addClass("navBarMarginTop");
	}
	else {
		var stickyTop = $('.menu').offset().top;

		$(window).on( 'scroll', function(){
			if ($(window).scrollTop() >= stickyTop) {
				$( ".navbar" ).addClass( "navbar-fixed-top" );
				$( "body" ).addClass( "bodyMarginTop" );
				$(".quienesSomos").addClass("navBarMarginTop");
			} else {
				$( ".navbar" ).removeClass( "navbar-fixed-top" );
				$( "body" ).removeClass( "bodyMarginTop" );
				$(".quienesSomos").removeClass("navBarMarginTop");
			}
		});
	}
	
}


function scrollToDiv() {
	$("#quienesSomos").click(function (){
		$('html, body').animate({
			scrollTop: $("#quienesSomosClick").offset().top
		}, 800);
	});
	$("#galeria").click(function (){
		$('html, body').animate({
			scrollTop: $("#galeriaClick").offset().top
		}, 800);
	});
	$("#repertorio").click(function (){
		$('html, body').animate({
			scrollTop: $("#repertorioClick").offset().top
		}, 800);
	});
	$("#siguenos").click(function (){
		$('html, body').animate({
			scrollTop: $("#siguenosClick").offset().top
		}, 800);
	});
	$("#contacto").click(function (){
		$('html, body').animate({
			scrollTop: $("#contactoClick").offset().top
		}, 800);
	});
	$("#goToTop").click(function (){
		$('html, body').animate({
			scrollTop: $("#goToTopClick").offset().top
		}, 800);
	});
	$("#logoContra").click(function (){
		$('html, body').animate({
			scrollTop: $("#goToTopClick").offset().top
		}, 800);
	});
	$("#referencias").click(function (){
		$('html, body').animate({
			scrollTop: $("#referenciasClick").offset().top
		}, 800);
	});    
}

function facebook() {
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.6&appId=1163261920374162";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}

function popUp() {
	$('.matrimonio1').magnificPopup({
		items: [
		{
			src: 'img/galeria/01_Edipac/edipac1.jpg'
		},
		{
			src: 'img/galeria/01_Edipac/edipac2.jpg'
		},
		{
			src: 'img/galeria/01_Edipac/edipac3.jpg'
		},
		{
			src: 'img/galeria/01_Edipac/edipac4.jpg'
		},
		{
			src: 'img/galeria/01_Edipac/edipac5.jpg'
		}

		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});
	$('.matrimonio2').magnificPopup({
		items: [
		{
			src: 'img/galeria/02_hipico/hipico1.jpg'
		},
		{
			src: 'img/galeria/02_hipico/hipico2.jpg'
		},
		{
			src: 'img/galeria/02_hipico/hipico3.jpg'
		},
		{
			src: 'img/galeria/02_hipico/hipico4.jpg'
		},
		{
			src: 'img/galeria/02_hipico/hipico5.jpg'
		}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});
	$('.matrimonio3').magnificPopup({
		items: [
		{
			src: 'img/galeria/03_ignaciaClaudio/ignaciaClaudio1.jpg'
		},
		{
			src: 'img/galeria/03_ignaciaClaudio/ignaciaClaudio2.jpg'
		},
		{
			src: 'img/galeria/03_ignaciaClaudio/ignaciaClaudio3.jpg'
		},
		{
			src: 'img/galeria/03_ignaciaClaudio/ignaciaClaudio4.jpg'
		},
		{
			src: 'img/galeria/03_ignaciaClaudio/ignaciaClaudio5.jpg'
		}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});
	$('.matrimonio4').magnificPopup({
		items: [
		{
			src: 'img/galeria/04_paulinaRodrigo/paulinarodrigo1.jpg'
		},
		{
			src: 'img/galeria/04_paulinaRodrigo/paulinarodrigo2.jpg'
		},
		{
			src: 'img/galeria/04_paulinaRodrigo/paulinarodrigo3.jpg'
		},
		{
			src: 'img/galeria/04_paulinaRodrigo/paulinarodrigo4.jpg'
		},
		{
			src: 'img/galeria/04_paulinaRodrigo/paulinarodrigo5.jpg'
		}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});
	$('.matrimonio5').magnificPopup({
		items: [
		{
			src: 'img/galeria/05_carolinaCristian/carolinacristian1.jpg'
		},
		{
			src: 'img/galeria/05_carolinaCristian/carolinacristian2.jpg'
		},
		{
			src: 'img/galeria/05_carolinaCristian/carolinacristian3.jpg'
		},
		{
			src: 'img/galeria/05_carolinaCristian/carolinacristian4.jpg'
		},
		{
			src: 'img/galeria/05_carolinaCristian/carolinacristian5.jpg'
		},
		{
			src: 'img/galeria/05_carolinaCristian/carolinacristian6.jpg'
		}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});
	$('.matrimonio6').magnificPopup({
		items: [
		{
			src: 'img/galeria/06_loretoManuel/loretomanuel1.jpg'
		},
		{
			src: 'img/galeria/06_loretoManuel/loretomanuel2.jpg'
		},
		{
			src: 'img/galeria/06_loretoManuel/loretomanuel3.jpg'
		},
		{
			src: 'img/galeria/06_loretoManuel/loretomanuel4.jpg'
		},
		{
			src: 'img/galeria/06_loretoManuel/loretomanuel5.jpg'
		}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});
}