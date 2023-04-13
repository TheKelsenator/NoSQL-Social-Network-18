const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxLength: 20,
      minLength: 1,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\../, // <- Need to make a different match pattern
    },
    thoughts: { 
      type: Schema.Types.Array, 
      ref: 'thought', 
    },
    friends: {
      type: Schema.Types.Array,
      ref: 'user',
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
// Creates a virtual allowing us to track the amount of friends a user has
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;