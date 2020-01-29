$(function(){
    
    $('#cont1').height($(window).height()-70);
    $('.slides').height($(window).height()-70);
    $('.slides>ul').height($(window).height()-70);
    $('.slides>ul>li').height($(window).height()-70);
    
  //var
  var $indicator = $('.slides-pagination>li>a');
  var $slides = $('.slides-container>li');
  var $prev = $('.slides-prev');
  var $next = $('.slides-next');
  var nowIdx = 0;
  var intervalKey = null;


        
        
  //function
  function slideMove(){
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $slides.filter('.on').stop().fadeOut(1000).removeClass('on');
    $slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
  }

  function nextIdx(){
    if(nowIdx<4){
      nowIdx++;
    }else{
      nowIdx=0;
    }
  }

  //autoplay
  intervalKey = setInterval(function(){
    nextIdx();
    slideMove();
  },2000);


  $indicator.on('click',function(event){
    clearInterval(intervalKey);
    event.preventDefault();

    if($(this).parent().hasClass('on')==false){
      nowIdx = $indicator.index(this);
      slideMove();
    }
  });

  $prev.on('click',function(){
    clearInterval(intervalKey);

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=4;
    }

    slideMove();
  });//end of prev

  $next.on('click',function(){
    clearInterval(intervalKey);

    nextIdx();
    slideMove();
  });
    
//헤더
    var scrollTop = 0;
    var nowidx = 0;
    var arrTopVal = [];

 
    $('.cont').each(function (idx) {
        arrTopVal[idx] = $(this).offset().top;
    });
    
    $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();


        if (scrollTop > arrTopVal[1] - 100) {
            $('header').addClass("fixed");
            $("#cont2").css({
                marginTop: 70
            });
        } else {
            $('header').removeClass("fixed");
            $("#cont2").css({
                marginTop: 0
            });
        }
         
  
    
  
});


  var $indicator3 = $('.slides-pagination3 a');
  var $container3 = $('.slides-container3');
  var $btnPrev3 = $('.slides-prev3');
  var $btnNext3 = $('.slides-next3');
  var nowIDX = 0;

  function slide(){ 
    $indicator3.eq(nowIDX).parent().addClass('on')
              .siblings().removeClass('on');
    $container3.stop().animate({left:-(1400*nowIDX)});
  }


  setInterval(function(){
    if(nowIDX<4){
      nowIDX++;
    }else{
      nowIDX=0;
    }

    slide();
  },1500);

  //인디케이터
  $indicator3.on('click',function(event){
    event.preventDefault();
    nowIDX = $indicator3.index(this);

    slide(); 
  });

  //prev
  $btnPrev3.on('click',function(){
    if(nowIDX>0){
      nowIDX--;
    }else{
      nowIDX = 4;
    }

    slide(); 
  });

  //next
  $btnNext3.on('click',function(){
    if(nowIDX<4){
      nowIDX++;
    }else{
      nowIDX=0;
    }

    slide(); 
  });
 
  
});   
  

