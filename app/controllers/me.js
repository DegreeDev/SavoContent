import Ember from 'ember';

export default Ember.Controller.extend({
	followService: Ember.inject.service(),
	app : Ember.inject.controller("application"),

	//Profile 
	username : Ember.computed.reads('app.model.username'),
	avatar: Ember.computed.reads('app.model.avatar'),

});
