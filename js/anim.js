var $size = $(window).width();

var $heid;
var $heid2;
if( $size >= 1600){
    $heid = 2050;
     $heid2 = 2700;
}
if($size < 1600){
    $heid = 1600;
     $heid2 = 2400;
}

var block_show = false;
var block_show2 = false;
var block_show3 = false;
var $h = 0;
var $d = 0;
function scrollTracking() {
    if (block_show) {
        return false;
    }
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#mark-one').offset().top;
    var eh = $('#mark-one').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= 2021 && wh + wt < 3518) {

        if ($h < wt + wh - $heid) {
            $h = wt + wh - $heid;
            if (wt + wh - $heid >= 750) {
                $('#tok-left').remove();
                $('.token__inner').css({ 'border-left': '5px solid #ffc700', 'padding-left': '126px' });

            } else {
                $('#tok-left').css('height', wt + wh - $heid + 'px');
            }
            if (wt + wh >= 3500) {
                block_show = true;
            }
            if (wt + wh - $heid >= 430) {
                $('#token__row1').addClass('go');
                setTimeout(function () {
                    $('#token__card1').addClass('go2');
                    $('#token__card1').addClass('d');

                }, 300);
                setTimeout(function () {
                    $('#token__card2').addClass('go2');
                    $('#token__card2').addClass('d');
                    $('#token__card1').addClass('a');
                }, 1300);



                setTimeout(function () {
                    $('#token__row1').addClass('a');
                    $('#tok-one-square').remove();
                    $('#tok-one-bottom').remove();
                }, 1350);

                setTimeout(function () {

                    $('#token__card2').addClass('a');
                    $('#tok-vertical-one').remove();
                    $('#tok-two-square').remove();
                    $('#tok-vertical-two').remove();
                    $('#tok-three-square').remove();


                }, 2800);



            }
        }
        // Код анимации
        /*	$('.active div:eq(0)').show('fast', function(){
                $(this).next().show('fast', arguments.callee);
            });*/
   
    }


}


function scrollTracking2() {
    if (block_show2) {
        return false;
    }
    var wt = $(window).scrollTop();
    var wh = $(window).height();

    if (wt + wh >= 2021 && wh + wt < 3518) {

        if (wt + wh - $heid >= 715) {

            $('#token__row2').addClass('go');

            setTimeout(function () {
                $('#token__card3').addClass('go2');
                $('#token__card3').addClass('d');

            }, 300);
            setTimeout(function () {
                $('#token__card4').addClass('go2');
                $('#token__card4').addClass('d');
                $('#token__card3').addClass('a');
            }, 1300);


            setTimeout(function () {
                $('#token__row2').addClass('a');
                $('#tok-four-square').remove();

                $('#tok-two-bottom').remove();

            }, 1350);




            setTimeout(function () {

                $('#token__card4').addClass('a');
                $('#tok-vertical-three').remove();
                $('#tok-five-square').remove();
                $('#tok-vertical-four').remove();
                $('#tok-six-square').remove();

            }, 2800);



        }

    }

}



function scrollTracking3() {
    if (block_show3) {
        return false;
    }
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#farms-one-bottom').offset().top;
    var eh = $('#farms-one-bottom').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= 2021 && wh + wt < 6518) {

        if ($d < wt + wh - $heid2) {
            $d = wt + wh - $heid2;
            if (wt + wh -  $heid2 >= 720) {
                $('#farms-left1').remove();
                $('#farms .farms__inner').css( 'border-left', '5px solid var(--white)' );

            } else {
                $('#farms-left1').css('height', wt + wh -  $heid2 + 'px');
             
            }
            if (wt + wh >= 6500 || wt + wh -  $heid2 >= 720) {
                block_show3 = true;
            }
            if (wt + wh -  $heid2 >= 720) {
                $('#farms__row1').addClass('ga');
                setTimeout(function () {


                }, 300);
                setTimeout(function () {
                    $('#farms__card2').addClass('ga2');
                    $('#farms__card1').addClass('ga2');

            
                  //  
                }, 300);
                setTimeout(function () {
                    $('#farms__card2 .info-card').addClass('d');
                    $('#farms__card1 .info-card').addClass('d');
                }, 500);
                setTimeout(function () {
                    $('#farms__row1').addClass('a');

                }, 500);

                setTimeout(function () {
                    $('#farms__card1 .info-card').addClass('a');
                    $('#farms__card2 .info-card').addClass('a');
                    $('#farms__card2 .info-card').css({'opacity':1,'margin-bottom':0});
                    $('#farms__card1 .info-card').css({'opacity':1,'margin-bottom':0});
                    $('#farms-one-square').remove();
                    $('#farms-one-bottom').remove();
                    $('#farms-vertical-one').remove();
                    $('#farms-two-square').remove();
                    $('#farms-vertical-two').remove();
                    $('#farms-thee-square').remove();


                }, 1800);



            }
        }
        // Код анимации
        /*	$('.active div:eq(0)').show('fast', function(){
                $(this).next().show('fast', arguments.callee);
            });*/

    }


}


$(document).ready(function () {
    if ($(window).width() >= '1000') {
        $(window).scroll(function () {
            scrollTracking();
            scrollTracking2();
            scrollTracking3();
        });
    } else {
        $('#tok-one-square').remove();
        $('#tok-one-bottom').remove();
        $('#tok-vertical-one').remove();
        $('#tok-two-square').remove();
        $('#tok-vertical-two').remove();
        $('#tok-three-square').remove();
        $('#tok-four-square').remove();

        $('#tok-two-bottom').remove();
        $('#tok-vertical-three').remove();
        $('#tok-five-square').remove();
        $('#tok-vertical-four').remove();
        $('#tok-six-square').remove();
    }

});
/*
$(document).ready(function () {
    function loadXMLDoc() {
        var xmlhttp;
        if (window.XMLHttpRequest) {// код для IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// код для IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "https://www.buildablock.online/people.txt", false); // false - используем СИНХРОННУЮ передачу
        xmlhttp.send();

        $('.token__currency-number').text(xmlhttp.responseText);
        $('#num2').text('$' + xmlhttp.responseText);
    }
    loadXMLDoc();
});*/