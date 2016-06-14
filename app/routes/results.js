import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=ec6856e91f804995bd4e33ea0ba7dfc1&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
