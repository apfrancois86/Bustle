import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  authors: DS.attr()
});
