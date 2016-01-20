import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
});

Router.map(function() {
  this.route('me', function() {
    this.route('personalize', function() {
      this.route('topics');
      this.route('people');
    });
    this.route('feed');
  });
}); 

export default Router;
