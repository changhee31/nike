$(function () {
    let winWidth;
    $(window).resize(function () {  //resize: window 창의 사이즈가 변경되면 발동
        winWidth=$(this).width();
        if(winWidth <= 1024){
            $('.main-menu').off('mouseenter');
            $('.main-menu').off('mouseleave');
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }else {
            $('nav').appendTo('header');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter : function () {
                    $('.sub-menu, .sub-bg').stop().show();
                },
                mouseleave : function () {
                    $('.sub-menu, .sub-bg').stop().hide();
                }
            });
        }
    }); //resize 이벤트 종료

    $(window).trigger('resize'); //강제 이벤트 발생
    
    $('.menu-btn').click(function (event) {
        event.stopPropagation(); //내 부모까지 이벤트 전달을 막음
        $('.index-wrap').css('filter','blur(10px)');
        $('body, html').css({
            height:'100vh',
            overflow:'hidden'
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast');
        //menu-area 집어넣기
    }); //태블릿, 모바일에서 사용하는 메뉴 종료
    $('.main-menu>li>a').click(function (event) {
        event.stopPropagation(); //내 부모까지 이벤트 전달을 막음
        $(this).siblings('.sub-menu').animate({
            left:'0%'
        },'fast');
    });
    $('.all>a').click(function (event) {
        event.stopPropagation(); //내 부모까지 이벤트 전달을 막음
        $(this).parents('.sub-menu').animate({  //parents : 부모, 조부모를 말함 ( parent(), parent()를 사용  )
            left:'150%'
        },'fast');
    });
    $('.menu-area').click(function() {
        $('.index-wrap').css('filter','blur(0px)');
        $('body, html').css({
            height:'auto',
            overflow:'visible'
        });
        $('.h-top').animate({
            right:'-100%'
        },'fast',function () {
            $('.menu-area').hide();
        });
        $('.sub-menu').css('left','150%');
    });

    if(winWidth <= 480){
        $('.main-01>img').attr('src','images/M-01-mobile.png');
        $('.main-02>img').attr('src','images/M-02-mobile.png');
        $('.main-03>img').attr('src','images/M-03-mobile.png');
    }else{
        $('.main-01>img').attr('src','images/M-01.png');
        $('.main-02>img').attr('src','images/M-02.png');
        $('.main-03>img').attr('src','images/M-03.png');
    }

    // Swiper 플러그인
    let swiperSlide=new Swiper('.Featured-slide',{
        //모바일 기준(모바일은 따로)
        slidesPerView:'auto',
        spaceBetween:8,  //슬라이드와 슬라이드 사이의 간격(여백)
        pagination: {
            el: '.f-pager',  //페이지는 어디에다 나타낼 것인가
            clickable: true,
            type: 'fraction',  //좌우버튼으로 움직이기 + fraction(좌우 방향키)은 navigation과 연동 + bullets(원형버튼형식)
        },
        navigation: {
            prevEl:'.f-prev',  //뒤로 가는 버튼
            nextEl:'.f-next'
        },
        //반응형(화면 넓이에 따라 레이아웃이 알아서 변경)
        breakpoints:{
            1025: {    //desktop
                slidesPerView:3,
                spaceBetween:24,
            },
            480: {     //mobile
                slidesPerView: 'auto',
                spaceBetween: 16,
            }
        }
    });
});