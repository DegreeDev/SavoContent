import { test } from 'qunit';
import moduleForAcceptance from 'content/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | my page');

test('visiting /me redirects to /me/feed', function(assert) {
  visit('/me');

  andThen(function() {
    assert.equal(currentURL(), '/me/feed');
  });
});
