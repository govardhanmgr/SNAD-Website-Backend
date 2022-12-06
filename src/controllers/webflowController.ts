import { Request, Response } from "express";
import webflow from "../../config/webflow";
import log from "../logger";
import { webflowService } from "../services/webflowService";

export class webflowController {
  //to get Alll Sites
  async getAllSites(req: Request, res: Response) {
    try {
      const site = await new webflowService().getAllSites();
      log.info(site);
      res.status(200).json({
        msg: "Data recieved",
        data: site,
      });
    } catch (e: Error | any) {
      log.error(e);
      return res.status(409).send({ msg: e.message });
    }
  }

  async getSiteCollections(req: Request, res: Response) {
    try {
      const siteId: string = await req.params.id;
      const collections = await new webflowService().getSiteCollections(siteId);
      log.info(collections);
      res.status(200).json({
        msg: "Data recieved",
        data: collections,
      });
    } catch (e: Error | any) {
      log.error(e);
      return res.status(409).json({ msg: e.message });
    }
  }
}
