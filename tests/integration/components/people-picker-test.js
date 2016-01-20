import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-picker', 'Integration | Component | people picker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  let person = { name: 'George', isSelected: false};
  this.set("person", person);

  this.render(hbs`{{people-picker person=person}}`);

  assert.equal(this.$("span:first").text(), 'George');
});
