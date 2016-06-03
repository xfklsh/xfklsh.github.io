var infoTpl = require('../tpl/infoSpace.string');

SPA.defineView('info', {
  html: infoTpl,
  plugins:['delegated'],
  bindActions: {
}
});
