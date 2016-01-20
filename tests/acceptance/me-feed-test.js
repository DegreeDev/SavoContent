import { test } from 'qunit';
import moduleForAcceptance from 'content/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | me feed');

test('visiting /me/feed', function(assert) {
  visit('/me/feed');

  andThen(function() {
    assert.equal(currentURL(), '/me/feed');
  });
});

test('Feed Container /me/feed', function(assert) {
  //Given a user is on  MyPage
  //when the user is viewing the feed tab
  visit('/me/feed');

  //then the feed is displayed on the page
  andThen(function() {
    var feed= find('#feedContainer');
    assert.ok(feed.length > 0);
  });
});


test('WordDoc On  Feed /me/feed', function(assert) {
  //Given a user is on MyPage
  //when the user is viewing the feed tab
  visit('/me/feed');

  //Then the feed will contain a word document
  andThen(function() {
    var item = find('.feedItem.wordDoc');
    assert.ok(item.length > 0);
  });
});

test('Questions On Feed /me/feed', function(assert) {
  //Given a user is on MyPage
  //when the user is viewing the feed tab
  visit('/me/feed');

  //Then the feed will contain a questions
  andThen(function() {
    var item = find('.feedItem.question');
    assert.ok(item.length > 0);
  });
});

test('Asset Count /me/feed', function(assert) {
  //Given a user is on MyPage
  //when the user is viewing the feed tab
  visit('/me/feed');

  //Then there will be at least 10 assets in the feed
  andThen(function() {
    var item = find('.feedItem');
    assert.ok(item.length > 9);
  });
});
