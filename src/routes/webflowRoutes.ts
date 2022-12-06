import { Express, Request, Response } from "express";
import { webflowController } from "../controllers/webflowController";

// create instance of controller
const controller = new webflowController();

export default (app: Express) => {
  //to check the routes
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  //to get all sites
  app.get("/api/sites", controller.getAllSites);

  //to get all collections
  app.get("/api/collections/:id", controller.getSiteCollections);

  //to get items
};
