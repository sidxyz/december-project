jQuery("document").ready(function($){
		$('.a-class').hide();
		var navOffset= jQuery("nav").offset().top;
		jQuery("nav").wrap('<div class="nav-placeholder"></div>');
		jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());
			jQuery(window).scroll(function(){
				var scrollPos=jQuery(window).scrollTop();
					if(scrollPos >= navOffset) {
						jQuery("nav").prop( 'id', 'fixed' );
						$('.a-class').show();
					}
					else{
						jQuery("nav").prop( 'id', 'header-div' );
						$('.a-class').hide();
					}
			});

		$("#carousel-8973").carousel({
         interval : 8000,
         pause: false
     		});
});

$(document).ready(function(){
	$('window').mousein(.css('background-color','grey'));
});

/*$("#button").click(function(){
    $("div").animate({left: '250px'});
});
/*$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});*/