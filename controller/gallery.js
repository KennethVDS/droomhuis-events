jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		$('.overlay a').remove();
		$("#menu-container .content").hide();
		$("#menu-container .homepage").hide();
		const navigation = $(this).attr('at');
		const url = new Object();
		url.href = '../../assets/images/gallery/' + navigation + '/';
		url.hex = url.href + 'square/';
		appendGallery(url);
		return false;
	});

	function appendGallery(url) {
		var pic
		var hexPic
		for (i = 1; i <= 27; i++) {
			pic = url['href'] + i + '.jpg';
			hexPic = url['hex'] + i + '.jpg';
			console.log(pic);
			$('.overlay').append(`<a href="${pic}"  data-rel="lightbox" class="fa fa-expand"></a>`);
			$('.hexagon-in2').css("background-image", "url(" + hexPic +")");
		};
	}

	$(".main_menu a.home, .responsive_menu a.home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
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
