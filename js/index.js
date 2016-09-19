$(function() {
  // 鼠标滑过更多的效果
  $(".nav span,.header_r").hover(function() {
    $(".header_r").show();
  }, function() {
    $(".header_r").hide();
  });

  //鼠标点击导航
  $(".content_t li").first().hover(function() {
    $(this).find("img").attr(
      "src", "images/my_1.png"
    );
  }, function() {
    $(this).find("img").attr(
      "src", "images/my.png"
    );
  });


  $(".content_t li").each(function(index) {
    $(this).click(function() {
      if (index != 0) {
        $(".content_t li").first().find("img").attr(
          "src", "images/my.png"
        );
        $(".content_t li").first().mouseover(function() {
          $(this).find("img").attr(
            "src", "images/my_1.png"
          );
        });
        $(".content_t li").first().mouseout(function() {
          $(this).find("img").attr(
            "src", "images/my.png"
          );
        });
      } else {
        $(".content_t li").first().find("img").attr(
          "src", "images/my_1.png"
        );
        $(".content_t li").first().mouseout(function() {
          $(this).find("img").attr(
            "src", "images/my_1.png"
          );
        });
      }
      $(".content_t_hover").removeClass("content_t_hover");
      $(this).addClass("content_t_hover");
      $(".content_hide").removeClass("content_hide");
      $(".content_bb").eq(index).addClass("content_hide");
    });
  });



  // 换肤
  $("#skin").click(function() {
    $(".skin").slideDown(500);
  });
  $(".skin_1_2,.outers").click(function() {
    $(".skin").slideUp(500);
  });

  // 读取换肤
  window.onload = function() {
    var key = window.localStorage.getItem("key");
    if (key == null) {

      $(".bg").find("img").attr({
        "src": ""
      });

    } else if (key == 0) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    } else if (key == 1) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    } else if (key == 2) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    } else if (key == 3) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    }
    // 存储换肤
    $(".skin li").each(function(index) {
      $(this).click(function() {
        $(".bg").find("img").attr({
          "src": "images/bg" + index + ".jpg"
        });
        bg();
        window.localStorage.setItem("key", index);
      });

    });

  }

  // 点击不使用皮肤
  $(".skin_1_1").click(function() {

    $(".bg").find("img").attr({
      "src": ""
    });
    $(".logo").css("background", "");
    window.localStorage.clear();
  });

  function bg() {
    $(".header,.content").css({
      background: "#fff",
      opacity: .94
    });
    $(".logo").css({
      background: "url(images/logo1.png) center center no-repeat",
      backgroundSize: "210px"
    });
  }
  // 鼠标滑过改变搜索框里的两个图标
  $(".position_1 img").hover(function() {
    $(this).attr("src", "images/record1.png");
  }, function() {
    $(this).attr("src", "images/record.png");
  });
  $(".position_2 img").hover(function() {
    $(this).attr("src", "images/camera1.png");
  }, function() {
    $(this).attr("src", "images/camera.png");
  });
  // 鼠标滑过用户名显示内容

  $(".nav li,.users").first().hover(function() {
    $(".users").show();
  }, function() {
    $(".users").hide();
  });
  $(".nav li,.user").eq(1).hover(function() {
    $(".user").show();
  }, function() {
    $(".user").hide();
  });
  $(".users").hover(function() {
    $(".users").show();
  }, function() {
    $(".users").hide();
  });
  $(".user").hover(function() {
    $(".user").show();
  }, function() {
    $(".user").hide();
  });

  // 滑过最后一个加载内容
  var dataImg1 = {
    "data": [{
      "src": "img_c.jpg"
    }, {
      "src": "img_c2.jpg"
    }, {
      "src": "img_c3.jpg"
    }, {
      "src": "img_c4.jpg"
    }, {
      "src": "img_c5.jpg"
    }, {
      "src": "img_c6.jpg"
    }, {
      "src": "img_c7.jpg"
    }, {
      "src": "img_c8.jpg"
    }, {
      "src": "img_c9.jpg"
    }, {
      "src": "img_c10.jpg"
    }, {
      "src": "img_c11.jpg"
    }]
  };

  window.onscroll = function() {
      // 加载内容
      if (scroll()) {
        $.each(dataImg1.data, function(index, value) {
          var dl = $("<dl>").appendTo($(".content_b1_l")),
            dt = $("<dt>").prependTo(dl);
          $("<dd>").appendTo(dl).addClass("content_b1_l_1").text("北京三里屯现“中性厕所” 标志为仨小人挤一块");
          $("<dd>").appendTo(dl).addClass("content_b1_l_2").text("腾讯新闻 06-17 17:49");
          $("<img>").appendTo(dt).attr("src", "images/" + $(value).attr("src"));
        });
      }
      // 点击回到顶部
      // window.onscroll = function() {
      // if($(window).scrollTop()>0){
      // $(".arrow").show();     
      // }else{
      //  $(".arrow").hide();   
      // }
      if ($(window).scrollTop() == 0) {
        $(".arrow").hide();
      } else {
        $(".arrow").show();
      }
      // }

    }
    // 点击回到顶部
  $(".arrow").click(function() {
    $("html,body").animate({
      scrollTop: 0
    }, 200);
  });

  // 判断什么时候加载内容
  function scroll() {
    var lastH = $(".content_b1_l dl").last().get(0).offsetTop + Math.floor($(".content_b1_l dl").last().outerHeight(true) / 2),
      documentH = $(document).height(),
      scrollH = $(window).scrollTop();
    return (lastH < documentH + scrollH) ? true : false;

  }



});