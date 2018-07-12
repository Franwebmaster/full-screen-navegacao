jQuery(document).ready(function($){
	let MenuNavegacao = false;

	$('.cd-nav-trigger').on('click', function(event) {
		event.preventDefault();

		if( !MenuNavegacao ){
			if($(this).parents('.csstransitions').length > 0 ) MenuNavegacao = true;

			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				MenuNavegacao = false;
			});
		}
	});
});