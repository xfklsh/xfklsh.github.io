require('./lib/spa.min.js');//单页应用程序。
require("./lib/swiper-3.3.1.min.js");

require("./views/index.js");
require("./views/home.js");
require("./views/info.js");
require("./views/feel.js");
require("./views/userCenter.js");
require('./views/guide.js')

// 配置视图的信息
//var indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';
SPA.config({
  indexView: 'guide',
});
