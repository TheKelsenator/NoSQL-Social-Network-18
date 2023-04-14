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
    reactions: [{ 
      // These are like replies:
      // Array of nested documents created 
      // with the reactionSchema

      // Like this?: 

      // reactionBody: {
      //   type: String,
      //   required: true
      // },
      // username: {
      //   type: String,
      //   required: true
      // },
      // createdAt: {
      //   type: Date,
      //   default: Date.now
      // }
    }],
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

// TODO: Create a virtual called reactionCount that retrieves 
// the length of the thought's reactions array field on query.


module.exports = reactionSchema;