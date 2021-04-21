$(function(){

  $('.popup').show(100);
  $('.close2').click(function(){
      $('.popup').hide();
  })


  var visual = new Swiper('.main_visual', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1000,
    autoplay:{delay:1000},
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  $('.m_btn').click(function(){
    $('.gnb_wrap').animate({'right':0},500);
    $('.cover').fadeIn(500);
  })
  
  $('.btn_close').click(function(){
    $('.gnb_wrap').animate({'right':'-100%'},500);
    $('.cover').fadeOut(500);
  })



  var product = new Swiper('.product_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoplay:true,
    autoHeight:true,
    observer:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.product_slide_wrap .product_slide:gt(0)').hide();

  $('.btn_tap li').click(function(event){
    event.preventDefault();
    var num = $(this).index();
    console.log(num)
    $(this).addClass('on').siblings().removeClass('on');
    $('.product_slide_wrap .product_slide').eq(num).show().siblings().hide()
  })
  
  
  // 팝업

  // $('.popup').slideDown(500);
  // //    쿠키정보 유무 확인
  // if(GetCookie('sub')=='close2'){
  //     $('.popup').hide();
  
  // }else{
  //     $('.popup').show();
  
  // }
  
  
     
  //    $('.close2').click(function(){
         
  //     if($('input[name=today_close]').is(':checked')){
  
  //         setCookie('sub','close2',1) //하루동안 열지 않는 쿠키 생성
  //         $('.popup').show(500);
           
  //     }else{
  //         $('.popup').show(500);
  //     }
         
  
  // });
  
  // //오늘하루 열리지 않음
  // // GetCookie(쿠키 변수의 값을 읽어올 때 사용)
  // function GetCookie(name){
  //     var value=null, search=name+"=";
  //     if(document.cookie.length > 0){
  //         var offset=document.cookie.indexOf(search);
  //         if(offset != -1){
  //             offset+=search.length;
  //             var end=document.cookie.indexOf(";", offset);
  //             if(end == -1) end=document.cookie.length;
  //             value=unescape(document.cookie.substring(offset, end));
  //         }
  //     } return value;
  // }
  // // SetCookie(쿠키 변수와 쿠키값을 저장할 때)
  // function setCookie(name, value, expiredays){
  //     var days=10;
  //     if(days){
  //         var date=new Date(); 
  //         date.setTime(date.getTime()+(days*24*60*60*1000));
  //         var expires="; expires="+date.toGMTString();
  //     }else{
  //         var expires=""; 
  //     }
  //     document.cookie=name+"="+value+expires+"; path=/";
  // }

});