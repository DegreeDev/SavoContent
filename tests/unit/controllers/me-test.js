import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:me', 'Unit | Controller | me', {
  // Specify the other units that are required for this test.
  needs: ['controller:application', 'service:followService']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
