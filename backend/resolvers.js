const { User } = require("./models/User.js");

const resolvers = {
  Query: {
    hello: () => "Hello from Reflectoring Blog",
    welcome: (parent, args) => `Hello ${args.name}`,
    users: async () => await User.find({}),
    user: async (parent, args) => await User.findById(args.id),
  },
  Mutation: {
    create: async (parent, args) => {
      const { email, password } = args;
      const newUser = new User({
        email,
        password,
      });
      await newUser.save();
      return newUser;
    },
    update: async (parent, args) => {
      const { id } = args;
      const result = await User.findByIdAndUpdate(id, args);
      return result;
    },
    delete: async (parent, args) => {
      const { id } = args;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return deletedUser;
    },
  },
};

module.exports = { resolvers };
