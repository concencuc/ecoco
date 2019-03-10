//-------------------------------------------------------//
//Animate menu
//-------------------------------------------------------//
function animateMmenu() {
	var menuEl = $('#mMenu');
	var curPosMenu = Number($(menuEl).css('top').match(/[0-9]+/g)[0]); //find pos menu
	var menuH = $(menuEl).height();

	$(menuEl).addClass('emergence-top-down');

	$(window).on('scroll', function(e) {
		var scrollPos = this.pageYOffset;

		//change menu style
		if(scrollPos > menuH + curPosMenu) {
			$(menuEl).addClass('header-fixed');
		}
		else if(scrollPos){
			$(menuEl).removeClass('header-fixed');
		}
	})
}
//-------------------------------------------------------//
//END Animate menu
//-------------------------------------------------------//





$(function() {
	//init aos
	AOS.init({
		once: true,
		mirror: true,
	});

	$(document).ready(function() {
		//fadeIn menu
		animateMmenu();

		//init product scripts
		if( $('#product-page').length != 0 ) {
			initProduct({
				cube: '.cube-animation',
				cubeFoto: 'img/animation/M-700-{frame}.jpg',
				slides: '.product-slide-wrap',
				title: '.product-title',
				nFoto: [5,3,6,5,7,5,1],
			});
		}
		//

		//main page
		if($('#main-page').length != 0) {
			setTimeout(function(){ initMainPage() }, 200);
		}

		//methodPage
		if($('#method-page').length != 0) {
			initMethodPage();
		}



	}) //end document ready
}) //end main
