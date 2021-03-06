/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test case will loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty. */
        
         function stringTest(stringItem, testIteration){
            it(testIteration, function(){
                expect(stringItem.length).not.toBe(0);
                expect(stringItem).toBeDefined();
                expect(stringItem).not.toBeNull();
            });
         }

        allFeeds.forEach(function(rssFeed, index){
            stringTest(rssFeed.url,'rss url is valid for index: ' + index);
        })

        /* Like the previous allfeeds URL test this test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        allFeeds.forEach(function(rssFeed, index){
            stringTest(rssFeed.name,'rss name is valid for index: ' + index);
        })
    });

  /* Test suite named "The menu" */
    describe('The menu', function() {

        var $menuIcon, $body;
        beforeEach(function() {
            $menuIcon = $('.menu-icon-link');
            $body = $('body');
        });
        afterEach(function() {
            $menuIcon = null;
            $body = null;
        });
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('Menu hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBeTruthy();
        });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. One click to reveal
          * and another click that hides the menu again.
          */
        it('Menu icon clicked and is visible', function() {
            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBeFalsy();
        });

        it('Menu icon clicked 2nd time and is not visible', function() {
            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Test ensures when the loadFeed function is called and completes
         * its work, there is at least a single .entry element within the 
         * feed container. LoadFeed() is asynchronous, test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should finish loadfeed', function(done){
            var container = $('.feed').find('.entry');
            expect(container).toBeDefined();
            done();
        });
    });
    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection"', function() {
        /* Test ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.LoadFeed() is asynchronous.
         */
        var contentOne, contentTwoUrl;

        beforeEach(function(done){
            loadFeed(0, function() {
                // Get content for loadfeed with index 0
                contentOne = $('a.entry-link')[0].href;
                console.log(contentOne);
                // Load new feed from index 1 to validae against previous feed
                loadFeed(1, function() {
                    contentTwo = $('a.entry-link')[0].href;
                    console.log(contentTwo);
                    done();
                 });
            });
        });

        it('loadfeed should change content', function(done){
            // Checking if content is actually a URL           
            expect(contentOne).toContain("http");
            expect(contentTwo).toContain("http");
            //check same entry-link urls to make sure content is different
            expect(contentOne).not.toEqual(contentTwo); 
            done();
        });
    });
});
