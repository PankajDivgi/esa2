window.onbeforeunload = function () {
    if(!mainScroll){
        $('body >*').css({
            'display': 'none'
        });
    }
};
var maxServiceHeight = 0;
var maxRemHeight = 0;
var mainScroll;

/* eslint-env browser */
(function() {
  'use strict';


  
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
       
        if (navigator.serviceWorker.controller) {
         
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }
    $('#tabs-container').css({
        'height': $('.tabs-inner-list').height()+'px'
    });



    $('.tabs-mob-slider-inner').each(function(key,el) {
        if($(el).children('.tabs-mob-slide').eq(0).height() > maxServiceHeight) {
            maxServiceHeight = $(el).children('.tabs-mob-slide').eq(0).height()
        }
        $(el).children('.tabs-mob-slide').each(function(k,e) {
            if($(e).height() > maxRemHeight) {
                maxRemHeight = $(e).height();
            }
        })
    })
    $('.tabs-mob-slider-inner').css('height', maxServiceHeight);

    // $('.tabs-mob-slider-inner').css({
    //     'height': $('.tabs-inner-list').height()+'px'
    // });



  $(document).ready(function(){

      if (window.innerWidth <= 600) {
          // $('.tabs-mob-slider').each(function(key,elem) {
          //     $(elem).children('.tabs-mob-slide').eq(0).each(function(k,e) {
          //         console.log(e.height());
          //     });
          //     // $(elem).children('.tabs-mob-slide').eq(0).css('min-height', Math.max());
          // })
          // $('.tabs-mob-slider .tabs-mob-slide').eq(0).equalHeight();
          // tabs-mob-slider
          $('.mob-only-tabs-inner').addClass('is-show');
          // $('.tab-nav-item').eq(0).click();
          $('.tab-nav-item').eq(0).addClass('active');
          $('#do-mob-slider-1').addClass('active');
          $('.mob-only-tabs-inner').addClass('no-rounded-top_left');

          // if ($('.tabs-mob-slider-inner .tabs-mob-slide:nth-child(1)').hasClass('swiper-slide-active')) {
          //     $('#do-mob-slider-1 .tabs-mob-slider-inner').css({
          //         'height': $('#do-mob-slider-1 .tabs-mob-slider-inner .tabs-mob-slide').eq(0).height()+'px'
          //     })
          // }
      } else {
          $('.mob-only-tabs-inner').removeClass('is-show');
          $('.tab-nav-item').removeClass('active');
      }

      if ($('.research-item').length == 1) {
          $('.research-item').addClass('centered');
      } else {
          $('.research-item').removeClass('centered');
      }

      $('.research-title').equalHeight();
      $('.research-text').equalHeight();

      // Ellipsity.ellipsify(document.querySelector('.tab-inner-item'));
      // var textArr = document.querySelectorAll('.tab-content-text .text');
      // textArr.forEach(function (el) {
      //     Ellipsity.ellipsify(el);
      // })

      // Ellipsity.ellipsify(document.querySelector('.tab-content-text .text'));


      var $partnersItemArr = $('.partners-item');
      var $researchItemArr = $('.research-item');

      var $testimonialsItemArr = $('.testimonials-item');
      var delay = 0.1;
      $partnersItemArr.each(function (key, el) {
          $(el).children().css('transition-delay', delay + 's');
          delay += 0.15;
      });
      var testDelay = 0.2;
      $testimonialsItemArr.each(function (key, el) {
          $(el).children().children().children().css('transition-delay', testDelay + 's');
          testDelay += 0.18;
      });

      var resDelay = 0.2;
      $researchItemArr.each(function (key, el) {
          $(el).children().each(function(k,elm) {
              $(elm).css('transition-delay', resDelay + 's');
              resDelay += 0.18;
          })
          resDelay = 0.2;
      });

      var resBulDel = 0.3;
      var $resBulletsArr = $('.research-slider .swiper-pagination-bullet');
      $resBulletsArr.each(function(key, el) {
          $(el).css('transition-delay', resBulDel + 's');
          resBulDel += 0.11;
      });

      var testBulDelay = .5;
      var $testBulletsArr = $('.testimonials-slider .swiper-pagination-bullet');
      $testBulletsArr.each(function(key, el) {
          $(el).css('transition-delay', testBulDelay + 's');
          testBulDelay +=0.11;
      });

      var partBulDelay = 0.18;
      var $partBulletsArr = $('.partners-swiper .swiper-pagination-bullet');
      $partBulletsArr.each(function(key, el) {
          $(el).css('transition-delay', partBulDelay + 's');
          partBulDelay +=0.11;
      });


      //----------------FORM validation

      function validateEmail(sEmail) {
          var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
          if (filter.test(sEmail)) {
              return true;
          }
          else {
              return false;
          }
      };

var $inputArr = $('#form-callback .cback-input');

$('html').on('submit', '.form-callback', function(event) {
	event.preventDefault();
	if (!$('#form-submit-btn').hasClass('processing')){
		var name = $('#cb-name');
		var mail = $('#cb-email');
		var telUser = $('#cb-tel-user');
		var sbj = $('#cb-subj');
		var msg = $('#cb-msg');

		var error = false;
		var sEmail = $("#cb-email"),
		sEmailVal = sEmail.val();
		$inputArr.each(function(key,elem) {
			if($(elem).val() == '' && $(elem).hasClass('req')) {
				$(elem).addClass('error');
				error = true;
			} else {
				$(elem).removeClass('error');
			}
		})
		if (validateEmail(sEmailVal)) {
			sEmail.removeClass("error");
		}
		else {
			sEmail.addClass("error");
			error = true;
		}

		if (! error) {
			$('#form-submit-btn').addClass('processing');
			// $.post('/send.php', {
				// action: 'submit',
				// name: name.val(),
				// mail: mail.val(),
				// telUser: telUser.val(),
				// sbj: sbj.val(),
				// msg: msg.val()}, function(data) {});
			$.ajax({
				url: 'ajaxmail.php',
				type: "POST",
				dataType: "json",
				data: {
					"action": "sendMail",
					"subject": sbj.val(),
					"message": msg.val(),
					"telegram": telUser.val(),
					"name": name.val(),
					"email": mail.val()
				},
				success: function (data) {
					$('#form-submit-btn').removeClass('processing');
					alert('The manager will get in touch with you shortly. Please don\'t forget to check your inbox ;)');
					document.getElementById("form-callback").reset();
				},
				error: function(data){
					$('#form-submit-btn').removeClass('processing');
					if (data.responseText == 'success'){
						alert('The manager will get in touch with you shortly. Please don\'t forget to check your inbox ;)');
						document.getElementById("form-callback").reset();
					}
				}
			});
		}
	}
})

      // ---------------------

      window.scrollTo(0,0);

      (function(){
          window.scrollTo(0,0);

          setTimeout(function () {
              window.scrollTo(0,0);
          }, 1)

          if(mainScroll) {
              mainScroll.scrollTo(0, 0, 0);
          }
      })();

      if(!isMobile()){

          mainScroll = Scrollbar.init(document.querySelector('#wrap-screens'), {
              alwaysShowTracks: true,
          });

          var $mainScreen = $('#main-screen');
          var $weDoTabs = $('#we-do-tabs');
          var $testimScreen = $('#testim-screen');
          var $resScreen1 = $('#res-screen1');
          var $partnersScreen = $('#partners-screen');
          var $contactsScreen = $('#contacts-screen');




          var $tabsContent = $('#tabs-content');

          if($('.nav-wrap').hasClass('active')){
              toggleMenu();
          }

          mainScroll.addListener(function (status) {


              if(elementScrolled( $mainScreen[0] )){
                  $('body').attr('data-page', 1);
                  $mainScreen.addClass('show');
              }

              if(elementScrolled( $weDoTabs[0] )){
                  $('body').attr('data-page', 3);

                  if(!$weDoTabs.hasClass('show')){
                      setTimeout(function(){ $weDoTabs.addClass('change-trans-delay') }, 1200);
                      setTimeout(function(){ $weDoTabs.removeClass('non-click') }, 1700);
                  }

                  $weDoTabs.addClass('show non-click');

                  if ($('.mob-only-tabs-inner').hasClass('is-show')) {
                      setTimeout(function () {
                          $('.do-mob-slider-wrap.active .tab-text').addClass('show');
                      }, 300);
                      $('.do-mob-slider-wrap.active .swiper-pagination').addClass('show');
                      setTimeout(function () {
                          $('.do-mob-slider-wrap.active .swiper-pagination-bullet').css('transition-delay', '0s');
                      },800)
                      $('.mob-only-tabs-inner .talk-mngr-btn').addClass('show');
                  }
              }

              if(elementScrolled( $testimScreen[0] )){
                  $('body').attr('data-page', 4);
                  $testimScreen.addClass('show');

                  setTimeout(function() {
                      $testimonialsItemArr.each(function (key, el) {
                              $(el).addClass('show');
                              $('.testimonials-slider .swiper-pagination').addClass('show');
                          setTimeout(function() {
                              $('.testimonials-slider .swiper-pagination-bullet').css('transition-delay', '');
                          },1000);
                          // }
                      });
                  },100)
              }

              if(elementScrolled( $resScreen1[0] )){
                  $('body').attr('data-page', 5);
                  $resScreen1.addClass('show');
                  setTimeout(function() {
                      $researchItemArr.each(function (key, el) {
                          $('.research-slider .swiper-pagination').addClass('show');
                          $(el).addClass('show');
                          setTimeout(function() {
                              $('.research-slider .swiper-pagination-bullet').css('transition-delay', '');
                          },1000);
                      });
                  }, 100)

              }
              // =====================================================

              // RESEARCH SLIDER

              var ResNumSlides = researchSwiper.params.slidesPerView;

              // =========================================

              // TESTIMONIALS SLIDER

              var TestNumSlides = mySwiper.params.slidesPerView;

              // ============================================

              // PARTNERS SLIDER

              var numSlides = partnersSwiperDesc.params.slidesPerView;
              // -----------------------------------------------

              if(elementScrolled( $partnersScreen[0] )){
                  $('body').attr('data-page', 6);
                  $partnersScreen.addClass('show');
                  if($('#tab1').hasClass('active')) {
                      setTimeout(function() {
                          $partnersItemArr.each(function (key, el) {
                              // if(elementScrolled( el ) && $(el).is(':visible') && $('.partners-inner').hasClass('active')){
                              $(el).addClass('show');
                              $('.partners-swiper .swiper-pagination').addClass('show');
                              setTimeout(function() {
                                  $('.partners-swiper .swiper-pagination-bullet').css('transition-delay', '');
                              },1500);
                              // }
                          });
                      },100);
                  }

              }


              if(elementScrolled( $partnersScreen[0] )){
                  $('body').attr('data-page', 6);
                  $partnersScreen.addClass('show');
                  if($('#tab1').hasClass('active')) {
                      setTimeout(function() {
                          $partnersItemArr.each(function (key, el) {
                              $(el).addClass('show');
                              $('.partners-swiper .swiper-pagination').addClass('show');
                              setTimeout(function() {
                                  $('.partners-swiper .swiper-pagination-bullet').css('transition-delay', '');
                              },1500);
                          });
                      },100);
                  }

              }

              if(elementScrolled( $contactsScreen[0] )){
                  $('body').attr('data-page', 6);
                  $contactsScreen.addClass('show');
              }
          });
      }
  });

  // Your custom JavaScript goes here

    // Slider


    window.mySwiper = new Swiper ('.testimonials-slider', {
        // Optional parameters
        // loop: true,
        dir: 0,
        speed: 700,
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 45,
        allowTouchMove : isMobile(),
        breakpoints: {
            1600: {
                spaceBetween: 30,
            },
            920: {
                spaceBetween: 25,
                slidesPerView: 1,
                slidesPerColumn: 2,
            },
            600: {
                spaceBetween: 25,
                slidesPerView: 1,
                slidesPerColumn: 1,
            }
        },
        // effect: 'coverflow',
        // coverflowEffect: {
        //     rotate: 190,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows : false,
        // },

        // If we need pagination
        pagination: {
            el: '#test-pagination',
            type: 'bullets',
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '#btn-next',
            prevEl: '#btn-prev'
        }
    })


    var partnersSwiper = new Swiper ('#partners-swiper', {
        // Optional parameters
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '#partners-swiper-pagin',
            type: 'bullets',
            clickable: true
        },
        // // Navigation arrows
        // navigation: {
        //     nextEl: '#btn-next',
        //     prevEl: '#btn-prev'
        // }
    })



    var clientsSwiper = new Swiper ('#clients-swiper', {
        // Optional parameters
        speed: 700,
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerColumn: 3,
        breakpoints: {
            400: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: '#clients-swip-pagin',
            type: 'bullets',
            clickable: true
        },
        // // Navigation arrows
        // navigation: {
        //     nextEl: '#btn-next',
        //     prevEl: '#btn-prev'
        // }
    })

    window.researchSwiper = new Swiper ('#research-swiper', {
        dir: 0,
        // Optional parameters
        speed: 700,
        slidesPerView: 2,
        spaceBetween: 200,
        allowTouchMove : isMobile(),
        breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 80
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            800: {
                slidesPerView: 1,
                // spaceBetween: 1
            }
        },
        pagination: {
            el: '#res-test-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '#btn-next2',
            prevEl: '#btn-prev2'
        }
    })

    window.partnersSwiperDesc = new Swiper ('#partners-slider', {
        speed: 700,
        slidesPerView: 5,
        spaceBetween: 50,
        allowTouchMove : isMobile(),
        breakpoints: {
            1440: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: '#partners-swiper-pagin',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '#btn-next3',
            prevEl: '#btn-prev3'
        }
    })


    // -----Mob-only tabs Sliders --------------


    window.mobMarketSlider = new Swiper ('.market-mob-slider', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 50,
        on: {
            slideChange: function () {
                setTimeout(function () {
                    if ($('.market-mob-slider .tabs-mob-slide:nth-child(1)').hasClass('swiper-slide-active')) {
                        $('.tabs-mob-slider-inner').css({'height': maxServiceHeight+'px'});
                    } else {
                        $('.tabs-mob-slider-inner').css({'height': maxRemHeight+'px'});
                    }
                },1)
            }
        },
        // autoHeight: true,
        pagination: {
            el: '#market-mob-pagination',
            type: 'bullets',
            clickable: true
        }
    })

    window.mobConsaltSlider = new Swiper ('.cons-mob-slider', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 50,
        // autoHeight: true,
        on: {
            slideChange: function () {
                setTimeout(function () {
                    if ($('.cons-mob-slider .tabs-mob-slide:nth-child(1)').hasClass('swiper-slide-active')) {
                    } else {
                        $('.tabs-mob-slider-inner').css({'height': maxRemHeight+'px'});
                    }
                },1)
            }
        },
        pagination: {
            el: '#cons-mob-pagination',
            type: 'bullets',
            clickable: true
        }
    })

    window.mobAnalytSlider = new Swiper ('.analyt-mob-slider', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 50,
        on: {
            slideChange: function () {
                setTimeout(function () {
                    if ($('.analyt-mob-slider .tabs-mob-slide:nth-child(1)').hasClass('swiper-slide-active')) {
                    } else {
                        $('.tabs-mob-slider-inner').css({'height': maxRemHeight+'px'});
                    }
                },1)
            }
        },
        pagination: {
            el: '#analyt-mob-pagination',
            type: 'bullets',
            clickable: true

        }
    })

    clientsSwiper.update();
    setTimeout(function () {
        clientsSwiper.update();
    }, 1000)






    // Menu
        if(isMobile()) {
            $('.hamburger').on('click', function() {
                toggleMenu();
            });
        } else {
            $('.hamburger').on('mouseenter', function(e) {
                $(this).addClass('close');
                $('.nav-wrap').addClass('active');
                $('.main-nav').addClass('active');
            })

            $('.nav-wrap').on('mouseout', function(e) {
                
                if(!$(e.relatedTarget).closest('.nav-wrap').length || !$(this).closest('.nav-wrap').length || !$(e.target).closest('.nav-wrap').length){
                    $('.nav-wrap').removeClass('active');
                    $('.main-nav').removeClass('active');
                    $('.hamburger').removeClass('close');
                }
            })
        }


    if( isMobile() ){
        $('html').addClass('mobile');
    }

    // Tabs

    $('.tab-nav-item').on('click', function() {
        var dataNum = $(this).data('num');

        if($('.mob-only-tabs-inner').hasClass('is-show')) {
            if ($('#do-mob-slider-' + dataNum + ' .tabs-mob-slide:first-child').hasClass('swiper-slide-active')) {
                $('.tabs-mob-slider-inner').animate({'height': maxServiceHeight},200);
            } else {
                $('.tabs-mob-slider-inner').animate({
                    'height': maxRemHeight
                },200)
            }
            $('.do-mob-slider-wrap').removeClass('active');
            $('#do-mob-slider-' + dataNum).addClass('active');
            $('.tab-text').removeClass('show');
            setTimeout(function () {
                $('#do-mob-slider-' + dataNum).find('.tab-text').addClass('show');
            },50)
            $('.do-mob-slider-wrap .swiper-pagination').removeClass('show');
            $('#do-mob-slider-' + dataNum).find('.swiper-pagination').addClass('show');
            setTimeout(function () {
                $('.do-mob-slider-wrap.active .swiper-pagination-bullet').css('transition-delay', '0s');
            },800)


            if (dataNum == 1) {
                $('.mob-only-tabs-inner').removeClass('no-rounded-top_right');
                $('.mob-only-tabs-inner').addClass('no-rounded-top_left');
            } else if ( dataNum == 3) {
                $('.mob-only-tabs-inner').removeClass('no-rounded-top_left');
                $('.mob-only-tabs-inner').addClass('no-rounded-top_right');
            }
            else {
                $('.mob-only-tabs-inner').removeClass('no-rounded-top_left');
                $('.mob-only-tabs-inner').removeClass('no-rounded-top_right');
            }
        } else {
            $('.tabs-inner-list').removeClass('hide');
            $('.tab-inner-content').removeClass('active');

            $('.tabs-inner-list').addClass('hide');
            $('.tab-inner-content').addClass('active');
            if (dataNum == 2) {
                $('.tab-inner-content').addClass('rounded_left');
                $('.tab-inner-content').addClass('rounded_right');
                $('.tab-inner-content').removeClass('norounded_right');
                $('.tab-inner-content').removeClass('norounded_left_bot');
            } else if (dataNum == 3) {
                $('.tab-inner-content').removeClass('rounded_right');
                $('.tab-inner-content').addClass('rounded_left');
                $('.tab-inner-content').addClass('norounded_right');
                $('.tab-inner-content').addClass('norounded_left_bot');
                $('.tab-inner-content').removeClass('rounded-top-right');

            } else {
                $('.tab-inner-content').removeClass('rounded_left');
                $('.tab-inner-content').removeClass('norounded_right');
                $('.tab-inner-content').addClass('rounded_right');
                // $('.tab-inner-content').addClass('rounded-top-right');
                $('.tab-inner-content').removeClass('norounded_left_bot');
            }
            $('#tab-content-' + dataNum).removeClass('hide');
            $('#tab-nav-' + dataNum).addClass('active');
        }


    })

    // Partners/Clients Tabs

    $('.tab-link').on('click', function(e) {
        $('.tab').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-inner').removeClass('active');

        var self = this;


        var data = $(self).data('tab');

                if(data == 'tab2') {
                    $('#clients-swip-pagin').addClass('show');
                    $('.partners-item').each(function(key, elem) {
                        $(elem).removeClass('show');
                    })
                    $('.partners-item').children().css('transition-delay', '0s');
                    $('.partners-swiper .swiper-button-next, .partners-swiper .swiper-button-prev').css('transition', '0s');

                } else if (data == 'tab1'){
                    $('#clients-swip-pagin').removeClass('show');
                    var $partnersItemArr = $('.partners-item');


                        var delay = 0.1;
                        $partnersItemArr.each(function (key, el) {
                            $(el).children().css('transition-delay', delay + 's');
                            delay += 0.15;
                        });
                    // setTimeout(function() {
                        $('.partners-item').addClass('show');
                    // },10);
                }

        $('#' + data).addClass('active');
    });

})();

function toggleMenu() {
    $('.hamburger').toggleClass('close').addClass('none-click');
    $('.main-nav, .nav-wrap').toggleClass('active');

    setTimeout(function(){ $('.hamburger').removeClass('none-click') }, 600);
}

// if(isMobile()) {
    $(document).on('click', function (e) {
        if($(e.target).hasClass('nav-wrap')){
            toggleMenu();
            return false;
        }

        if(!$(e.target).closest('.nav-wrap').length && $('.nav-wrap').hasClass('active') && !$(e.target).closest('.hamburger').length){
            toggleMenu();
        }
    });
// }

$('.toggle-chat').on('click', function () {
    var indexTabBtn = $(this).attr('data-num');
    var nextTab = $('.tab-content-list').eq(indexTabBtn-1);
    var doTabs = $('#do-tabs-inner');

    doTabs.addClass('show-chat');

   $('#chat-exit').addClass('show');
});

$('.tab-nav-item').on('mouseenter', function (e) {

    var self = $(this).closest('.tab-nav-item');

    if($(self).index() != 0){
        $('.tab-inner-content').addClass('rounded');
    } else {
        $('.tab-inner-content').removeClass('rounded');
    }

    $('.tab-content-list').eq($('.tab-nav-item.active').index()).addClass('hide');

    $('.tab-nav-item.active').removeClass('active');
    $(this).addClass('active');
    $('.tab-nav-item[data-num="'+ ($(self).index()+1) +'"]').click();


    var nextTab = $('.tab-content-list').eq($(self).index());

    setTimeout(function () {
        $('#tabs-container').animate({
            'height': nextTab.height()
        }, 400);
    }, 100);
});
//
if(!isMobile()){

    $('.tab-nav-item, .do-tabs-inner').on('mouseout', function (e) {
        if($('.mob-only-tabs-inner').hasClass('is-show')) {
            return;
        } else {
            if(e.relatedTarget !== null && !$(e.relatedTarget).closest('.tab-nav-item').length && !$(e.relatedTarget).closest('.do-tabs-inner').length){
                $('.tab-nav-item').each(function(key,el) {
                    // $(el).css('transition-delay', '0s');
                })
                $('#chat-exit').click();
            }
        }
        // console.log('out');

    });
}

$('.chat-exit').on('click', function () {
    // console.log('click');

    $(this).removeClass('show');

    $('.tab-nav-item').removeClass('active');


    var $showedTab = $('.tab-content-list:not(.hide)');

    // setTimeout(function () {
        $('#do-tabs-inner').removeClass('show-chat');
        $showedTab.addClass('hide');
        $('.tabs-inner-list').removeClass('hide');
        $('.tab-inner-content').removeClass('active');
        $('.tab-nav-item').removeClass('active');

        if($(this).hasClass('mob-only')) {
            $('html, body').animate({
                scrollTop: $("#we-do-tabs").offset().top
            }, 500);
        }


        $('#tabs-container').animate({
            'height': $('.tabs-inner-list').height(),
        }, 300);
    // }, 1);

});

