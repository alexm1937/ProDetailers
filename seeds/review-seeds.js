
const { Review } = require('../models');

const reviewdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        user_id: 1,
      },
      {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        user_id: 2,
      },
      {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        user_id: 3,
      },
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;