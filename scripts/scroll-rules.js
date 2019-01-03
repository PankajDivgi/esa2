var elem = document.body;

if (elem.addEventListener) {
    if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
    } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    elem.attachEvent("onmousewheel", onWheel);
}


var allowScroll = true;

// Это решение предусматривает поддержку IE8-
function onWheel(e) {
    e = e || window.event;

    // if( !allowScroll ) {
    //     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    //
    //     return false;
    // }

    // deltaY, detail содержат пиксели
    // wheelDelta не дает возможность узнать количество пикселей
    // onwheel || MozMousePixelScroll || onmousewheel
    var delta = e.deltaY || e.detail || e.wheelDelta;

    var info = document.getElementById('delta');

    // info.innerHTML = +info.innerHTML + delta;


    var indexActiveSlide = parseInt($('body').attr('data-page'));
    newIndexActiveSlide = indexActiveSlide;

    if( delta > 0 ){
        if(indexActiveSlide < 5)  newIndexActiveSlide++;
    }
    else{
        if(indexActiveSlide > 1)  newIndexActiveSlide--;
    }


    if(newIndexActiveSlide != indexActiveSlide){

        // $('#GATES').addClass('close');
        // setTimeout(function(){
        //     $('#wrap-screens >*')[indexActiveSlide-1].style.display = 'none';
        //     $('#wrap-screens >*')[newIndexActiveSlide-1].style.display = 'block';
        //
        //     $('#GATES').removeClass('close');
        // }, 500);


        allowScroll = false;
        setTimeout(function(){  allowScroll = true  }, 1000);
    }




    $('body').attr('data-page', newIndexActiveSlide);

    // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}