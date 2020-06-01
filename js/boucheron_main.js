(function($){
  
  // 네비게이션----------------------------------------
  const nav = $('.nav');
  const subnav = $('.subnav');
  const title = subnav.children('li').children('a');

  title.on('mouseenter focus',function(){
    $(this).parent("li").children("ul").stop().slideDown(500);
    })
  subnav.children('li').on('mouseleave focus',function(){
    $(this).children('ul').stop().slideUp(500);
    }); 


    
  //슬라이드------------------------------------------
  const slideshow = $('.slideshow'); // 마우스 온오프 할 떄 변수 지정 
  const slideform = $('.slide_form'); // 보이는 슬라이드
  const guide = $('.guide'); // 전체 슬라이드 length*?
  let slideLi = guide.children('li'); // 슬라이드 갯수

    //자연스러운 슬라이드를 위해 마지막 슬라이드를 처음으로 복사
    guide.find('li').eq(-1).clone().prependTo(guide);
    // console.log(slideLi.length); =3
    slideLi = guide.children('li'); //clone 갯수 다시 지정(포함)
    // console.log(slideLi.length); =4

  let i = 0;
  let go;
  const timed = 3000;
  const slideGo = function(){
    go = setInterval(function(){
      i++;
      // if (i>=slideLi.length){i=0;}
      // guide.stop().animate({marginLeft:(-100*i)+"%"});
      // 클론 안할 경우 하면 아래처럼 계산해서 

      if (i>=slideLi.length-1){i=0; guide.css({marginLeft:100+'%'})}
      guide.stop().animate({marginLeft:(-100*i)+'%'});
    },timed);
  };

  const slideStop = function(){
    clearInterval(go);
  };

  slideGo();
  slideshow.on('mouseenter', function(){
    slideStop();
  });
  slideshow.on('mouseleave', function(){
    slideGo();
  });



  //버튼---------------------------------------------
  const viewBtn = $('.view_btn');
  const next = viewBtn.children('.next');
  const prev = viewBtn.children('.prev');

  next.on('click', function(){
    i++;
    if (i>=slideLi.length-1){i=0; guide.css({marginLeft:100+'%'})}
    guide.stop().animate({marginLeft:(-100*i)+'%'});
  });

  prev.on('click', function(){
    i--;
    guide.stop().animate({marginLeft:(-100*i)+'%'}, function(){
      if (i<=-1){
        i=2; guide.css({marginLeft:(-100*i) +'%'});
      }
    });
  });
  


  //top버튼 위로가기 -----------------------------------
  const moveTop = function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.move_top_btn').fadeIn();
        } else {
            $('.move_top_btn').fadeOut();
        }
    });
    
    $('.move_top_btn').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
  }



  //햄버거버튼 ----------------------------------------
  // const drawer = function () {
  //   $('.menu-button').on('click', function (e) {
  //     e.preventDefault();
  //     $('.drawer').css({display:'block'});
  //     $('.drawer').stop().animate({left:'0'});
  //   })
  // }  drawer();

  const drawer = $('.drawer');
  subnav.clone().appendTo(drawer);
  
  
  const open = $('.open-trigger');
  const close = $('.close-trigger');

  open.on('click',function(){
    $(this).addClass('active');
    $('.drawer').addClass('active');
  });
  close.on('click', function(){
    open.removeClass('active');
    $('.drawer').removeClass('active');
  });

  const drawerNav = $('.drawer .subnav');
  drawerNav.children('li').children('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('ul').find('ul').stop().slideUp();
    $(this).siblings().stop().slideToggle();
  });



  //이미지 나타나기
  const imgtext = $('.imgtext');
  // $(window).ready(function(){
  //       var max = 1000; //100% 투명할때의 스크롤 값
  //       $(window).scroll(function(){
  //           var scrollPX = $(this).scrollTop();
  //           if( scrollPX  > max ) {
  //             imgtext.css({"opacity": 0);
  //           }else{
  //             imgtext.css({"opacity": (max-scrollPX)/max });
  //           }  
  //       });
  //   });
    



  //top버튼 위로가기 모바일에선 사라지기 -----------------------

  let beforeW = $(window).outerWidth(true); //브라우저 넓이(마진 포함)
  const mobile=767, tablet=1279, laptop=1919, pc=1920;
  const device = ['mobile', 'tablet', 'laptop', 'pcfull'];

    //디바이스 크기 체크
    const DeviceSet = function(winW){
      if(winW <= mobile){
        nowSize = device[0];
        
        //슬라이드 여기 넣기-----------


      }else if(winW > mobile && winW <= tablet){
        nowSize = device[1];
        moveTop();
      }else if(winW > tablet && winW <= laptop){
        nowSize = device[2];
        moveTop();
      }else{
        nowSize = device[3];
        moveTop();
      }
      return nowSize;
    }; // DeviceSet 조건문 함수화처리

    DeviceSet(beforeW); // DeviceSet함수실행


  


  


  
})(jQuery);