import { test } from 'qunit';
import moduleForAcceptance from 'content/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | me personalize people');

test('visiting /me/personalize/people', function(assert) {
  // Given a user is logged in
  // When they visit the personalization - follow route
  visit('/me/personalize/people');

  // Then they should be on the personalization - follow route
  andThen(function() {
    assert.equal(currentURL(), '/me/personalize/people');
  });
});

test('container is present /me/personalize/people', function(assert) {
  // Given a user is logged in
  // When they visit the personalization - follow route
  visit('/me/personalize/people');

  // Then the card container is present
  andThen(function() {
    var container = find('.peopleContainer');
    var length = container.length;
    assert.ok(length >0);
  });
});

test('card is present /me/personalize/people', function(assert) {
  // Given a user is logged in
  // When they visit the personalization - follow route
  visit('/me/personalize/people');

  // Then at least one card is present
  andThen(function() {
    var container = find('.peopleCard');
    var length = container.length;
    assert.ok(length>0);

  });
});

test('instruction text present /me/personalize/people', function(assert) {
  // Given a user is logged in
  // When they visit the personalization - follow route
  visit('/me/personalize/people');

  // Then instructional text is present
  andThen(function() {
    var text = find('.instructionalText');
    var length = text.length;
    assert.ok(length>0);

  });
});
