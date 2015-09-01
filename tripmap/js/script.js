$(document).ready(function(){

	//detect user agent

	if (navigator.userAgent.indexOf('Mac OS X') != -1) {
	  $("body").addClass("mac");
	} else {
	  $("body").addClass("pc");
	}

	//adjust sidebar height

	console.log(window.innerHeight);
	var topsecheight = $('.main #sidebar .topsec').outerHeight(true);
	console.log(topsecheight);
	var botsecheight = window.innerHeight - (topsecheight + 5);
	console.log(botsecheight);

	$('#sidebar .botsec').css('height', botsecheight + 'px');

	console.log($('#sidebar .greybar').outerHeight(true));

	var greybarheight = $('#sidebar .greybar').outerHeight(true);

	var topandgrey = (topsecheight + greybarheight)

	var botsecheight2 = window.innerHeight - topandgrey;

	$('.div05 #sidebar .botsec').css('height', botsecheight2 + 'px');


	$(window).resize(function() {

		$('#sidebar .botsec').css('height', botsecheight + 'px');


	});
	


	//front page input js effect

	$('.startpage .welcome form input.placeinp').bind({
		  click: function() {

		  	var varl = $('.startpage .welcome form input.placeinp').val();
		    
				if(varl == 'Enter city name (e.g, Chiang Mai, Berlin)'){
				
					$(this).val('');
					

				}
		  },
		  blur: function() {

		  	var varl = $('.startpage .welcome form input.placeinp').val();

		    if(varl == ''){
					$(this).val('Enter city name (e.g, Chiang Mai, Berlin)');
					
				}
		  }
	});

	//landing page input js effect

	$('.landing .welcome form input.placeinp').bind({
		  click: function() {

		  	var varl = $('.landing .welcome form input.placeinp').val();
		    
				if(varl == 'Enter your email address'){
				
					$(this).val('');
					

				}
		  },
		  blur: function() {

		  	var varl = $('.landing .welcome form input.placeinp').val();

		    if(varl == ''){
					$(this).val('Enter your email address');
					
				}
		  }
	});

	//map it action box input address

	$('.map03 #sidebar .botsec form section.mapit button.btn4').click(function(){

		$('.map03 #sidebar .botsec .mapaction .inputgps').hide( "fast", function() {
		    // Animation complete.
		  });
		$('.map03 #sidebar .botsec .mapaction .droppin').hide("fast", function(){
			
		});

		
		$('.map03 #sidebar .botsec form section.mapit button.active-btn3').addClass('btn3');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn3');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn2').addClass('btn2');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn2');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn1').addClass('btn1');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn1')


		$('.map03 #sidebar .botsec .mapaction .inputadd').show( "fast", function() {
		    // Animation complete.
		  });

		$(this).addClass('active-btn4');
		$(this).removeClass('btn4');


	});

	//map it action box input gps

	$('.map03 #sidebar .botsec form section.mapit button.btn3').click(function(){

		$('.map03 #sidebar .botsec .mapaction .inputadd').hide( "normal", function() {
		    // Animation complete.
		  });
		$('.map03 #sidebar .botsec .mapaction .droppin').hide("fast", function(){
			
		});

		$('.map03 #sidebar .botsec form section.mapit button.active-btn4').addClass('btn4');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn4');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn2').addClass('btn2');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn2');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn1').addClass('btn1');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn1')

		$('.map03 #sidebar .botsec .mapaction .inputgps').show( "normal", function() {
		    // Animation complete.
		  });

		$(this).addClass('active-btn3');
		$(this).removeClass('btn3');


	});

	//map it action box drop pin

	$('.map03 #sidebar .botsec form section.mapit button.btn2').click(function(){

		$('.map03 #sidebar .botsec .mapaction .inputadd').hide( "normal", function() {
		    // Animation complete.
		  });

		$('.map03 #sidebar .botsec .mapaction .inputgps').hide( "fast", function() {
		    // Animation complete.
		  });


		$('.map03 #sidebar .botsec form section.mapit button.active-btn3').addClass('btn3');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn3');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn4').addClass('btn4');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn4');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn1').addClass('btn1');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn1')

		$('.map03 #sidebar .botsec .mapaction .droppin').show( "normal", function() {
		    // Animation complete.
		  });

		

		$(this).addClass('active-btn2');
		$(this).removeClass('btn2');

	});

	//map it action map it for me

	$('.map03 #sidebar .botsec form section.mapit button.btn1').click(function(){

		$('.map03 #sidebar .botsec form section.mapit button.active-btn3').addClass('btn3');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn3');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn4').addClass('btn4');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn4');

		$('.map03 #sidebar .botsec form section.mapit button.active-btn2').addClass('btn2');
		$('.map03 #sidebar .botsec form section.mapit button').removeClass('active-btn2')

		$('.map03 #sidebar .botsec .mapaction .inputadd').hide( "fast", function() {
		    // Animation complete.
		  });

		$('.map03 #sidebar .botsec .mapaction .inputgps').hide( "fast", function() {
		    // Animation complete.
		  });

		$('.map03 #sidebar .botsec .mapaction .droppin').hide("fast", function(){

		});

		$(this).addClass('active-btn1');
		$(this).removeClass('btn1');



	});



	//add place stars
	$('.map03 #sidebar section.revw-stars .ratestars button').bind({

		mouseover: function() {
			var index = $(this).index();
			$(this).addClass('star-active');
			$(this).removeClass('star-inactive');
			$('.map03 #sidebar section.revw-stars .ratestars button:nth-child(' + (index - 2) + ')').addClass('star-active');
			$('.map03 #sidebar section.revw-stars .ratestars button:nth-child(' + (index - 1) + ')').addClass('star-active');
			$('.map03 #sidebar section.revw-stars .ratestars button:nth-child(' + (index - 0) + ')').addClass('star-active');
			
		},
		mouseleave: function() {
			$(this).addClass('star-inactive');
			$(this).removeClass('star-active');
		}
	});

	// form input js effect

	$('.map03 #sidebar .botsec input').on("focus", function() {
	  $(this).data("previous-value", $(this).val());
	}); 

	$('.map03 #sidebar .botsec input').on("blur", function() {
	  if ($(this).val() == "") {
	    // alert($(this).data("previous-value"));
	    $(this).val($(this).data("previous-value"));
	  }
	}); 

	// progress track

	var varl1 = $('.map03 #sidebar .botsec form .place-name input').val();

	//map 04 input padding

	$('.map03 #sidebar .botsec form section').css('margin-bottom', '15px');
    $('.map03 #sidebar .botsec form section:nth-child(1)').css('margin-bottom', '11px');
    $('.map04 .c2 input').css('padding', '8px 10px 8px 93px');
	$('.map04 .c1 input').css('padding', '8px 10px 8px 68px');

	//map and sidebar height
	
	//check all checkbox

	$('.chck-all a').click(function(event) {   
        // Iterate each checkbox
        $('.map04 .daysweekbox label.checkbox input[type="checkbox"]').each(function() {
            this.checked = true;                        
        });
    
	});

	// operating hours box animation

	$('.daysofweek a').bind({

		click:function(){
			$('.map04 .opn-slct .daysweekbox').toggle(500);
			$('.hide-this').hide();
			$('.daysofweek').hide();
		}


	});

});

