// (function($) {
	
// 	"use strict";
	
// 	//Hide Loading Box (Preloader)
// 	function handlePreloader() {
// 		if($('.loader-wrap').length){
// 			$('.loader-wrap').delay(1000).fadeOut(500);
// 		}
// 	}

// 	if ($(".preloader-close").length) {
//         $(".preloader-close").on("click", function(){
//             $('.loader-wrap').delay(200).fadeOut(500);
//         })
//     }

//     if ($(".switch_btn_one").length) {
// 	    $(".search__toggler").on("click", function(){
// 	    	$(".search-field .switch_btn_one").addClass("active");
// 	    })     
// 	    $(".switch_btn_one .close-btn").on("click", function(){
// 	    	$(".search-field .switch_btn_one").removeClass("active");
// 	    }) 
//     }
	
// 	//Update Header Style and Scroll to Top
// 	function headerStyle() {
// 		if($('.main-header').length){
// 			var windowpos = $(window).scrollTop();
// 			var siteHeader = $('.main-header');
// 			var scrollLink = $('.scroll-top');
// 			if (windowpos >= 110) {
// 				siteHeader.addClass('fixed-header');
// 				scrollLink.addClass('open');
// 			} else {
// 				siteHeader.removeClass('fixed-header');
// 				scrollLink.removeClass('open');
// 			}
// 		}
// 	}
	
// 	headerStyle();


// 	//Submenu Dropdown Toggle
// 	if($('.main-header li.dropdown ul').length){
// 		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
// 	}

// 	//Mobile Nav Hide Show
// 	if($('.mobile-menu').length){
		
// 		$('.mobile-menu .menu-box').mCustomScrollbar();
		
// 		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
// 		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
// 		$('.sticky-header .main-menu').append(mobileMenuContent);
		
// 		//Dropdown Button
// 		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
// 			$(this).toggleClass('open');
// 			$(this).prev('ul').slideToggle(500);
// 		});
// 		//Dropdown Button
// 		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
// 			$(this).prev('.megamenu').slideToggle(900);
// 		});
// 		//Menu Toggle Btn
// 		$('.mobile-nav-toggler').on('click', function() {
// 			$('body').addClass('mobile-menu-visible');
// 		});

// 		//Menu Toggle Btn
// 		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
// 			$('body').removeClass('mobile-menu-visible');
// 		});
// 	}


// 	// Scroll to a Specific Div
// 	if($('.scroll-to-target').length){
// 		$(".scroll-to-target").on('click', function() {
// 			var target = $(this).attr('data-target');
// 		   // animate
// 		   $('html, body').animate({
// 			   scrollTop: $(target).offset().top
// 			 }, 1000);
	
// 		});
// 	}

// 	// Elements Animation
// 	if($('.wow').length){
// 		var wow = new WOW({
// 		mobile:       false
// 		});
// 		wow.init();
// 	}

// 	//Contact Form Validation
// 	if($('#contact-form').length){
// 		$('#contact-form').validate({
// 			rules: {
// 				username: {
// 					required: true
// 				},
// 				email: {
// 					required: true,
// 					email: true
// 				},
// 				phone: {
// 					required: true
// 				},
// 				subject: {
// 					required: true
// 				},
// 				message: {
// 					required: true
// 				}
// 			}
// 		});
// 	}

// 	//Fact Counter + Text Count
// 	if($('.count-box').length){
// 		$('.count-box').appear(function(){
	
// 			var $t = $(this),
// 				n = $t.find(".count-text").attr("data-stop"),
// 				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
// 			if (!$t.hasClass("counted")) {
// 				$t.addClass("counted");
// 				$({
// 					countNum: $t.find(".count-text").text()
// 				}).animate({
// 					countNum: n
// 				}, {
// 					duration: r,
// 					easing: "linear",
// 					step: function() {
// 						$t.find(".count-text").text(Math.floor(this.countNum));
// 					},
// 					complete: function() {
// 						$t.find(".count-text").text(this.countNum);
// 					}
// 				});
// 			}
			
// 		},{accY: 0});
// 	}


// 	//LightBox / Fancybox
// 	if($('.lightbox-image').length) {
// 		$('.lightbox-image').fancybox({
// 			openEffect  : 'fade',
// 			closeEffect : 'fade',
// 			helpers : {
// 				media : {}
// 			}
// 		});
// 	}


// 	//Tabs Box
// 	if($('.tabs-box').length){
// 		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
// 			e.preventDefault();
// 			var target = $($(this).attr('data-tab'));
			
// 			if ($(target).is(':visible')){
// 				return false;
// 			}else{
// 				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
// 				$(this).addClass('active-btn');
// 				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
// 				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
// 				$(target).fadeIn(300);
// 				$(target).addClass('active-tab');
// 			}
// 		});
// 	}



// 	//Accordion Box
// 	if($('.accordion-box').length){
// 		$(".accordion-box").on('click', '.acc-btn', function() {
			
// 			var outerBox = $(this).parents('.accordion-box');
// 			var target = $(this).parents('.accordion');
			
// 			if($(this).hasClass('active')!==true){
// 				$(outerBox).find('.accordion .acc-btn').removeClass('active');
// 			}
			
// 			if ($(this).next('.acc-content').is(':visible')){
// 				return false;
// 			}else{
// 				$(this).addClass('active');
// 				$(outerBox).children('.accordion').removeClass('active-block');
// 				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
// 				target.addClass('active-block');
// 				$(this).next('.acc-content').slideDown(300);	
// 			}
// 		});	
// 	}


//     //two-column-carousel
// 	if ($('.two-column-carousel').length) {
// 		$('.two-column-carousel').owlCarousel({
// 			loop:true,
// 			margin:30,
// 			nav:true,
// 			smartSpeed: 1000,
// 			autoplay: 500,
// 			navText: [ '<span class="fas fa-algle-left"></span>', '<span class="fas fa-algle-left-right"></span>' ],
// 			responsive:{
// 				0:{
// 					items:1
// 				},
// 				480:{
// 					items:1
// 				},
// 				600:{
// 					items:1
// 				},
// 				800:{
// 					items:2
// 				},
// 				1024:{
// 					items:2
// 				}
// 			}
// 		});    		
// 	}


//     //three-item-carousel
// 	if ($('.three-item-carousel').length) {
// 		$('.three-item-carousel').owlCarousel({
// 			loop:true,
// 			margin:30,
// 			nav:true,
// 			smartSpeed: 1000,
// 			autoplay: 500,
// 			navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
// 			responsive:{
// 				0:{
// 					items:1
// 				},
// 				480:{
// 					items:1
// 				},
// 				600:{
// 					items:2
// 				},
// 				800:{
// 					items:2
// 				},
// 				1024:{
// 					items:3
// 				}
// 			}
// 		});    		
// 	}


// 	// Five Item Carousel
// 	if ($('.five-item-carousel').length) {
// 		$('.five-item-carousel').owlCarousel({
// 			loop:true,
// 			margin:30,
// 			nav:true,
// 			smartSpeed: 500,
// 			autoplay: 5000,
// 			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
// 			responsive:{
// 				0:{
// 					items:1
// 				},
// 				600:{
// 					items:2
// 				},
// 				800:{
// 					items:3
// 				},
// 				1024:{
// 					items:4
// 				},
// 				1200:{
// 					items:5
// 				}
// 			}
// 		});    		
// 	}

// 	// Four Item Carousel
// 	if ($('.four-item-carousel').length) {
// 		$('.four-item-carousel').owlCarousel({
// 			loop:true,
// 			margin:30,
// 			nav:true,
// 			smartSpeed: 500,
// 			autoplay: 5000,
// 			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
// 			responsive:{
// 				0:{
// 					items:1
// 				},
// 				600:{
// 					items:2
// 				},
// 				800:{
// 					items:3
// 				},
// 				1024:{
// 					items:4
// 				},
// 				1200:{
// 					items:4
// 				}
// 			}
// 		});    		
// 	}


// 	// single-item-carousel
// 	if ($('.single-item-carousel').length) {
// 		$('.single-item-carousel').owlCarousel({
// 			loop:true,
// 			margin:30,
// 			nav:false,
// 			smartSpeed: 500,
// 			autoplay: 1000,
// 			navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
// 			responsive:{
// 				0:{
// 					items:1
// 				},
// 				480:{
// 					items:1
// 				},
// 				600:{
// 					items:1
// 				},
// 				800:{
// 					items:1
// 				},			
// 				1200:{
// 					items:1
// 				}

// 			}
// 		});    		
// 	}




// 	// deals Carousel
// 	if ($('.deals-carousel').length) {
// 		$('.deals-carousel').owlCarousel({
// 			loop:true,
// 			margin:50,
// 			nav:true,
// 			smartSpeed: 500,
// 			autoplay: 5000,
// 			navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
// 			responsive:{
// 				0:{
// 					items:1
// 				},
// 				600:{
// 					items:1
// 				},
// 				800:{
// 					items:1
// 				},
// 				1024:{
// 					items:1
// 				},
// 				1200:{
// 					items:1
// 				}
// 			}
// 		});    		
// 	}


// 	// banner-carousel
// 	if ($('.banner-carousel').length) {
//         $('.banner-carousel').owlCarousel({
//             loop:true,
// 			margin:0,
// 			nav:true,
// 			animateOut: 'fadeOut',
//     		animateIn: 'fadeIn',
//     		active: true,
// 			smartSpeed: 1000,
// 			autoplay: 6000,
//             navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
//             responsive:{
//                 0:{
//                     items:1
//                 },
//                 600:{
//                     items:1
//                 },
//                 800:{
//                     items:1
//                 },
//                 1024:{
//                     items:1
//                 }
//             }
//         });
//     }


// 	//Add One Page nav
// 	if($('.scroll-nav').length) {
// 		$('.scroll-nav').onePageNav();
// 	}

// 	//Sortable Masonary with Filters
// 	function enableMasonry() {
// 		if($('.sortable-masonry').length){
	
// 			var winDow = $(window);
// 			// Needed variables
// 			var $container=$('.sortable-masonry .items-container');
// 			var $filter=$('.filter-btns');
	
// 			$container.isotope({
// 				filter:'*',
// 				 masonry: {
// 					columnWidth : '.masonry-item.small-column'
// 				 },
// 				animationOptions:{
// 					duration:500,
// 					easing:'linear'
// 				}
// 			});
			
	
// 			// Isotope Filter 
// 			$filter.find('li').on('click', function(){
// 				var selector = $(this).attr('data-filter');
	
// 				try {
// 					$container.isotope({ 
// 						filter	: selector,
// 						animationOptions: {
// 							duration: 500,
// 							easing	: 'linear',
// 							queue	: false
// 						}
// 					});
// 				} catch(err) {
	
// 				}
// 				return false;
// 			});
	
	
// 			winDow.on('resize', function(){
// 				var selector = $filter.find('li.active').attr('data-filter');

// 				$container.isotope({ 
// 					filter	: selector,
// 					animationOptions: {
// 						duration: 500,
// 						easing	: 'linear',
// 						queue	: false
// 					}
// 				});
// 			});
	
	
// 			var filterItemA	= $('.filter-btns li');
	
// 			filterItemA.on('click', function(){
// 				var $this = $(this);
// 				if ( !$this.hasClass('active')) {
// 					filterItemA.removeClass('active');
// 					$this.addClass('active');
// 				}
// 			});
// 		}
// 	}
	
// 	enableMasonry();


// 	//Price Range Slider
// 	if($('.price-range-slider').length){
// 		$( ".price-range-slider" ).slider({
// 			range: true,
// 			min: 0,
// 			max: 10000,
// 			values: [ 1000, 5000 ],
// 			slide: function( event, ui ) {
// 			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
// 			}
// 		});
		
// 		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
// 	}

// 	//Area Range Slider
// 	if($('.area-range-slider').length){
// 		$( ".area-range-slider" ).slider({
// 			range: true,
// 			min: 0,
// 			max: 7000,
// 			values: [ 700, 4000 ],
// 			slide: function( event, ui ) {
// 			$( "input.area-range" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
// 			}
// 		});
		
// 		$( "input.area-range" ).val( $( ".area-range-slider" ).slider( "values", 0 ) + " - sq ft" + $( ".area-range-slider" ).slider( "values", 1 ) );	
// 	}


//     // Progress Bar
// 	if ($('.count-bar').length) {
// 		$('.count-bar').appear(function(){
// 			var el = $(this);
// 			var percent = el.data('percent');
// 			$(el).css('width',percent).addClass('counted');
// 		},{accY: -50});

// 	}


// 	$(document).ready(function() {
//       $('select:not(.ignore)').niceSelect();
//     });


//     // color switcher
// 	function swithcerMenu() {
// 	  	if ($('.switch_menu').length) {

// 	    	$('.switch_btn button').on('click', function(){
// 	      	$('.switch_menu').toggle(500)
// 	    	});

// 	    	$('#styleOptions').styleSwitcher({
// 	        hasPreview: true,
// 	        fullPath: 'assets/css/color/',
// 	         	cookie: {
// 	          	expires: 30,
// 	          	isManagingLoad: true
// 	      		}
// 	    	});

// 	  	};
// 	}


// 	// page direction
// 	function directionswitch() {
// 	  	if ($('.page_direction').length) {

// 	    	$('.direction_switch button').on('click', function() {
// 			   $('body').toggleClass(function(){
// 			      return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
// 			  })
// 			});
// 	  	};
// 	}


// 	if($('.paroller').length){
// 		$('.paroller').paroller({
// 			  factor: 0.1,            // multiplier for scrolling speed and offset, +- values for direction control  
// 			  factorLg: 0.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
// 			  type: 'foreground',     // background, foreground  
// 			  direction: 'vertical' // vertical, horizontal  
// 		});
// 	}

// 	if($('.paroller-2').length){
// 		$('.paroller-2').paroller({
// 			  factor: -0.1,            // multiplier for scrolling speed and offset, +- values for direction control  
// 			  factorLg: -0.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
// 			  type: 'foreground',     // background, foreground  
// 			  direction: 'vertical' // vertical, horizontal  
// 		});
// 	}

// 	// Date picker
// 	function datepicker () {
// 	    if ($('#datepicker').length) {
// 	        $('#datepicker').datepicker();
// 	    };
// 	}



// 	// Time picker
// 	function timepicker () {
// 	    if ($('input[name="time"]').length) {
// 	        $('input[name="time"]').ptTimeSelect();
// 	    }
// 	}


// 	if ($('.property-details .bxslider').length) {
// 		$('.property-details .bxslider').bxSlider({
// 			auto:true,
// 	        nextSelector: '.property-details #slider-next',
// 	        prevSelector: '.property-details #slider-prev',
// 	        nextText: '<i class="fa fa-angle-right"></i>',
// 	        prevText: '<i class="fa fa-angle-left"></i>',
// 	        mode: 'fade',
// 	        auto: 'true',
// 	        speed: '700',
// 	        pagerCustom: '.property-details .slider-pager .thumb-box'
// 	    });
// 	};


// 	/*	=========================================================================
// 	When document is Scrollig, do
// 	========================================================================== */

// 	jQuery(document).on('ready', function () {
// 		(function ($) {
// 			// add your functions
// 			directionswitch();
// 			swithcerMenu();
// 			datepicker ();
// 			timepicker ();
// 		})(jQuery);
// 	});



// 	/* ==========================================================================
//    When document is Scrollig, do
//    ========================================================================== */
	
// 	$(window).on('scroll', function() {
// 		headerStyle();
// 	});

	
	
// 	/* ==========================================================================
//    When document is loaded, do
//    ========================================================================== */
	
// 	$(window).on('load', function() {
// 		handlePreloader();
// 		enableMasonry();
// 	});

	

// })(window.jQuery);

// // mayur added js

// function openImagePopup(index) {
//     var images = [
//         'assets/images/propertyImg/1.jpg',
//         'assets/images/propertyImg/2.jpg',
//         'assets/images/propertyImg/3.jpg',
//         'assets/images/propertyImg/4.jpg',
//         'assets/images/propertyImg/5.jpg',
//         // Add more image URLs as needed
// 		// add images to property details section here
//     ];

//     var currentIndex = index || 0;

//     // Create a new image element
//     var img = document.createElement('img');
//     img.src = images[currentIndex];

//     // Create a container div for the popup
//     var popup = document.createElement('div');
//     popup.classList.add('image-popup');
//     popup.appendChild(img);

//     // Add previous and next buttons
//     var prevBtn = document.createElement('button');
//     prevBtn.textContent = 'Previous';
//     prevBtn.classList.add('prev-btn');
//     prevBtn.addEventListener('click', function() {
//         navigateImages(-1);
//     });

//     var nextBtn = document.createElement('button');
//     nextBtn.textContent = 'Next';
//     nextBtn.classList.add('next-btn');
//     nextBtn.addEventListener('click', function() {
//         navigateImages(1);
//     });

//     popup.appendChild(prevBtn);
//     popup.appendChild(nextBtn);

//     // Append the popup to the body
//     document.body.appendChild(popup);

//     // Close the popup when clicked outside the image
//     popup.addEventListener('click', function(event) {
//         if (event.target === popup) {
//             popup.remove();
//         }
//     });

//     function navigateImages(step) {
//         currentIndex += step;
//         if (currentIndex < 0) {
//             currentIndex = images.length - 1;
//         } else if (currentIndex >= images.length) {
//             currentIndex = 0;
//         }

//         img.src = images[currentIndex];
//     }
// }

// // added for the map
// function initMap() {
// 	const mapElement = document.getElementById('map');
// 	const locationForm = document.getElementById('locationForm');

// 	locationForm.addEventListener('submit', function(event) {
// 		event.preventDefault();
		
// 		const locationInput = document.getElementById('location').value;

// 		// Use Geocoding service to convert location input into coordinates
// 		const geocoder = new google.maps.Geocoder();
// 		geocoder.geocode({ address: locationInput }, function(results, status) {
// 			if (status === 'OK') {
// 				const map = new google.maps.Map(mapElement, {
// 					center: results[0].geometry.location,
// 					zoom: 8
// 				});

// 				const marker = new google.maps.Marker({
// 					map: map,
// 					position: results[0].geometry.location
// 				});
// 			} else {
// 				alert('Geocode was not successful for the following reason: ' + status);
// 			}
// 		});
// 	});
// }


// // Repeat for other divs...
// // This function will hide all details and then show the one corresponding to the clicked tab.
// // It will also handle the active class for tabs.
// function toggleDetails(detailToShow, tabToShow) {
//     // Define all detail sections and tabs
//     const details = ['basicDetails', 'localityDetails', 'propertyDetails', 'amenitiesDetails', 'pricingDetails', 'galleryDetails', 'brouchureDetails', 'informationDetails', 'ownerDetails', 'scheduleDetails'];
//     const tabs = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9', 'tab10'];

//     // Hide all details and remove active class from all tabs
//     details.forEach(detail => {
//         const detailElement = document.getElementById(detail);
//         if (detailElement) {
//             detailElement.classList.add('d-none');
//         }
//     });

//     tabs.forEach(tab => {
//         const tabElement = document.getElementById(tab);
//         if (tabElement) {
//             tabElement.classList.remove('active-tab');
//         }
//     });

//     // Show the requested detail section and add active class to the corresponding tab
//     const detailToShowElement = document.getElementById(detailToShow);
//     const tabToShowElement = document.getElementById(tabToShow);
//     if (detailToShowElement && tabToShowElement) {
//         detailToShowElement.classList.remove('d-none');
//         tabToShowElement.classList.add('active-tab');
//     }
// }

// // Attach click event listeners to tabs
// document.querySelectorAll('.tab').forEach(tab => {
//     tab.addEventListener('click', function() {
//         const tabId = this.id;
//         const detailId = 'detail' + tabId.slice(3); // Assumes detail IDs follow the pattern 'detail1', 'detail2', ...
//         toggleDetails(detailId, tabId);
//     });
// });











// // Om added


// // basic details 
// function toggleBasicDetails() {
// 	var basicDetails = document.getElementById("basicDetails");
// 	var div1 = document.getElementById("div1");


// 	if (basicDetails.classList.contains("d-none")) {

// 		basicDetails.classList.remove("d-none");
// 		localityDetails.classList.add("d-none");
// 		propertyDetails.classList.add("d-none");
// 		amenitiesDetails.classList.add("d-none");
// 		pricingDetails.classList.add("d-none");
// 		galleryDetails.classList.add("d-none");
// 		brouchureDetails.classList.add("d-none");
// 		informationDetails.classList.add("d-none");
// 		ownerDetails.classList.add("d-none");
// 		scheduleDetails.classList.add("d-none");

// 		// adding active class
// 		div1.classList.add("active");

// 		// adding active class
// 		div2.classList.remove("active");
// 		div3.classList.remove("active");
// 		div4.classList.remove("active");
// 		div5.classList.remove("active");
// 		div6.classList.remove("active");
// 		div7.classList.remove("active");
// 		div8.classList.remove("active");
// 		div9.classList.remove("active");
// 		div10.classList.remove("active");
// 	}
// }


// // locality Details
// function toggleLocalityDetails() {
// 	var localityDetails = document.getElementById("localityDetails");
// 	var div2 = document.getElementById("div2");

// 	if (localityDetails.classList.contains("d-none")) {
// 		basicDetails.classList.add("d-none");
// 		localityDetails.classList.remove("d-none");
// 		propertyDetails.classList.add("d-none");
// 		amenitiesDetails.classList.add("d-none");
// 		pricingDetails.classList.add("d-none");
// 		galleryDetails.classList.add("d-none");
// 		brouchureDetails.classList.add("d-none");
// 		informationDetails.classList.add("d-none");
// 		ownerDetails.classList.add("d-none");
// 		scheduleDetails.classList.add("d-none");
		

// 		// adding active class
// 		div2.classList.add("active");


// 		// adding active class
// 		div1.classList.remove("active");
// 		div3.classList.remove("active");
// 		div4.classList.remove("active");
// 		div5.classList.remove("active");
// 		div6.classList.remove("active");
// 		div7.classList.remove("active");
// 		div8.classList.remove("active");
// 		div9.classList.remove("active");
// 		div10.classList.remove("active");
// 	} 
// //     else {
// //         localityDetails.classList.add("d-none");
// }


// // property Details  
// function togglePropertyDetails() {
// 	var propertyDetails = document.getElementById("propertyDetails");
// 	var div3 = document.getElementById("div3");


// 	if (propertyDetails.classList.contains("d-none")) {
// 		basicDetails.classList.add("d-none");
// 		localityDetails.classList.add("d-none");
// 		propertyDetails.classList.remove("d-none");
// 		amenitiesDetails.classList.add("d-none");
// 		pricingDetails.classList.add("d-none");
// 		galleryDetails.classList.add("d-none");
// 		brouchureDetails.classList.add("d-none");
// 		informationDetails.classList.add("d-none");
// 		ownerDetails.classList.add("d-none");
// 		scheduleDetails.classList.add("d-none");

// 		// adding active class
// 		div3.classList.add("active");

// 		// adding active class
// 		div1.classList.remove("active");
// 		div2.classList.remove("active");
// 		div4.classList.remove("active");
// 		div5.classList.remove("active");
// 		div6.classList.remove("active");
// 		div7.classList.remove("active");
// 		div8.classList.remove("active");
// 		div9.classList.remove("active");
// 		div10.classList.remove("active");
// 	}
	
	
		
	
// }




// // // amenities   
// // function toggleAmenitiesDetails() {
// // 	var amenitiesDetails = document.getElementById("amenitiesDetails");
// // 	var div4 = document.getElementById("div4");


// // 	if (amenitiesDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.remove("d-none");
// // 		pricingDetails.classList.add("d-none");
// // 		galleryDetails.classList.add("d-none");
// // 		brouchureDetails.classList.add("d-none");
// // 		informationDetails.classList.add("d-none");
// // 		ownerDetails.classList.add("d-none");
// // 		scheduleDetails.classList.add("d-none");

// // 		// adding active class
// // 		div4.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div5.classList.remove("active");
// // 		div6.classList.remove("active");
// // 		div7.classList.remove("active");
// // 		div8.classList.remove("active");
// // 		div9.classList.remove("active");
// // 		div10.classList.remove("active");
// // 	}
// // }


// // // pricing details   
// // function togglePricingDetails() {
// // 	var pricingDetails = document.getElementById("pricingDetails");
// // 	var div5= document.getElementById("div5");


// // 	if (pricingDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.add("d-none");
// // 		pricingDetails.classList.remove("d-none");
// // 		galleryDetails.classList.add("d-none");
// // 		brouchureDetails.classList.add("d-none");
// // 		informationDetails.classList.add("d-none");
// // 		ownerDetails.classList.add("d-none");
// // 		scheduleDetails.classList.add("d-none");

// // 		// adding active class
// // 		div5.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div4.classList.remove("active");
// // 		div6.classList.remove("active");
// // 		div7.classList.remove("active");
// // 		div8.classList.remove("active");
// // 		div9.classList.remove("active");
// // 		div10.classList.remove("active");
// // 	}
// // }


// // // gallery Details
// // function toggleGalleryDetails() {
// // 	var galleryDetails = document.getElementById("galleryDetails");
// // 	var div6 = document.getElementById("div6");

// // 	if (galleryDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.add("d-none");
// // 		pricingDetails.classList.add("d-none");
// // 		galleryDetails.classList.remove("d-none");
// // 		brouchureDetails.classList.add("d-none");
// // 		informationDetails.classList.add("d-none");
// // 		ownerDetails.classList.add("d-none");
// // 		scheduleDetails.classList.add("d-none");

// // 		// adding active class
// // 		div6.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div4.classList.remove("active");
// // 		div5.classList.remove("active");
// // 		div7.classList.remove("active");
// // 		div8.classList.remove("active");
// // 		div9.classList.remove("active");
// // 		div10.classList.remove("active");
// // 	}
// // }

// // // brouchure Details
// // function toggleBrouchureDetails() {
// // 	var brouchureDetails = document.getElementById("brouchureDetails");
// // 	var div7 = document.getElementById("div7");

// // 	if (brouchureDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.add("d-none");
// // 		pricingDetails.classList.add("d-none");
// // 		galleryDetails.classList.add("d-none");
// // 		brouchureDetails.classList.remove("d-none");
// // 		informationDetails.classList.add("d-none");
// // 		ownerDetails.classList.add("d-none");
// // 		scheduleDetails.classList.add("d-none");

// // 		// adding active class
// // 		div7.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div4.classList.remove("active");
// // 		div5.classList.remove("active");
// // 		div6.classList.remove("active");
// // 		div8.classList.remove("active");
// // 		div9.classList.remove("active");
// // 		div10.classList.remove("active");
// // 	}
// // }
// // // developer / builder information
// // function toggleInformationDetails() {
// // 	var informationDetails = document.getElementById("informationDetails");
// // 	var div8= document.getElementById("div8");

// // 	if (informationDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.add("d-none");
// // 		pricingDetails.classList.add("d-none");
// // 		galleryDetails.classList.add("d-none");
// // 		brouchureDetails.classList.add("d-none");
// // 		informationDetails.classList.remove("d-none");
// // 		ownerDetails.classList.add("d-none");
// // 		scheduleDetails.classList.add("d-none");

// // 		// adding active class
// // 		div8.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div4.classList.remove("active");
// // 		div5.classList.remove("active");
// // 		div6.classList.remove("active");
// // 		div7.classList.remove("active");
// // 		div9.classList.remove("active");
// // 		div10.classList.remove("active");
// // 	}
// // }


// // // owner information
// // function toggleOwnerDetails() {
// // 	var ownerDetails = document.getElementById("ownerDetails");
// // 	var div9= document.getElementById("div9");

// // 	if (ownerDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.add("d-none");
// // 		pricingDetails.classList.add("d-none");
// // 		galleryDetails.classList.add("d-none");
// // 		brouchureDetails.classList.add("d-none");
// // 		informationDetails.classList.add("d-none");
// // 		ownerDetails.classList.remove("d-none");
// // 		scheduleDetails.classList.add("d-none");

// // 		// adding active class
// // 		div9.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div4.classList.remove("active");
// // 		div5.classList.remove("active");
// // 		div6.classList.remove("active");
// // 		div7.classList.remove("active");
// // 		div8.classList.remove("active");
// // 		div10.classList.remove("active");
// // 	}
// // }

// // // schedule Details
// // function toggleScheduleDetails() {
// // 	var scheduleDetails = document.getElementById("scheduleDetails");
// // 	var div10 = document.getElementById("div10");

// // 	if (scheduleDetails.classList.contains("d-none")) {
// // 		basicDetails.classList.add("d-none");
// // 		localityDetails.classList.add("d-none");
// // 		propertyDetails.classList.add("d-none");
// // 		amenitiesDetails.classList.add("d-none");
// // 		pricingDetails.classList.add("d-none");
// // 		galleryDetails.classList.add("d-none");
// // 		brouchureDetails.classList.add("d-none");
// // 		informationDetails.classList.add("d-none");
// // 		ownerDetails.classList.add("d-none");
// // 		scheduleDetails.classList.remove("d-none");

// // 		// adding active class
// // 		div10.classList.add("active");

// // 		// adding active class
// // 		div1.classList.remove("active");
// // 		div2.classList.remove("active");
// // 		div3.classList.remove("active");
// // 		div4.classList.remove("active");
// // 		div5.classList.remove("active");
// // 		div6.classList.remove("active");
// // 		div7.classList.remove("active");
// // 		div8.classList.remove("active");
// // 		div9.classList.remove("active");
		
// // 	}
// // }










(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

    if ($(".switch_btn_one").length) {
	    $(".search__toggler").on("click", function(){
	    	$(".search-field .switch_btn_one").addClass("active");
	    })     
	    $(".switch_btn_one .close-btn").on("click", function(){
	    	$(".search-field .switch_btn_one").removeClass("active");
	    }) 
    }
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}



	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}


    //two-column-carousel
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<span class="fas fa-algle-left"></span>', '<span class="fas fa-algle-left-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}


    //three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}


	// Five Item Carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}


	// single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}




	// deals Carousel
	if ($('.deals-carousel').length) {
		$('.deals-carousel').owlCarousel({
			loop:true,
			margin:50,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}


	// banner-carousel
	if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="far fa-angle-left"></span>', '<span class="far fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}

	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 10000,
			values: [ 1000, 5000 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}

	//Area Range Slider
	if($('.area-range-slider').length){
		$( ".area-range-slider" ).slider({
			range: true,
			min: 0,
			max: 7000,
			values: [ 700, 4000 ],
			slide: function( event, ui ) {
			$( "input.area-range" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.area-range" ).val( $( ".area-range-slider" ).slider( "values", 0 ) + " - sq ft" + $( ".area-range-slider" ).slider( "values", 1 ) );	
	}


    // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}


	$(document).ready(function() {
      $('select:not(.ignore)').niceSelect();
    });


    // color switcher
	function swithcerMenu() {
	  	if ($('.switch_menu').length) {

	    	$('.switch_btn button').on('click', function(){
	      	$('.switch_menu').toggle(500)
	    	});

	    	$('#styleOptions').styleSwitcher({
	        hasPreview: true,
	        fullPath: 'assets/css/color/',
	         	cookie: {
	          	expires: 30,
	          	isManagingLoad: true
	      		}
	    	});

	  	};
	}


	// page direction
	function directionswitch() {
	  	if ($('.page_direction').length) {

	    	$('.direction_switch button').on('click', function() {
			   $('body').toggleClass(function(){
			      return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
			  })
			});
	  	};
	}


	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.1,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'vertical' // vertical, horizontal  
		});
	}

	if($('.paroller-2').length){
		$('.paroller-2').paroller({
			  factor: -0.1,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: -0.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'vertical' // vertical, horizontal  
		});
	}

	// Date picker
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}



	// Time picker
	function timepicker () {
	    if ($('input[name="time"]').length) {
	        $('input[name="time"]').ptTimeSelect();
	    }
	}


	if ($('.property-details .bxslider').length) {
		$('.property-details .bxslider').bxSlider({
			auto:true,
	        nextSelector: '.property-details #slider-next',
	        prevSelector: '.property-details #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.property-details .slider-pager .thumb-box'
	    });
	};


	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			directionswitch();
			swithcerMenu();
			datepicker ();
			timepicker ();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

	

})(window.jQuery);





// mayur added js




function openImagePopup(index) {
    var images = [
        'assets/images/propertyImg/1.jpg',
        'assets/images/propertyImg/2.jpg',
        'assets/images/propertyImg/3.jpg',
        'assets/images/propertyImg/4.jpg',
        'assets/images/propertyImg/5.jpg',
        // Add more image URLs as needed
		// add images to property details section here
    ];

    var currentIndex = index || 0;

    // Create a new image element
    var img = document.createElement('img');
    img.src = images[currentIndex];

    // Create a container div for the popup
    var popup = document.createElement('div');
    popup.classList.add('image-popup');
    popup.appendChild(img);

    // Add previous and next buttons
    var prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.classList.add('prev-btn');
    prevBtn.addEventListener('click', function() {
        navigateImages(-1);
    });

    var nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('next-btn');
    nextBtn.addEventListener('click', function() {
        navigateImages(1);
    });

    popup.appendChild(prevBtn);
    popup.appendChild(nextBtn);

    // Append the popup to the body
    document.body.appendChild(popup);

    // Close the popup when clicked outside the image
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.remove();
        }
    });

    function navigateImages(step) {
        currentIndex += step;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        img.src = images[currentIndex];
    }
}



// added for the map
function initMap() {
	const mapElement = document.getElementById('map');
	const locationForm = document.getElementById('locationForm');

	locationForm.addEventListener('submit', function(event) {
		event.preventDefault();
		
		const locationInput = document.getElementById('location').value;

		// Use Geocoding service to convert location input into coordinates
		const geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: locationInput }, function(results, status) {
			if (status === 'OK') {
				const map = new google.maps.Map(mapElement, {
					center: results[0].geometry.location,
					zoom: 8
				});

				const marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	});
}






























// var currentIndex = 0;

// function openImagePopup(index) {
//     currentIndex = index;

//     // Create a new image element
//     var img = document.createElement('img');
//     img.src = images[index];

//     // Create a container div for the popup
//     var popup = document.createElement('div');
//     popup.classList.add('image-popup');
//     popup.appendChild(img);

//     // Add previous and next buttons
//     var prevBtn = document.createElement('button');
//     prevBtn.textContent = 'Previous';
//     prevBtn.classList.add('prev-btn');
//     prevBtn.addEventListener('click', function() {
//         navigateImages(-1);
//     });

//     var nextBtn = document.createElement('button');
//     nextBtn.textContent = 'Next';
//     nextBtn.classList.add('next-btn');
//     nextBtn.addEventListener('click', function() {
//         navigateImages(1);
//     });

//     popup.appendChild(prevBtn);
//     popup.appendChild(nextBtn);

//     // Append the popup to the body
//     document.body.appendChild(popup);

//     // Close the popup when clicked outside the image
//     popup.addEventListener('click', function(event) {
//         if (event.target === popup) {
//             popup.remove();
//         }
//     });
// }

// function navigateImages(step) {
//     currentIndex += step;
//     if (currentIndex < 0) {
//         currentIndex = images.length - 1;
//     } else if (currentIndex >= images.length) {
//         currentIndex = 0;
//     }

//     var img = document.querySelector('.image-popup img');
//     img.src = images[currentIndex];
// }



// mayur added js

// basic details 
function toggleBasicDetails() {
	var basicDetails = document.getElementById("basicDetails");
	var div1 = document.getElementById("div1");


	if (basicDetails.classList.contains("d-none")) {

		basicDetails.classList.remove("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div1.classList.add("active");

		// adding active class
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
}


// locality Details
function toggleLocalityDetails() {
	var localityDetails = document.getElementById("localityDetails");
	var div2 = document.getElementById("div2");

	if (localityDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.remove("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");
		

		// adding active class
		div2.classList.add("active");


		// adding active class
		div1.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	} 
//     else {
//         localityDetails.classList.add("d-none");
}

// property Details  
function togglePropertyDetails() {
	var propertyDetails = document.getElementById("propertyDetails");
	var div3 = document.getElementById("div3");


	if (propertyDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.remove("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div3.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
	
	
		
	
}


// amenities   
function toggleAmenitiesDetails() {
	var amenitiesDetails = document.getElementById("amenitiesDetails");
	var div4 = document.getElementById("div4");


	if (amenitiesDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.remove("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div4.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
}


// pricing details   
function togglePricingDetails() {
	var pricingDetails = document.getElementById("pricingDetails");
	var div5= document.getElementById("div5");


	if (pricingDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.remove("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div5.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
}


// gallery Details
function toggleGalleryDetails() {
	var galleryDetails = document.getElementById("galleryDetails");
	var div6 = document.getElementById("div6");

	if (galleryDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.remove("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div6.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
}

// brouchure Details
function toggleBrouchureDetails() {
	var brouchureDetails = document.getElementById("brouchureDetails");
	var div7 = document.getElementById("div7");

	if (brouchureDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.remove("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div7.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
}
// developer / builder information
function toggleInformationDetails() {
	var informationDetails = document.getElementById("informationDetails");
	var div8= document.getElementById("div8");

	if (informationDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.remove("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div8.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div9.classList.remove("active");
		div10.classList.remove("active");
	}
}


// owner information
function toggleOwnerDetails() {
	var ownerDetails = document.getElementById("ownerDetails");
	var div9= document.getElementById("div9");

	if (ownerDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.remove("d-none");
		scheduleDetails.classList.add("d-none");

		// adding active class
		div9.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div10.classList.remove("active");
	}
}

// schedule Details
function toggleScheduleDetails() {
	var scheduleDetails = document.getElementById("scheduleDetails");
	var div10 = document.getElementById("div10");

	if (scheduleDetails.classList.contains("d-none")) {
		basicDetails.classList.add("d-none");
		localityDetails.classList.add("d-none");
		propertyDetails.classList.add("d-none");
		amenitiesDetails.classList.add("d-none");
		pricingDetails.classList.add("d-none");
		galleryDetails.classList.add("d-none");
		brouchureDetails.classList.add("d-none");
		informationDetails.classList.add("d-none");
		ownerDetails.classList.add("d-none");
		scheduleDetails.classList.remove("d-none");

		// adding active class
		div10.classList.add("active");

		// adding active class
		div1.classList.remove("active");
		div2.classList.remove("active");
		div3.classList.remove("active");
		div4.classList.remove("active");
		div5.classList.remove("active");
		div6.classList.remove("active");
		div7.classList.remove("active");
		div8.classList.remove("active");
		div9.classList.remove("active");
		
	}
}




//mayur added js for basic details active button
// function togglePropertyType(divId) {
// 	var propertyDivs = document.querySelectorAll('.property-form-group:not(#sellDiv):not(#rentDiv):not(#pgDiv):not(#projectsDiv)');

// 	propertyDivs.forEach(function(div) {
// 		div.style.display = 'none';
// 	});

// 	var selectedDiv = document.getElementById(divId);
// 	selectedDiv.style.display = 'block';
// }



// mayur added for the visit Schedule important

function selectDay(id) {
	// Remove 'selected' class from all elements
	var elements = document.querySelectorAll('.availability2');
	elements.forEach(function(element) {
		element.classList.remove('selected');
	});

	// Add 'selected' class to the clicked element
	var selectedElement = document.getElementById(id);
	selectedElement.classList.add('selected');
}