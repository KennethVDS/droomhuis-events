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

	function imagelink() {
		var eventSelection = $('gallery').attr('at');
		var url = '../../assets/images/gallery/' + eventSelection + '/';
		var smallUrl = '../../assets/images/gallery/' + eventSelection + '/square/';
		for (var image = 0; image <= 36; image++) {
			let galleryPicture = url + image + '.jpg';
			let smallPicture = smallUrl + image + '.jpg';
			$('.overlay').append(`<a href='${galleryPicture} '  data-rel="lightbox" class="fa fa-expand"></a>`);
			$('.hexagon-in2').css(`background-image: url(${smallPicture});`);
			console.log(smallPicture);
			console.log(galleryPicture);
		}
	}; 

	$(".main_menu a.home, .responsive_menu a.home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		imagelink();
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