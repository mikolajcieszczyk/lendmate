require("dotenv").config();
const { Onfido, Region } = require("@onfido/api");

const onfido = new Onfido({
  apiToken: process.env.ONFIDO_API_TOKEN,
  region: Region.EU,
});

module.exports = onfido;
