const { Schema, Types } = require('mongoose');
// Do I need to require mongoose ObjectID?

const reactSchema = new Schema(
  {
    reactId: {
      type: Schema.Types.ObjectId, // Is this right?
      default: () => new Types.ObjectId(),
    },
    reactBody: { 
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
      get: currentDate, 
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

function currentDate(createdAt) {
  return (createdAt = new Date().toLocaleDateString());
}

// Schema Settings

// This will not be a model, but rather will be used as the 
// reaction field's subdocument schema in the Thought model.


module.exports = reactSchema;