const { Schema, Types } = require('mongoose');
// Do I need to require mongoose ObjectID?

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, // Is this right?
      default: () => new Types.ObjectId(),
    },
    reactionBody: { 
      type: String, 
      required: true, 
      maxLength: 280, 
      minLength: 1,
    },
    username: { 
      type: String, 
      required: true,
    },
    createdAt: { 
      type: Date, 
      default: Date.now, 
      get: formatDate, 
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

// Code I pulled from the internet and I don't know what it does!!
function formatDate(createdAt) {
  return (createdAt = new Date().toLocaleDateString());
}

// Schema Settings

// This will not be a model, but rather will be used as the 
// reaction field's subdocument schema in the Thought model.

// Example from my Thought model
// reactionSchema.virtual('reactionCount').get(function () {
//  return this.reactions.length;
// });

module.exports = reactionSchema;