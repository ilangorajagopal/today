export default {
    blocks: {
        date: true,
        hackernews: {
            name: 'Hacker News',
            size: 6,
            url: 'https://hnrss.org/active'
        },
        pocket: {
            name: 'Saved on Pocket',
            size: 2
        },
        podcasts: {
            feeds: [
                'https://changelog.fm/rss',
                'https://jsparty.fm/rss',
                'https://changelog.com/shipit/feed',
                'https://founderstalk.fm/rss',

            ],
            name: 'Podcasts',
            size: 1
        },
        readwise: {
            name: 'Highlights from Readwise',
            size: 2
        },
        rss: {
            feeds: [
                'https://fs.blog/feed/',
                'http://www.perell.com/blog?format=RSS',
                'http://feedproxy.google.com/brainpickings/rss',
                'https://praxis.fortelabs.co/feed',
                'http://waitbutwhy.com/feed',
                'https://nesslabs.com/feed',
                'http://jamesclear.com/feed',
                'http://markmanson.net/feed',
                'https://stratechery.com/feed/',
                'http://firstround.com/review/feed.xml',
                'http://feeds.feedburner.com/codinghorror/',
                'https://thesephist.com/index.xml'
            ],
            name: 'Latest Articles',
            size: 1
        },
        weather: {
            location: 'bangalore'
        },
    },
    order: [],
    timezone: 'Asia/Kolkata'
}