
var RSSParser = require('rss-parser');

const feedUrl = "http://feeds.bbci.co.uk/news/rss.xml";

const parse = async (url) => {
    const feed = await new RSSParser().parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(`${item.title} - ${item.link}\n${item.contentSnippet}\n\n`);
    });
};

console.log("Parsing " + feedUrl);

parse(feedUrl);