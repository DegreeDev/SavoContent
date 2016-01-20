import Ember from 'ember';

export default Ember.Service.extend({
	followTag(tag){
		this.get("followedTags").pushObject(tag);
	},
	unfollowTag(tag){
		this.get("followedTags").removeObject(tag);
	},
	followPerson(person){
		this.get("followedPeople").pushObject(person);
	},
	unfollowPerson(person){
		this.get("followedPeople").removeObject(person);
	},
	followedTags : [],
	followedPeople: []
});
