import Webflow from "webflow-api";
import dotenv from "dotenv";

dotenv.config();

// initialize the client with the access token
const webflow: Webflow = new Webflow({
  token:
    process.env.TOKEN ||
    "0152572ac6889b214305cf562755dbb65b0e8e2c646ba3c20e6d949f0b369bc7",
});

// fully loaded
// const webflow = new Webflow({
//   token: "[ACCESS TOKEN]",
//   version: "1.0.0",
//   headers: {
//     "User-Agent": "My Webflow App / 1.0",
//   },
// });

export default webflow;
