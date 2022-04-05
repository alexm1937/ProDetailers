
const User = require('./User');
const Review = require('./Review');


//User has many reviews, these reviews have a foreign key referencing user id, and on delete of user delete all reviews
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Review };