var feelTpl =  require('../tpl/feel.string');
SPA.defineView('feel', {
  html: feelTpl,
  plugins:['delegated'],
  bindActions: {
}
});
