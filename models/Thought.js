const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    thoughtText: { 
      type: String, 
      required: true, 
      maxLength: 280,
      minLength: 1,
    },
    createdAt: { 
      type: Date, 
      default: Date.now, 
      get: formatDate,
    },
    username: { 
      type: String, 
      required: true,
    },
    reactions: { // These are like replies:
      // Array of nested documents created 
      // with the reactionSchema
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);


// Code I pulled from the internet and I don't know what it means!!
function formatDate(createdAt) {
  return (createdAt = new Date().toLocaleDateString());
}

// Create a virtual called reactionCount that retrieves 
// the length of the thought's reactions array field on query.

// reactionSchema.virtual('reactionCount').get(function () {
//  return this.reactions.length;
// });

// No idea if the above commented out code is nearly correct,
// going off of what I wrote for a virtual in User.js

module.exports = reactionSchema;