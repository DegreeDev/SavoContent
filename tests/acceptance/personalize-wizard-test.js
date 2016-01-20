import { test } from 'qunit';
import moduleForAcceptance from 'content/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | personalize wizard');

test('visiting /me/personalize', function(assert) {
  // Given a user is logged in
  // When they visit the personalization page
	visit('/me/personalize');

  // Then they should be on the personalization page
  andThen(function() {
  	assert.equal(currentURL(), '/me/personalize');
  });
});
test('user should see two buttons /me/personalize', function(assert) {
  // Given a logged in user
  // When the user is on the personalization page
	visit('/me/personalize');

  // Then they should see two buttons
  andThen(function() {
    var buttons = find('a');
    assert.equal(buttons.length, 2);
  });
});

test('user should see their avatar and full name /me/personalize', function(assert) {
  // Given a user is logged in
  // When they visit the personalization page
	visit('/me/personalize');

  // Then they should see their avatar and full name
  andThen(function() {
    var img = find('img');
    var name = find('h1');

    assert.ok(img.length > 0);
    assert.ok(name.length > 0);
  });
});

test('user should see instructional text /me/personalize', function(assert) {
  // Given a user is logged in
  // When they visit the personalization page
	visit('/me/personalize');

  // Then they should see their avatar and full name
  andThen(function() {
    var text = find('h3');
    assert.ok(text.length > 0);
  });
});

test('user click Personalize button /me/personalize', function(assert) {
  // Given a logged in user
  // When the user is on the personalization page
	visit('/me/personalize');

  // when they click on the Yes, Personalize button
  // Then they should go to step 2 of personalization
  andThen(function() {
    click('#personalize-button');
  });

  andThen(function(){
  	assert.equal(currentURL(), '/me/personalize/topics');
  });
});

test('user click Skip button /me/personalize', function(assert) {
  // Given a logged in user
  // When the user is on the personalization page
	visit('/me/personalize');

  // when they click on the No, Skip button
  // Then they should go to MyPage
  andThen(function() {
    click('#skip-personalize-button');
  });
  andThen(function(){
      assert.equal(currentURL(), '/me/feed');
  });
});
