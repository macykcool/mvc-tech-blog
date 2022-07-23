const { Post } = require('../models');

const postdata = [
    {
        title: 'DADDY BEZOS',
        post_text: 'Ruler of the underworld',
        user_id: 2
    },
    {
        title: 'Twitter for sale.',
        post_text: 'selling out or cashing out',
        user_id: 4
    },
    {
        title: 'DEPRESSION SINK HOTTEST NEW ONLINE COMMUNITY',
        post_text: 'coming to you july 10th',
        user_id: 6
    },
    {
        title: 'SPACE JAM',
        post_text: 'pete davidson is wearing kennedys suit to space',
        user_id: 8
    },
    {
        title: 'Myspace Tom',
        post_text: 'havent heard that name in years',
        user_id: 10
    },
    {
        title: 'Theranos truthers convinced Lizzy had a viable product',
        post_text: 'but the government shut it down because it would have provided universal healthcare',
        user_id: 9
    },
    {
        title: 'Neopets amusement park WHEN?',
        post_text: 'need an omelette STAT',
        user_id: 7
    },
    {
        title: 'Is life a garden?',
        post_text: 'or a punishment',
        user_id: 5
    },
    {
        title: 'How to build your own PC',
        post_text: 'go to youtube',
        user_id: 3
    },
    {
        title: 'WAYNE season two when?',
        post_text: 'rip youtube tv',
        user_id: 1
    },
    {
        title: 'RIP to instagram',
        post_text: 'that site is weak sauce now, and please get off facebook for the love of dogs.',
        user_id: 11
    },
    {
        title: 'Inflation',
        post_text: 'is brutal',
        user_id: 10
    },
    {
        title: 'Teslas catching on fire prompts state action',
        post_text: 'Arizona set to remove all public charging stations',
        user_id: 12
    },
    {
        title: 'Scrub Daddy and Scrub Mommy are in an open relationship',
        post_text: 'With the global economy',
        user_id: 4
    },
    {
        title: 'Zuck joins Ru Paul in fracking venture',
        post_text: 'Drag Royalty is blossoming into American Emiates',
        user_id: 5
    },
    {
        title: 'Love Island joins the Metaverse',
        post_text: 'Casa Amor coming soon',
        user_id: 7
    },
    {
        title: 'Kirkland brands offically accept BITCOIN',
        post_text: 'can purchase gasoline, alcohol or tobacco products with cash only',
        user_id: 6
    },
    {
        title: 'Pitchfork App only available on floppy disks',
        post_text: 'analog movement takes a wider stride into the radio shack',
        user_id: 2
    },
    {
        title: 'Paris Hiltons NFT Burning Man Camp, APES ONLY',
        post_text: 'sliving',
        user_id: 1
    },
    {
        title: 'Ricky Martin CEO of onlyfans',
        post_text: 'living la vida loca',
        user_id: 11
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;