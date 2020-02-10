function w3IncludeHTML(byFunc){
  var objLength = $('[w3-include-html]').length-1;
  $('[w3-include-html]').each(function(i){
    var file = $(this).attr('w3-include-html')
    $(this).load(file, function(){
      $(this).find('> *').unwrap();
      if(objLength == i){
        commonJs();
        if(typeof byFunc == 'function'){
          byFunc();
        }else{
          byFunc = null;
        };
      };
    });    
  });
};


function commonJs(Func, initN){
  //globalNavi
  globalNavi();

  //popup
  popup('.pl_win', null);
  popup('.pl_alert', null);
  popup(null, '.pl_small');

  //서브타이틀 오픈버튼
  objHref();

  //pl_popup index 겹치는 부분제어
  plSmallIndex(); //* 임시 function
}

//왼쪽 네비게이션 스크립트 처리
function globalNavi(){
  $('.nav .deps3').each(function(){
    if($(this).size() > 0){
      $(this).parent().addClass('inner');
    }
  });
  $('.nav > li > a').click(function(){
    $(this).parent().siblings().find('.on').removeClass('on');
    if($(this).next().size() > 0){
      $(this).parents('.nav_wrap').addClass('on');
    }else{
      $(this).parents('.nav_wrap').removeClass('on');
    };
  });
  $('.nav li a').click(function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
  });
  $('.nav_wrap .btn_back').click(function(){
    $(this).parent().removeClass('on').find('.on').removeClass('on');
  });
  $(".box_deps2 dd").mCustomScrollbar({
      theme: "inset"
    });
};


function popup(obj, obj2){ //레이어팝업 뜰경우 body 스크롤 막기
  $(obj).each(function(){
      if($(this).css('display') === 'block'){
        $('body').addClass('body_fixed');
      }else{
        $('body').removeClass('body_fixed');
      };
  });

  $(obj2).each(function(){ /* 임시 처리 */
      $(this).find('.btn_close2').click(function(){
        $(this).parent().hide();
        return false;
      });
  });
};

/* 리스트 검색영역 open/close */
function objHref(){
  $('.sub_tit .btn_view3').click(function(){
    var objId = $(this).attr('href');
    $(objId).toggleClass('close')
    $(this).toggleClass('open');
    return false;
  });
};

//트리메뉴인경우 확인용
function folderTree(objElem,clickElem){
  $(objElem).each(function(){
    $(this).find(clickElem).next().each(function(){
      var depClass = $(this).attr('class');
      if($(this).length > 0){
        $(this).parent().addClass('in_' + depClass)
      }
    });
    $(this).find(clickElem).click(function(){
      $(this).closest(objElem).find(clickElem).removeClass('selected');
      $(this).addClass('selected');
    });
    $(this).find('.ico').click(function(e){
      $(this).parent().parent().toggleClass('on');
      e.preventDefault();
    })
  });
};

//임시 function
function plSmallIndex(){
  if($('.pl_small').length > 0){
    var plSleth = $('.pl_small').length;
    $('.pl_small').each(function(i){
      var i = plSleth - i;
      $(this).css('z-index', i*5)
    });
  }
};

//탭 스크립트 제어
function tabToggle(obj, area, onActive){
  $('.' + area).eq(onActive).show();
  $(obj).click(function(e){
    var id = $(this).attr('href');
    if($(this).closest('.tab').next().hasClass(area)){
      $(this).parent().addClass('on').siblings().removeClass('on');
      $('.' + area).hide().filter($(id)).show();
      e.preventDefault();
    }
  });
}


/*function w3IncludeHTML(byFunc) { 
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          if(typeof byFunc == 'function'){
            byFunc();
          }else{
            byFunc = null;
          }
          elmnt.outerHTML = this.responseText
          elmnt.removeAttribute("w3-include-html");
          
          
          w3IncludeHTML(byFunc);
          
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    };
  };

  commonJs()
};*/


//allmenu
/*function allmenu(){
  $('.allmenu_wrap .btn_wt_close3').click(function(){
    $('.allmenu_wrap').hide();
    $('body').removeClass('body_fixed');
    return false;
  });

  $('.btn_allmenu').click(function(){
    $('.allmenu_wrap').show();
    $('body').addClass('body_fixed');
    return false;
  });

  //scroll
  $(".allmenu_wrap").mCustomScrollbar({
    theme: "inset",
    axis:"yx" // vertical and horizontal scrollbare'
  });
};*/
