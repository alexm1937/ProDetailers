
const { User } = require('../models');

const userdata = [
    {
        email: 'all_in33@gmail.com',
        password: 'password123'
      },
      {
        email: 'jillianw@gmail.com',
        password: 'password123'
      },
      {
        email: 'brainyb@gmail.com',
        password: 'password123'
      },
      {
        email: 'frankeee@gmail.com',
        password: 'password123'
      }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;