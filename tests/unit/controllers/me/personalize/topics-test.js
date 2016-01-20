import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:me/personalize/topics', 'Unit | Controller | me/personalize/topics', {
  // Specify the other units that are required for this test.
  needs: ['service:followService']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
