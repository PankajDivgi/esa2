$(window).on('scroll', function () {

    var $mainScreen = $('#main-screen');
    var $weDoTabs = $('#we-do-tabs');
    var $testimScreen = $('#testim-screen');
    var $resScreen1 = $('#res-screen1');
    var $partnersScreen = $('#partners-screen');
    var $contactsScreen = $('#contacts-screen');


    var $researchItemArr = $('.research-item');
    var $testimonialsItemArr = $('.testimonials-item');

    var $partnersItemArr = $('.partners-item');
    var $tabsContent = $('#tabs-content');

    if($('.nav-wrap').hasClass('active')){
        toggleMenu();
    }

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
                $('.testimonials-slider .swiper-pagination').addClass('show');
                $(el).addClass('show');
            });
        },200)
        setTimeout(function() {
            $('.testimonials-slider .swiper-pagination-bullet').css('transition-delay', '');
        },1000);
    }

    if(elementScrolled( $resScreen1[0] )){
        $('body').attr('data-page', 5);
        $resScreen1.addClass('show');
        // if ($('.tab-inner-content').hasClass('active')) {
        //     $('#chat-exit').click();
        // }
        setTimeout(function() {
            $researchItemArr.each(function (key, el) {
                $('.research-slider .swiper-pagination').addClass('show');
                $(el).addClass('show');
            });
        },200)
        setTimeout(function() {
            $('.research-slider .swiper-pagination-bullet').css('transition-delay', '');
        },1000);

    }

    // $testimonialsItemArr.each(function (key, el) {
    //     if(elementScrolled( el ) && $(el).is(':visible')){
    //         $('.testimonials-slider .swiper-pagination').addClass('show');
    //         $(el).addClass('show');
    //         setTimeout(function() {
    //             $('.testimonials-slider .swiper-pagination-bullet').css('transition-delay', '');
    //         },1000);
    //     }
    // });

    if(elementScrolled( $partnersScreen[0] )){
        $('body').attr('data-page', 6);
        $partnersScreen.addClass('show');
        if($('#tab1').hasClass('active')) {
            setTimeout(function() {
                $partnersItemArr.each(function (key, el) {
                    $('.partners-swiper .swiper-pagination').addClass('show');
                    $(el).addClass('show');
                });
            },200)
            setTimeout(function() {
                $('.partners-swiper .swiper-pagination-bullet').css('transition-delay', '');
            },1500);
        }
    }


    if(elementScrolled( $partnersScreen[0] )){
        $('body').attr('data-page', 6);
        $partnersScreen.addClass('show');
        if($('#tab1').hasClass('active')) {
            setTimeout(function() {
                $partnersItemArr.each(function (key, el) {
                    $('.partners-swiper .swiper-pagination').addClass('show');
                    $(el).addClass('show');
                });
            },200)
            setTimeout(function() {
                $('.partners-swiper .swiper-pagination-bullet').css('transition-delay', '');
            },1500);
        }
    }

    if(elementScrolled( $contactsScreen[0] )){
        $('body').attr('data-page', 6);
        $contactsScreen.addClass('show');
    }

});


function elementScrolled(elem) {
    if(mainScroll){
        var docViewTop = mainScroll.offset.y;
        var docViewBottom = docViewTop + $(window).height()/1.5;
        var elemTop = mainScroll.offset.y+$(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    else{
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height()/1.5;
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
}


$('#learn-more').on('click', function () {
    $('a.main-nav-link[data-screen="we-do-tabs"]').click();
    // var elemPos = $('#we-do-tabs').offset().top;
    // var elemHeight = $('#we-do-tabs').height();
    // var diff = ($(window).height() - elemHeight)/2;
    // var scrollPos = elemPos - diff;
    // if(mainScroll){
    //     mainScroll.scrollIntoView(document.getElementById('we-do-tabs'), {
    //         offsetTop: diff
    //     })
    // }
    // else{
    //     $('html, body').animate({
    //         scrollTop: scrollPos
    //     }, 800);
    // }
});

$('.talk-mngr-btn').on('click', function () {
    $('a.main-nav-link[data-screen="contacts-screen"]').click();
})

$('a.main-nav-link').on('click', function (e) {
    e.preventDefault();

    toggleMenu();

    var linkData = $(this).data('screen');
    var elemPos = $('#'+ linkData + ' .sect-inner').offset().top;
    var elemHeight = $('#'+ linkData + ' .sect-inner').height();


    if(linkData == 'partners-screen') {
        elemPos = $('#partners-screen .sect-inner').offset().top;
        elemHeight = Math.max($('#partners-screen .partners-inner').height(), $('#partners-screen .clients-inner').height()) + $('.partners-tabs').height() + parseFloat($('.tabs-content').css('margin-top'));
    }

    var diff = ($(window).height() - elemHeight)/2;
    var scrollPos = elemPos - diff;

    if($(this).attr('data-link-tab') == 'clients'){
        $('#tab-clients').click();
        $('.partners-item').each(function(key, elem) {
            $(elem).removeClass('show');
        })
    }
    if($(this).attr('data-link-tab') == 'partners'){
        $('#tab-partners').click();
    }

    if(mainScroll){

        mainScroll.scrollIntoView(document.getElementById(linkData).querySelector('.sect-inner'), {
            offsetTop: diff
        })
    }
    else{
        if($(window).height() < elemHeight) {
            $('html, body').animate({
                scrollTop: elemPos
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: scrollPos
            }, 800);
        }
    }
});

var totalHeight;
$(window).on('resize', function () {
    totalHeight = 0
    $('#tabs-container').css({
        'height': $('.tabs-inner-list').height()+'px'
    });
    $('.tabs-mob-slider-inner').each(function(key,el) {
        var $textBlock = $(el).find('.tab-text');
        totalHeight = $textBlock.height() + parseFloat($textBlock.css('margin-top')) + parseFloat($textBlock.css('margin-bottom'));
        // console.log($textBlock.css('margin-top'));
        if(totalHeight > maxServiceHeight) {
            maxServiceHeight = totalHeight;
        }
        $(el).find('.tab-content-item').each(function(k,e) {
            if($(e).height() > maxRemHeight) {
                maxRemHeight = $(e).height();
            }
        })
    })
    if (!$('.swiper-slide-active').index()) {
        $('.tabs-mob-slider-inner').css('height', maxRemHeight);
    }
    $('.tabs-mob-slider-inner').css('height', maxServiceHeight);

    if (window.innerWidth <= 600) {
        // $('.tabs-mob-slider').each(function(key,elem) {
        //     $(elem).children('.tabs-mob-slide').eq(0).equalHeight();
        // })
        // $('.tabs-mob-slider .tabs-mob-slide').equalHeight();
            $('.mob-only-tabs-inner').addClass('is-show');
            $('.tab-nav-item').removeClass('active');
            $('.do-mob-slider-wrap').removeClass('active');
            $('.tab-nav-item').eq(0).addClass('active');
            $('#do-mob-slider-1').addClass('active');
            $('.mob-only-tabs-inner').addClass('no-rounded-top_left');
        $('.mob-only-tabs-inner').removeClass('no-rounded-top_right');
            setTimeout(function () {
                $('.do-mob-slider-wrap.active .tab-text').addClass('show');
                $('.do-mob-slider-wrap.active .swiper-pagination').addClass('show');
                $('.mob-only-tabs-inner .talk-mngr-btn').addClass('show');
            }, 300);



        // $('.tab-nav-item').eq(0).click();
        // $('.do-mob-slider-wrap').removeClass('active');
        // $('.tab-nav-item').removeClass('active');
        // $('.tab-nav-item').eq(0).addClass('active');

        // $('#do-mob-slider-1').addClass('active');
        // $('.mob-only-tabs-inner').addClass('no-rounded-top_left');
        // $('.mob-only-tabs-inner').removeClass('no-rounded-top_right');
        // setTimeout(function () {
        //     $('.do-mob-slider-wrap.active .tab-text').addClass('show');
        // }, 300);
        // $('.do-mob-slider-wrap.active .swiper-pagination').addClass('show');
        // $('.mob-only-tabs-inner .talk-mngr-btn').addClass('show');

    } else {
        $('.do-tabs-inner').removeClass('show-chat');
        $('#we-do-tabs').addClass('show non-click');
        $('.mob-only-tabs-inner').removeClass('is-show');
        $('.tab-nav-item').removeClass('active');
        $('.tabs-inner-list').removeClass('hide');
        $('.tab-inner-content').removeClass('active');
        $('.tab-content-list').addClass('hide');

    }
    // if($('.mob-only-tabs-inner').hasClass('is-show')) {
    //     var idAttr = 0;
    //     $('.do-mob-slider-wrap').each(function(key,el) {
    //         if($(el).hasClass('active')) {
    //             idAttr = $(el).attr('id').slice(-1);
    //         }
    //     })
    //     $('.tab-nav-item').removeClass('active');
    //     $('#tab-nav-' + idAttr).addClass('active');
    // //     $('.do-mob-slider-wrap').removeClass('active');
    // //     $('.tab-nav-item').eq(0).addClass('active');
    // //     $('#do-mob-slider-1').addClass('active');
    // //     $('.mob-only-tabs-inner').addClass('no-rounded-top_left');
    // }

    $('#tabs-container').css({
        'height': $('.tab-content-list:not(.hide)').height()+'px',
    });


    $('.research-title').css('min-height', 'auto');
    $('.testim-elem').css('min-height', 'auto');
    $('.research-text').css('min-height', 'auto');

    setTimeout(function () {
        $('.research-title').equalHeight();
        $('.research-text').equalHeight();
    }, 1)

    // setTimeout(function () {
    //     Ellipsity.ellipsify(document.querySelector('.tab-inner-item'));
    //     var textArr = document.querySelectorAll('.tab-content-text .text');
    //     for (var i = 0; i < textArr.length; i++) {
    //         Ellipsity.ellipsify(textArr[i]);
    //     }
    //     // textArr.forEach(function (el) {
    //     //     Ellipsity.ellipsify(el);
    //     // })
    // },1)

    mobMarketSlider.activeIndex = 0;
    mobAnalytSlider.activeIndex = 0;
    mobConsaltSlider.activeIndex = 0;
    researchSwiper.updateSlides();
    // mySwiper.update();
});

window.onload = function () {

    $(function(){
        window.scrollTo(0,0)
        $('.show:not(.g-wrap-line, #XMLID_2_)').removeClass('show');
    });


    $('#tabs-container').css({
        'height': $('.tabs-inner-list').height()+'px'
    });

    setTimeout(function () {
        // $('body').removeClass('loading');
        $('img[data-src]').each(function (key, el) {
            $(el).attr('src', $(el).attr('data-src'));
        });
    }, 1)



    // setTimeout(function(){ $('body').removeClass('loading-elem_dis') }, 1000);
}