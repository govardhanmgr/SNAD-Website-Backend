import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import log from "../logger";

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (e: Error | any) {
      log.error(e);
      return res.status(400).json(e.errors);
    }
  };

export default validate;
