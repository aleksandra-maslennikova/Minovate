// https://www.npmjs.com/package/gulp-include
//=require jquery/dist/jquery.min.js
//=require slick-carousel/slick/slick.min.js


$(function() {
	$('.navbar-toggler').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).toggleClass('collapse');
	})

	$('.logos-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
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
});