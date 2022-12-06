import express from "express";
import config from "config";
import log from "./logger";
import webflow from "../config/webflow";
import routes from "./routes/webflowRoutes";
// import { deserializeUser } from "./middlewares";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
// app.use(deserializeUser);

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, async () => {
  //server confiremation
  log.info(`Server listing at http://${host}:${port}`);

  //cms confirmation
  await webflow.authenticatedUser().then((data: any) => {
    log.info(data);
  });

  //routes configuration
  routes(app);
});
