$(function(){
  //script 입력영역
  // header fixed
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();

    const headerInnerBar = $("#header .inner");
    if( thisScrollTop > 150 ){
      headerInnerBar.addClass("fixed");
    }else{
      headerInnerBar.removeClass("fixed");
    };
  });

  // section 02 tab slide
  $("#second .inner .items-wrap .items").css("display","none");
  $("#second .inner .items-wrap .items:nth-of-type(1)").css("display","flex");
  $("#second .inner .tabs span").on("click",function(){
    let thisIndex = $(this).index() + 1; // 0부터 시작을 1부터 시작으로,
    $("#second .inner .items-wrap .items").css("display","none");
    $("#second .inner .items-wrap .items:nth-of-type("+thisIndex+")").css("display","flex");
    $("#second .inner .tabs span").removeClass("on");
    $("#second .inner .tabs span:nth-of-type("+thisIndex+")").addClass("on");
  });
});
