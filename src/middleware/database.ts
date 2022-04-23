import { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import { domainNameParser, databaseParser } from "../utils";

export const chooseDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const domain = await domainNameParser(req?.headers?.origin);
  const dbName = await databaseParser(req?.headers?.origin);
  res.locals.domain = domain;

  connect(
    `mongodb://localhost:27017/${dbName}?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`,
    {},
    () => {
      console.log("xxx Connected to MongoDB LOCAL xxx");
    }
  );
  next();
};
