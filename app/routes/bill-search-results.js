import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=ec6856e91f804995bd4e33ea0ba7dfc1&zip=';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
