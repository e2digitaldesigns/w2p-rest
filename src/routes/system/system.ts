import express from "express";
import { getSystemHandler } from "./system.controller";
const router = express.Router();

export const system = router.get("/", getSystemHandler);
