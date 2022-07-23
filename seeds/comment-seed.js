const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'link in bio',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'parasailing intot the sunset',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'como la flor',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'last night i dreamt of San Pedro',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'Welcome to Miami',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'vacation all i ever wanted',
        user_id: 1,
        post_id: 20
    },
    {
        comment_text: 'we can got to the tropics, sip pina coladas',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'its a cruel summer',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'wasted away in margaritaville',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'red red wine, goes to my head',
        user_id: 6,
        post_id: 20
    },
    {
        comment_text: 'islands in the sun',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'islands in the stream',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'I dont practice santeria',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'sitting on the dock of the bay',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'i have got two tickets to paradise',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'its going to be a long hot summer.',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'i feel good. i feel alright. cruisin through the neighborhood on a warm summer night',
        user_id: 2,
        post_id: 20
    },
    {
        comment_text: 'when the sun goes down, we will be groovin',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text: 'if everybody had an ocean across the usa then everybody would be surfin like california',
        user_id: 5,
        post_id: 13
    },
    {
        comment_text: 'vacation all i ever wanted vacation i need a get away',
        user_id: 9,
        post_id: 16
    },
    {
        comment_text: 'i think its fly when girls stop by for the summer',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'it was 1989, my thought were short my hair was long',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'this just cant be summer love',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'i had a bbq stain on my white t shirt',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'when i met you in the summer',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'i got that summer time sadness',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'there was a place on ocean avenue where i used to sit and talk with you',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'gonna be a long hot summer we should be together ',
        user_id: 4,
        post_id: 16
    },
    {
        comment_text: 'jerimiah was a bull frog',
        user_id: 4,
        post_id: 18
    },
    {
        comment_text: 'catdog',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'ive got sunshine on a cloudy day',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'aint no sunshine when shes gone',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'put on my blue suede shoes',
        user_id: 3,
        post_id: 19
    },
    {
        comment_text: 'never gonna get it',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'the boys of summer',
        user_id: 10,
        post_id: 14
    },
    {
        comment_text: 'summer of 69',
        user_id: 10,
        post_id: 8
    },
    {
        comment_text: 'i never dreamed youd leave in summer',
        user_id: 10,
        post_id: 11
    },
    {
        comment_text: 'cool for the summer',
        user_id: 8,
        post_id: 5
    },
    {
        comment_text: 'hot girl summer',
        user_id: 8,
        post_id: 19
    },
    {
        comment_text: 'summer breeze makes me feel fine',
        user_id: 9,
        post_id: 19
    },
    {
        comment_text: 'summer summer summertime time to sit back and unwind',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
        user_id: 2,
        post_id: 11
    },
    {
        comment_text: 'solar power',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'i wanna go to the beach',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text: 'IM GONNA SOAK UP THE SUN GOT 45 ON SO I CAN ROCK ON',
        user_id: 7,
        post_id: 9
    },
    {
        comment_text: '',
        user_id: 4,
        post_id: 19
    },
    {
        comment_text: 'lord knows im weak, wont somebody get me off of this reef',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'who lives in a pineapple under the sea',
        user_id: 2,
        post_id: 19
    },
    {
        comment_text: 'itsy bitsy teenie weenie yelow polka dot bikini',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'aruba, jamaica ooh i wanna take ya to the florida keys',
        user_id: 10,
        post_id: 12
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;