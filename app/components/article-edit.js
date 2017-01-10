import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    delete(article) {
      if(confirm('Delete this???')) {
        this.sendAction('destroyArticle', article);
      }
    },
    update(article, params) {
     this.sendAction('update', article, params);
    }
  }
});
