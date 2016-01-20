import Ember from 'ember';

export default Ember.Route.extend({
	followService: Ember.inject.service(),
	actions: {
		followPerson(person){
			if(person.isSelected){
			  this.get('followService').unfollowPerson(person.id);
  				Ember.set(person, 'isSelected', false);
			} else {
			  this.get('followService').followPerson(person.id);
  				Ember.set(person, 'isSelected', true);
			}
		}
	},
	model(){

    // TODO: Filter the people by the selected Tags

		return [
		  {
		  	id: 1,
		  	name: 'Bob Calhoun',
		  	title: 'Product Manager, Sales Process',
		  	avatar: '',
		  	tags: ['Sales Process', 'Sales Enablement', 'Sales Productivity', 'CRM'],
		  	isSelected: false
		  },
		  {
		  	id: 2,
		  	name: 'Greg Goodman',
		  	title: 'SME, Sales Enablement',
		  	avatar: '',
		  	tags: ['Sales Enablement', 'Sales Process Pro', 'CRM'],
		  	isSelected: false
		  },
		  {
		  	id: 3,
		  	name: 'Amber Aggarwal',
		  	title: 'SME, Healthcare',
		  	avatar: '',
		  	tags: ['Healthcare', 'CRM'],
		  	isSelected: false
		  },
		  {
		  	id: 4,
		  	name: 'Cristina O\'Shaunessy',
		  	title: 'Sr. Directory, Business Services',
		  	avatar: '',
		  	tags: ['Business Services', 'Sales Enablement', 'Sales Process'],
		  	isSelected: false
		  },
		  {
		  	id: 5,
		  	name: 'Mary Swanson',
		  	title: 'SME, Predictive Analytics',
		  	avatar: '',
		  	tags: ['Predictive Analytics', 'Insights Pro'],
		  	isSelected: false
		  },
		  {
		  	id: 6,
		  	name: 'Robert Pelosi',
		  	title: 'Sr. Director, Sales Enablement',
		  	avatar: '',
		  	tags: ['Sales Enablement', 'Sales Process', 'Sales Process Pro'],
		  	isSelected: false
		  }
		];
	}
});
