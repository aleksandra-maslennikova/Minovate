// https://www.npmjs.com/package/gulp-include
//=require jquery/dist/jquery.min.js
//=require slick-carousel/slick/slick.min.js
//=require ion.rangeSlider/js/ion.rangeSlider.min.js
//=require select2/dist/js/select2.js
$(function() {
	$('.navbar-toggler').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).toggleClass('collapse');
	});


	$('.logos-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

		$('.bottom-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
	
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

	$('.carousel').slick({
		infinite: true,
		speed: 500
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollup').fadeIn();
		} else {
			$('#scrollup').fadeOut();
		}
	});

	$('#scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

$("#price-slider").ionRangeSlider( {
	type: "double",
	//prefix: "Range: $",
	decorate_both: false,
	hide_min_max: true,
	force_edges: true
	});

$("#select-sort").select2({
	minimumResultsForSearch: Infinity
});
$("#select-show").select2({
	minimumResultsForSearch: Infinity
});

let fromValue = document.querySelector('.irs-from').textContent;
let myFromValue = document.getElementById('price-from');
	myFromValue.textContent= '$'+ fromValue + ' - ';
let toValue = document.querySelector('.irs-to').textContent;
let myToValue = document.getElementById('price-to');
	 myToValue.textContent= '$'+ toValue;
let sliderFrom = document.querySelector('.irs-slider.from');
let sliderTo = document.querySelector('.irs-slider.to');

sliderFrom.addEventListener('mousemove', function(e) {
	let fromValue = document.querySelector('.irs-from').textContent;
 myFromValue.textContent= '$'+ fromValue + ' - ';
	});
sliderFrom.addEventListener('touchmove', function(e) {
	let fromValue = document.querySelector('.irs-from').textContent;
 myFromValue.textContent= '$'+ fromValue + ' - ';
	});
sliderTo.addEventListener('mousemove', function(e) {
	let toValue = document.querySelector('.irs-to').textContent;
 myToValue.textContent= '$'+ toValue;

	});
sliderTo.addEventListener('touchmove', function(e) {
	let toValue = document.querySelector('.irs-to').textContent;
 myToValue.textContent= '$'+ toValue;

	});
});