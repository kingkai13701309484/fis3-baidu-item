$(function(){function t(){$(".header,.content").css({background:"#fff",opacity:.94}),$(".logo").css({background:"url(images/logo1.png) center center no-repeat",backgroundSize:"210px"})}function n(){var t=$(".content_b1_l dl").last().get(0).offsetTop+Math.floor($(".content_b1_l dl").last().outerHeight(!0)/2),n=$(document).height(),i=$(window).scrollTop();return n+i>t?!0:!1}$(".nav span,.header_r").hover(function(){$(".header_r").show()},function(){$(".header_r").hide()}),$(".content_t li").first().hover(function(){$(this).find("img").attr("src","images/my_1.png")},function(){$(this).find("img").attr("src","images/my.png")}),$(".content_t li").each(function(t){$(this).click(function(){0!=t?($(".content_t li").first().find("img").attr("src","images/my.png"),$(".content_t li").first().mouseover(function(){$(this).find("img").attr("src","images/my_1.png")}),$(".content_t li").first().mouseout(function(){$(this).find("img").attr("src","images/my.png")})):($(".content_t li").first().find("img").attr("src","images/my_1.png"),$(".content_t li").first().mouseout(function(){$(this).find("img").attr("src","images/my_1.png")})),$(".content_t_hover").removeClass("content_t_hover"),$(this).addClass("content_t_hover"),$(".content_hide").removeClass("content_hide"),$(".content_bb").eq(t).addClass("content_hide")})}),$("#skin").click(function(){$(".skin").slideDown(500)}),$(".skin_1_2,.outers").click(function(){$(".skin").slideUp(500)}),window.onload=function(){var n=window.localStorage.getItem("key");null==n?$(".bg").find("img").attr({src:""}):0==n?($(".bg").find("img").attr({src:"images/bg"+n+".jpg"}),t()):1==n?($(".bg").find("img").attr({src:"images/bg"+n+".jpg"}),t()):2==n?($(".bg").find("img").attr({src:"images/bg"+n+".jpg"}),t()):3==n&&($(".bg").find("img").attr({src:"images/bg"+n+".jpg"}),t()),$(".skin li").each(function(n){$(this).click(function(){$(".bg").find("img").attr({src:"images/bg"+n+".jpg"}),t(),window.localStorage.setItem("key",n)})})},$(".skin_1_1").click(function(){$(".bg").find("img").attr({src:""}),$(".logo").css("background",""),window.localStorage.clear()}),$(".position_1 img").hover(function(){$(this).attr("src","images/record1.png")},function(){$(this).attr("src","images/record.png")}),$(".position_2 img").hover(function(){$(this).attr("src","images/camera1.png")},function(){$(this).attr("src","images/camera.png")}),$(".nav li,.users").first().hover(function(){$(".users").show()},function(){$(".users").hide()}),$(".nav li,.user").eq(1).hover(function(){$(".user").show()},function(){$(".user").hide()}),$(".users").hover(function(){$(".users").show()},function(){$(".users").hide()}),$(".user").hover(function(){$(".user").show()},function(){$(".user").hide()});var i={data:[{src:"img_c.jpg"},{src:"img_c2.jpg"},{src:"img_c3.jpg"},{src:"img_c4.jpg"},{src:"img_c5.jpg"},{src:"img_c6.jpg"},{src:"img_c7.jpg"},{src:"img_c8.jpg"},{src:"img_c9.jpg"},{src:"img_c10.jpg"},{src:"img_c11.jpg"}]};window.onscroll=function(){n()&&$.each(i.data,function(t,n){var i=$("<dl>").appendTo($(".content_b1_l")),o=$("<dt>").prependTo(i);$("<dd>").appendTo(i).addClass("content_b1_l_1").text("北京三里屯现“中性厕所” 标志为仨小人挤一块"),$("<dd>").appendTo(i).addClass("content_b1_l_2").text("腾讯新闻 06-17 17:49"),$("<img>").appendTo(o).attr("src","images/"+$(n).attr("src"))}),0==$(window).scrollTop()?$(".arrow").hide():$(".arrow").show()},$(".arrow").click(function(){$("html,body").animate({scrollTop:0},200)})});