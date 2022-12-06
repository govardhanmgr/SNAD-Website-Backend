import { Site } from "webflow-api/dist/api";
import webflow from "../../config/webflow";
import log from "../logger";

export class webflowService {
  //to get all sites
  async getAllSites() {
    try {
      return await webflow.sites();
    } catch (error) {
      log.error(error);
    }
  }

  //get specific site collections
  async getSiteCollections(siteId: string) {
    try {
      return await webflow.collections({ siteId }).then((data: any) => {
        log.info(data);
        return data;
      });
    } catch (error: string | any) {
      throw new Error(error);
    }
  }
}
