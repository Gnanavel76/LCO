$(document).ready(function(){
    $nav = $('.navbar');
    $window = $(window);
    $video = $('video');
    $loader = $('#loader');
    $login = $('#login');
    $signup = $('#signup');
    $bt = $('.hcontent .hbtn');
    $window.on('load', function(){
        $loader.css({"display":"none"})
    });
    $bt.click(function(){
        window.scrollTo(0,$('#tournament').offset().top+20);
    })
    $('.nav-link').each(function() {
        if($(this).attr('href')!='javascript:void(0)'){
            if ($window.scrollTop() >= $($(this).attr('href')).offset().top-500) {
                $('.nav-link').not(this).removeClass('active');
                $(this).addClass('active');
            }
        }
    });
    $('#llink').click(function(){
        $login.css({"display":"block"});
        $signup.css({"display":"none"});
    })
    $('#slink').click(function(){
        $login.css({"display":"none"});
        $signup.css({"display":"block"});
    })
    AOS.refresh()
    $("nav .nav-link").click(function() {
        $(".active").removeClass("active");  
        $(this).addClass("active");
    });
    if($window.scrollTop() > 10){
        $nav.css({"position":"fixed","top":"0%","border-bottom":"1px solid white"});
    }
    $window.scroll(function(){
        var y = $(this).scrollTop();
        if($window.scrollTop() > 10){
            $nav.css({"position":"fixed","top":"0%","border-bottom":"1px solid white"});
        }
        else{
            $nav.css({"position":"absolute","top":"3%","border-bottom":"none"});
        }
        if($window.scrollTop() >= 2800){
            $video.get(0).play();
        }
        else{
            $video.get(0).pause();
        }
        $('.nav-link').each(function() {
            if($(this).attr('href')!='javascript:void(0)'){
                if (y >= $($(this).attr('href')).offset().top-500) {
                    $('.nav-link').not(this).removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
    })
})
var count = new Date('dec 31,2020 00:00:00').getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var d = count - now;
    var weeks = Math.floor(d/(1000*60*60*24*7));
    var days = Math.floor(d/(1000*60*60*24));
    var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((d%(1000*60*60))/(1000*60));
    var seconds = Math.floor((d%(1000*60)/1000));
    document.getElementById('weeks').innerHTML = weeks;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    if(d<=0){
        clearInterval(x);
    }
},1000);
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
