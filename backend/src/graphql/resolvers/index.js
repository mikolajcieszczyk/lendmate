const User = require("../../models/User");
const Applicant = require("../../models/Applicant");
const onfido = require("../../utils/onfido");
const { OnfidoApiError } = require("@onfido/api");

const resolvers = {
  Query: {
    hello: () => "Hello from Reflectoring Blog",
    welcome: (parent, args) => `Hello ${args.name}`,
    users: async () => await User.find({}),
    user: async (parent, args) => await User.findById(args.id),
    applicant: async (parent, args) => await Applicant.findById(args.id),
    applicants: async () => await Applicant.find({}),
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
      // try {
      //   const applicant = await onfido.applicant.create({
      //     firstName,
      //     lastName,
      //   });

      //   const check = await onfido.check.create(applicant.id, {
      //     type: "express",
      //     reports: [{ name: "document" }, { name: "facial_similarity" }],
      //   });

      //   return check;
      // } catch (error) {
      //   if (error instanceof OnfidoApiError) {
      //     // An error response was received from the Onfido API, extra info is available.
      //     console.log(error.message);
      //     console.log(error.type);
      //     console.log(error.isClientError());
      //   } else {
      //     // No response was received for some reason e.g. a network error.
      //     console.log(error.message);
      //   }
      // }

      const applicant = await onfido.applicant.create({
        firstName,
        lastName,
      });
      console.log(applicant);

      const check = await onfido.check.create(applicant.id, {
        type: "express",
        reports: [{ name: "document" }, { name: "facial_similarity" }],
      });

      const newApplicant = new Applicant({
        onfidoId: applicant.id,
        firstName,
        lastName,
      });

      console.log("applicant: ", applicant);
      console.log("newApplicant: ", newApplicant);
      console.log("sdkToken: ", sdkToken);

      const sdkToken = await onfido.sdkToken.generate({
        applicantId: applicant.id,
        referrer: "http://localhost:4000/*",
      });

      await newApplicant.save();

      return { applicantId: newApplicant._id, sdkToken, check };
    },

    updateApplicant: async (parent, args) => {
      const { id, ...updates } = args;
      const result = await Applicant.findByIdAndUpdate(id, updates, {
        new: true,
      });
      return result;
    },
    deleteApplicant: async (parent, args) => {
      const { id } = args;
      const deletedApplicant = await Applicant.findByIdAndDelete(id);
      if (!deletedApplicant) {
        throw new Error(`Applicant with ID ${id} not found`);
      }
      return deletedApplicant;
    },
  },
};

module.exports = resolvers;
