/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

(function ($) {

	"use strict";

	// ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	var overlayMenu = function () {

		if (!$('.nav-overlay').length) {
			return false;
		}

		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-btn');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}

	// init jarallax parallax
	var initJarallax = function () {
		jarallax(document.querySelectorAll(".jarallax"));

		jarallax(document.querySelectorAll(".jarallax-keep-img"), {
			keepImg: true,
		});
	}

	// init Chocolat light box
	var initChocolat = function () {
		Chocolat(document.querySelectorAll('.image-link'), {
			imageSize: 'contain',
			loop: true,
		})
	}

	var initSwiper = function () {

				// Portfolio Carousel
		var swiper1 = new Swiper(".portfolio-carousel", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			navigation: {
			nextEl: ".portfolio-carousel-next",
			prevEl: ".portfolio-carousel-prev",
			},
			breakpoints: {
			0: { slidesPerView: 1, spaceBetween: 20 },
			599: { slidesPerView: 2, spaceBetween: 10 },
			980: { slidesPerView: 3, spaceBetween: 5 },
			},
		});

		// Testimonial Carousel
		var swiper2 = new Swiper(".testimonial-carousel", {
			slidesPerView: 1, // default for small screens
			spaceBetween: 20,
			loop: false,
			navigation: {
				nextEl: ".testimonial-carousel-next",
				prevEl: ".testimonial-carousel-prev",
			},
			breakpoints: {
				768: {
				slidesPerView: 2, // tablets and small laptops
				},
				1000: {
				slidesPerView: 2, // force 2 slides at 1000px and up
				},
				1200: {
				slidesPerView: 3, // optional: show 3 only on ultra-wide screens
				},
			}
		});

		if (window.innerWidth > 430) {
			new Swiper(".testimonial-carousel", {
				slidesPerView: 2,
				spaceBetween: 20,
				loop: false,
				navigation: {
					nextEl: ".testimonial-carousel-next",
					prevEl: ".testimonial-carousel-prev",
				},
				breakpoints: {
					768: { slidesPerView: 2 },
					1000: { slidesPerView: 2 },
					1200: { slidesPerView: 3 },
				},
			});
		}
		
	}

    function initIsotope() {
        // Initialize Isotope
        var $container = $('.isotope-container').isotope({
            itemSelector: '.item',
            layoutMode: 'masonry'
        });

        // Active button class management
        $('.filter-button').on('click', function () {
            $('.filter-button').removeClass('active');
            $(this).addClass('active');
            
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
    }

    $(document).ready(function () {
        overlayMenu();
        initChocolat();
        initJarallax();
        initSwiper();

        AOS.init({
            duration: 1500,
            once: true,
        });

        // Initialize isotope after all images are loaded
        $(window).on('load', function() {
			
			// Fade out preloader
            $("#overlayer").fadeOut("slow");
            $('body').addClass('loaded');
            initIsotope();
        });
    });


})(jQuery);