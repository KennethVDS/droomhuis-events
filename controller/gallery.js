"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		return false;
	});

	$( window ).load(function() {
	  $("#menu-container .products").hide();
	});

	$(".main_menu a.home").addClass('active');

	$(".main_menu a.home, .responsive_menu a.home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		return false;
	});

	$(".main_menu a.page2, .responsive_menu a.page2").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$('#content').html('whatever');
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		return false;
	});

	$(".main_menu a.page3, .responsive_menu a.page3").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		return false;
	});

	$(".main_menu a.page4, .responsive_menu a.page4").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		return false;
	});

	$(".main_menu a.page5, .responsive_menu a.page5").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		loadScript();
		return false;
	});

	$(".main_menu a.page6, .responsive_menu a.page6").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		return false;
	});

	$(".main_menu a.page7, .responsive_menu a.page7").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page8, .responsive_menu a.page8").removeClass('active');
		return false;
	});

	$(".main_menu a.page8, .responsive_menu a.page8").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.home, .responsive_menu a.home").removeClass('active');
		$(".main_menu a.page2, .responsive_menu a.page2").removeClass('active');
		$(".main_menu a.page3, .responsive_menu a.page3").removeClass('active');
		$(".main_menu a.page4, .responsive_menu a.page4").removeClass('active');
		$(".main_menu a.page5, .responsive_menu a.page5").removeClass('active');
		$(".main_menu a.page6, .responsive_menu a.page6").removeClass('active');
		$(".main_menu a.page7, .responsive_menu a.page7").removeClass('active');
		return false;
	});

	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(40.7823234,-73.9654161)
    };
    var map = new google.maps.Map(document.getElementById('map'),  mapOptions);
}