import Ember from 'ember';

export default Ember.Component.extend({
   classNameBindings: ['person.isSelected:selected'],
   actions: {
     select(){
       let person = this.get('person');
       this.sendAction('select', person);
     }
   }
});
