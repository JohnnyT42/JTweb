!function(e){var n={carousels:{speed:4,fadeIn:!0,fadeDelay:250}};skel.breakpoints({wide:"(max-width: 1680px)",normal:"(max-width: 1280px)",narrow:"(max-width: 960px)",narrower:"(max-width: 840px)",mobile:"(max-width: 736px)"}),e(function(){var a=e(window),o=e("body");o.addClass("is-loading"),a.on("load",function(){o.removeClass("is-loading")}),skel.vars.IEVersion<9&&e(":last-child").addClass("last-child"),e("form").placeholder(),skel.on("+mobile -mobile",function(){e.prioritize(".important\\28 mobile\\29",skel.breakpoint("mobile").active)}),e("#nav > ul").dropotron({mode:"fade",speed:350,noOpenerFade:!0,alignment:"center"}),e(".scrolly").scrolly(),e('<div id="navButton"><a href="#navPanel" class="toggle"></a></div>').appendTo(o),e('<div id="navPanel"><nav>'+e("#nav").navList()+"</nav></div>").appendTo(o).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,target:o,visibleClass:"navPanel-visible"}),"wp"==skel.vars.os&&skel.vars.osVersion<10&&e("#navButton, #navPanel, #page-wrapper").css("transition","none"),e(".carousel").each(function(){var o,s,l,i,r,t=e(this),d=e('<span class="forward"></span>'),c=e('<span class="backward"></span>'),v=t.children(".reel"),u=v.children("article"),p=0;n.carousels.fadeIn&&(u.addClass("loading"),t.onVisible(function(){var e,o=u.length-Math.ceil(a.width()/l);e=window.setInterval(function(){var n=u.filter(".loading"),a=n.first();return n.length<=o?(window.clearInterval(e),void u.removeClass("loading")):void(skel.vars.IEVersion<10?(a.fadeTo(750,1),window.setTimeout(function(){a.removeClass("loading")},50)):a.removeClass("loading"))},n.carousels.fadeDelay)},50)),t._update=function(){p=0,s=-1*i+a.width(),o=0,t._updatePos()},skel.vars.IEVersion<9?t._updatePos=function(){v.css("left",p)}:t._updatePos=function(){v.css("transform","translate("+p+"px, 0)")},d.appendTo(t).hide().mouseenter(function(e){r=window.setInterval(function(){p-=n.carousels.speed,s>=p&&(window.clearInterval(r),p=s),t._updatePos()},10)}).mouseleave(function(e){window.clearInterval(r)}),c.appendTo(t).hide().mouseenter(function(e){r=window.setInterval(function(){p+=n.carousels.speed,p>=o&&(window.clearInterval(r),p=o),t._updatePos()},10)}).mouseleave(function(e){window.clearInterval(r)}),a.load(function(){i=v[0].scrollWidth,skel.on("change",function(){skel.vars.touch?(v.css("overflow-y","hidden").css("overflow-x","scroll").scrollLeft(0),d.hide(),c.hide()):(v.css("overflow","visible").scrollLeft(0),d.show(),c.show()),t._update()}),a.resize(function(){i=v[0].scrollWidth,t._update()}).trigger("resize")})})})}(jQuery);