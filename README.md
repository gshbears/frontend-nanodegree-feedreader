# Nanodegree_FeedReader_Testing![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

The FeedReader Testing project reinforces "test-driven development" or TDD by utilizing [Jasmine](https://automationpanda.com/2018/01/26/javascript-testing-with-jasmine/) a JavaScript test framework. Various test suites ensure the the application loads RSS feeds from various sites.

## Getting Started

### Setup
`$ git clone https://github.com/gshbears/frontend-nanodegree-feedreader.git`

### Run

`$ open index.html`

The application will run the following test suites:
1) "allFeeds": test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
2) "The menu": test that ensures the menu element is hidden by default and ensures the menu changes visibility when the menu icon is clicked.
3) "Initial Entries": test that ensures when the loadFeed function is called and completes its work.
4) "New Feed Selection": test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
