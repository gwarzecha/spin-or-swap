const { User } = require('../models');


const resolvers = {
  Query: {
    // not sure if parent/args is needed below, may need to reassess
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        });
        return userData;
      }
    },
  },
};

module.exports = resolvers;
