jQuery(document).ready(function () {
    "use strict"
    // hiệu ứng chuyển động nước
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
    });

    // hiệu ứng chuyển động chữ
    var typed = new Typed('.typed', {
        stringsElement: '#typed-strings',
        //     strings: ['i love<strong class="primary"> codings.</strong>', 'and to<strong class="primary"> share !!.</strong>'],
        typespeed: 0,
        // lặp lại vô hạn
        loop: true
    });
    
    const gotoTop = document.querySelector(".container1");
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 10) {
            gotoTop.classList.add("secondary");
          // $("nav").addClass('secondary');
        }
        else  {
            gotoTop.classList.remove("secondary");
         //   $("nav").removeClass('secondary');
        }
    });



    // hiệu ứng hiển thị và load khi click vào ảnh
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});