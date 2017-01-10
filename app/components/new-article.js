import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle() {
      var params = {
        headline: this.get('headline'),
        content: this.get('content'),
        authors: this.get('authors'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
