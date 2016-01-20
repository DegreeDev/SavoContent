import Ember from 'ember';

export default Ember.Route.extend({
	followService : Ember.inject.service(),
	actions : {
		follow(tag){
			this.get("followService").followTag(tag);
		},
		unfollow(tag){
			this.get("followService").unfollowTag(tag);
		}
	},
	model(){
		let model = this.modelFor("me");

		return {
			topics: model.topics,
			industries: model.industries,
			products : model.products
		};
	}
});
