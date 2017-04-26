// https://www.npmjs.com/package/gulp-include
//=require jquery/jquery.min.js



$(function() {
	$('.navbar-toggler').on('click', function(e){
e.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
})
})