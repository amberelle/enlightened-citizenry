import Ember from 'ember';

export default Ember.Component.extend({
  infoSelected: false,
  actions: {
    selectMoreInfo: function() {
      this.set('infoSelected', true);
    },
    hideInfo: function() {
      this.set('infoSelected', false);
    }
  }
});
