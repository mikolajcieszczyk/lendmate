const User = require("../../models/User");
const Applicant = require("../../models/Applicant");
const onfido = require("../../utils/onfido");

const resolvers = {
  Query: {
    hello: () => "Hello from Reflectoring Blog",
    welcome: (parent, args) => `Hello ${args.name}`,
    users: async () => await User.find({}),
    user: async (parent, args) => await User.findById(args.id),
  },
  Mutation: {
    createUser: async (parent, args) => {
      const { email, password } = args;
      const newUser = new User({
        email,
        password,
      });
      await newUser.save();
      return newUser;
    },
    updateUser: async (parent, args) => {
      const { id } = args;
      const result = await User.findByIdAndUpdate(id, args);
      return result;
    },
    deleteUser: async (parent, args) => {
      const { id } = args;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return deletedUser;
    },
    createApplicant: async (_, { firstName, lastName }) => {
      const applicant = await onfido.applicant.create({
        firstName,
        lastName,
      });

      const newApplicant = new Applicant({
        onfidoId: applicant.id,
        firstName,
        lastName,
      });

      await newApplicant.save();

      const check = await onfido.check.create(applicant.id, {
        type: "express",
        reports: [{ name: "document" }, { name: "facial_similarity" }],
      });

      const sdkToken = await onfido.sdkToken.generate({
        applicantId: applicant.id,
        referrer: "http://localhost:4000/*",
      });

      return { applicantId: newApplicant.id, sdkToken };
    },
  },
};

module.exports = { resolvers };
