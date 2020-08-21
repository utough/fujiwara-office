$(function () {

	$('.gazo').click(function () {

		if ($(this).hasClass('close') == false) {
			/*hamburgerメニューが閉じていて開けたいときの処理(バツを表示する処理)*/
			$(this).attr('src', 'imgs/close-icon.png').addClass('close'),
				$('.inmenu').slideDown(600),
				$('#masthead').css('background-color', 'rgba(255, 255, 255, 0.9)');

		} else {
			/*hamburgerメニューが開いていて閉じたいときの処理(hamburgerを表示したいときの処理)*/
			$(this).attr('src', 'imgs/open-icon.png').removeClass('close'),
				$('.inmenu').slideUp(600),
				$('#masthead').css('background-color', '');
		}
	});






	//    $('.gazo').click(function(){
	//       if($('.gazo').attr('class') == 'selected')  {
	//           $(this).removeClass('selected').next('.inmenu').slideUp('fast');
	//       } else {
	//           
	//       }
	//    });
});

(function ($) {

	// masthead scroll
	var header = $('#masthead'); // fixed DOM
	var adclass = 'scrolled'; // add css class
	var scrollY = 30; // scroll

	$(window).scroll(function () {
		if ($(window).scrollTop() > scrollY) {
			header.addClass(adclass);
		} else {
			header.removeClass(adclass);
		}
	});

})(jQuery);