import { test } from 'qunit';
import moduleForAcceptance from 'content/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | personalize wizard topics');

//given a user who wants to choose what topics to follow
//When they click on the Yes personilize button 
//Then they should be redirected to the List of topics page
//And should be able to choose what topics to follow
test('clicking yes on the personalize page, routes you to the topics page', function(assert) {
	visit('/me/personalize');
  
	andThen(function() {
		click('#personalize-button');
	});

	andThen(function() {
		assert.equal(currentURL(), '/me/personalize/topics');
	});
});
//Given a user who wants to choose what topics to follow
//When they click on the Next button 
//Then they should be redirected to the List of People page
//And should be able to choose what people to follow
test('routing to personalize people page', function(assert) {
	visit('/me/personalize/topics');
  
	andThen(function() {
		click('#next-button');
	});
	andThen(function() {
		assert.equal(currentURL(), '/me/personalize/people');
	});
});
//Given a user who is on the Topics page
//When they land on this page  
//Then they should be given a list of what industries, produts and topics to follow
test('checking that industries, products, and topics exist on the page', function(assert) {
	visit('/me/personalize/topics');
  
	andThen(function() {
		var industries = find('.industries .tag');
		var topics = find('.topics .tag');
		var products = find('.products .tag');

		assert.ok(industries.length > 0);
		assert.ok(products.length > 0);
		assert.ok(topics.length > 0);
	});
});