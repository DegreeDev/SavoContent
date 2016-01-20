import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var model = {
			industries : [
				{ name : "Finance", isFollowing : false },
				{ name : "Healthcare", isFollowing : false },
				{ name : "Retail", isFollowing : false },
				{ name : "Tech", isFollowing : false },
				{ name : "Business Services", isFollowing : false }
			], 
			products : [
				{ name : "Sales Process Pro", isFollowing : false },
				{ name : "Sales Content Pro", isFollowing : false }
			], 
			topics : [
				{ name : "Mobility", isFollowing: false },
				{ name : "Sales Process", isFollowing: false },
				{ name : "Sales Enablement", isFollowing: false },
				{ name : "Sales Productivity", isFollowing: false },
				{ name : "Predictive Analytics", isFollowing: false },
				{ name : "CRM", isFollowing: false }
			]
		};

		return model;
	}
});
