import { NextFunction, Request, Response } from "express";
import { createConnection } from "mongoose";
import { domainNameParser, databaseParser } from "../utils";

import { StaffSchema } from "../models/staff.model";
import { StorefrontSchema } from "../models/storefront.model";
import { TaskSchema } from "../models/task.model";

const fetchDBString = (dbName: string) => {
  return `mongodb://localhost:27017/${dbName}?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`;
};

export const chooseDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.domain = await domainNameParser(req?.headers?.origin);
  const dbName = await databaseParser(req?.headers?.origin);

  const conn: any = createConnection(fetchDBString(dbName), {}, () => {
    console.log(`${res.locals.domain} is connected to MongoDB LOCAL`);
  });

  res.locals.models = {
    staffModel: conn.model("staff-members", StaffSchema),
    storefrontModel: conn.model("store-fronts", StorefrontSchema),
    tasksModel: conn.model("tasks", TaskSchema)
  };

  next();
};
