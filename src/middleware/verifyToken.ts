import { NextFunction, Request, Response } from "express";
// const jwtDecode = require("jwt-decode");

import jwtDecode from "jwt-decode";

interface IntDecode {
  staffId: string;
  name: string;
  email: string;
  authLevel: string;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Bang!");
    }
    const bearerToken = req.headers.authorization.split(" ")[1];
    const decode: IntDecode = jwtDecode(bearerToken);
    res.locals.staffId = decode.staffId;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
