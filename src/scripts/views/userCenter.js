var userTpl =  require('../tpl/userCenter.string');


SPA.defineView('user', {
  html: userTpl,
  plugins:['delegated'],
  bindActions: {
}
});
