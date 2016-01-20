import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return {
			username: "Matthew",
			avatar : "https://secure.gravatar.com/avatar/bec142a04af2287735ac9c868e3d6f2a"
		};
	}
});
