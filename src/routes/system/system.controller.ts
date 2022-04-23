import { Request, Response } from "express";
const NodeCache = require("node-cache");
import { StorefrontSchema } from "../../models/storefront.model";

const nodeCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const getSystemHandler = async (req: Request, res: Response) => {
  try {
    const domain = res.locals.domain;
    const cache = nodeCache.get(domain);
    let data;

    if (cache) {
      data = cache;
    } else {
      data = await res.locals.models.storefrontModel
        .findOne({
          domain,
          primaryStore: true
        })
        .select({
          __v: 0
        });
      nodeCache.set(domain, data, 10000);
    }

    res.json(data);
  } catch (error) {
    res.send(error);
  }
};
