const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'ginger2',
        password: '123abcxyz'
    },
    {
        username: 'juniper3',
        password: '123abcxyz'
    },
    {
        username: 'paprika5',
        password: '123abcxyz'
    },
    {
        username: 'basil6',
        password: '123abcxyz'
    },
    {
        username: 'coriander7',
        password: '123abcxyz'
    },
    {
        username: 'chili8',
        password: '123abcxyz'
    },
    {
        username: 'garlic9',
        password: '123abcxyz'
    },
    {
        username: 'thyme1',
        password: '123abcxyz'
    },
    {
        username: 'mint13',
        password: '123abcxyz'
    },
    {
        username: 'berry77',
        password: '123abcxyz'
    },
    {
        username: 'berrybonds77',
        password: '123abcxyz'
    },
    {
        username: 'berryboss77',
        password: '123abcxyz'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;