import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {
        id: 1,
        class: 'wordDoc',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/1'
      },
      {
        id: 2,
        class: 'question',
        text: 'Are you a sales first company?',
        icon: 'http://lorempixel.com/100/100/food/2'
      },
      {
        id: 3,
        class: 'wordDoc',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/3'
      },
      {
        id: 4,
        class: 'wordDoc',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/4'
      },
      {
        id: 5,
        class: 'wordDoc',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/5'
      },
      {
        id: 6,
        class: 'question',
        text: 'Are you a sales first company?',
        icon: 'http://lorempixel.com/100/100/food/6'
      },
      {
        id: 7,
        class: 'wordDoc',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/7'
      },
      {
        id: 8,
        class: 'question',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/8'
      },
      {
        id: 9,
        class: 'wordDoc',
        text: 'Sales Document',
        icon: 'http://lorempixel.com/100/100/food/9'
      },
      {
        id: 10,
        class: 'question',
        text: 'Are you a sales first company?',
        icon: 'http://lorempixel.com/100/100/food/10'
      }
    ];
  }
});
