import Ember from 'ember';

export default Ember.Component.extend({
	classNames : ['tag'],
	classNameBindings: [ 'isFollowing' ],
	click() {
		let	isFollowing = this.get("isFollowing"), 
				name = this.get("name"); 

		if(isFollowing){
			this.sendAction("unfollow", name);
		} else {
			this.sendAction("follow", name); 
		}

		this.toggleProperty("isFollowing");
	}
});
