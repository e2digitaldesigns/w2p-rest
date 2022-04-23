import express, { Express } from "express";
import { staff } from "./staff/staff";
import { staffAuth } from "./staffAuth/staffAuth";
import { system } from "./system/system";
import { tasks } from "./tasks/tasks";
import { pages } from "./pages/pages";

export const routing = (app: Express) => {
  const prefix = "/api/v1/";
  app.use(express.json());

  app.use(`${prefix}staff`, staff);
  app.use(`${prefix}staffAuth`, staffAuth);
  app.use(`${prefix}system`, system);
  app.use(`${prefix}tasks`, tasks);
  app.use(`${prefix}pages`, pages);
};
