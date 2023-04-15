const { Schema, model } = require('mongoose');
const reactSchema = require('./React');

const thoughtSchema = new Schema(
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
      get: currentDate,
    },
    username: { 
      type: String, 
      required: true,
    },
    react: [{ 
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
    }],
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

// TODO: Create a virtual called reactionCount that retrieves 
// the length of the thought's reactions array field on query.

const Thought = model('thought', thoughtSchema);

module.exports = Thought;