import $ from 'jquery'

$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Menu
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.header__menu').toggleClass('header__menu--active');
	});

	$('.header__search .close, .header__action--search button').on('click', function() {
		$('.header__search').toggleClass('header__search--active');
	});

	/*==============================
	Multi level dropdowns
	==============================*/
	$('ul.dropdown-menu [data-toggle="dropdown"]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		$(this).siblings().toggleClass('show');
	});

	$(document).on('click', function (e) {
		$('.dropdown-menu').removeClass('show');
	});

	

	$('.modal__close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	

	/*==============================
	Copy
	==============================*/
	$('.author__code button').on('click', function() {
		var copyText = document.getElementById('author-code');
		copyText.select(); /* Select the text field */
		copyText.setSelectionRange(0, 99999); /* For mobile devices */
		document.execCommand("copy"); /* Copy the text inside the text field */

		/* Alert the copied text */
		$(this).addClass('active');
		setTimeout(function() {
			$('.author__code button').removeClass('active');
		}, 1200);
	});

	/*==============================
	Section bg
	==============================*/
	$('.main__video-bg, .author__cover--bg, .main__author, .collection__cover, .hero__slide').each(function(){
		if ($(this).attr('data-bg')){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Upload file
	==============================*/
	$('.sign__file-upload').on('change', function() {
		var videoLabel  = $(this).attr('data-name');

		if ($(this).val() != '') {
			$(videoLabel).text($(this)[0].files[0].name);
		} else {
			$(videoLabel).text('Upload file');
		}
	});
	

	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	if ($('#asset__actions--scroll').length) {
		Scrollbar.init(document.querySelector('#asset__actions--scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: false,
		});
	}

});