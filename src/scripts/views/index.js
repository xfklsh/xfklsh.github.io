var indexTpl = require('../tpl/index.string');
//require("../lib/swiper-3.3.1.min.js");
SPA.defineView('index', {
  html: indexTpl,

  plugins:['delegated'],
  // 子视图的嵌套
  init: {
    indexSwiper: null,
  },
  modules: [{
      name: 'content',
      container: '.m-container',
      views: ['home', 'info', 'feel', 'user'],
      defaultTag: 'home'
    }],
	  bindActions: {
	  'switch.swiper': function (e) {
      this.setActive($(e.el));
      this.indexSwiper.slideTo($(e.el).index()+1);
    },
	  'switch.view':function(e) {
	    this.modules.content.launch(e.data.tag);
	    $(e.el).addClass('active').siblings().removeClass('active');
	  }
	},
	  bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#index-swiper', {
        loop: true,
        onSlideChangeStart: function (swiper) {
          $('#index-nav li').eq(swiper.activeIndex-1)
            .addClass('active').siblings().removeClass('active');
        }
      });
    }
  }
});
window.onload = function() {
  var mySwiper = new Swiper ('.home-banner', {
      direction: 'horizontal',
      loop: true,
      autoplay:1000,
      autoplayDisableOnInteraction:false,
      speed:500,
      // 如果需要分页器
      pagination: '.swiper-pagination',
    })
}
