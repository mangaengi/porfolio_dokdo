/* gnb */
$(function(){
    $('.gnb > li').on('mouseover',function(){
        $(this).children('.gnb > li > ul').stop().animate({
            opacity: 1,

        })
    }).on('mouseout', function(){
        $(this).children('.gnb > li > ul').stop().animate({
            opacity: 0
        })
    })
})


    /* 상단 스와이퍼 */
$(function() {
    $('.btnView > .bg').on('mouseenter', function() {
        $(this).stop().animate({
            width: '130px',
        },200)
    })
    $('.btnView > .bg').on('mouseleave', function() {
        $(this).stop().animate({
            width: 0
        },200)
    })
})

/* 헤드고정 */
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".navbar").addClass('on');
            $('.logo').find('img').attr({
                src: 'img/logo_simbol_black.png'
            })
        }
        else{
        $(".navbar").removeClass('on')
        $('.logo').find('img').attr({
            src: 'img/logo_simbol.png'
        })
        }
    });
})

/* 모바일 메뉴 */
$(function() {
    $('.mobileButton').on('click', function(event){
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('.mobileMenu').toggleClass('visible');
    });
});



/* dokdo인사말 */
$(function() {

    $('.mainText > h2').delay(400).animate({
        opacity: 1,
        bottom: 250
    },300, function(){
        $('.maText').delay(600).animate({
            opacity: 1,
            bottom: 350
        },300)
    });
});

/* 페이지4 텝 */
$(function(){
    let tab = $('.tab li');
    
    tab.on('click', function(){
        let idx = $(this).index();
        let tab_cont = $(this).parents('.tab').siblings('.tab_content').eq(idx);

        $(this).addClass('on');

        $(this).siblings().removeClass('on')

        tab_cont.addClass('on');
        tab_cont.siblings().removeClass('on')
    })
});

/* 로그인 */
function submit_check() {
      
    // 입력 폼 아이디값 담기
    let id = document.getElementById("id");
    let pw = document.getElementById("pw");

    if (id.value == ""){
      alert("아이디를 입력하세요.");
      id.focus();
      return false;
    } else if (pw.value == "") {
      alert("비밀번호를 입력하세요.");
      pw.focus();
      return false;
    } else {
        alert("환영합니다");
        submit();
    }
  };

  alert("본 페이지는 Pc=1920px, 모바일=640px에 적합한 페이지입니다.")