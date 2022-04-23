import express, { NextFunction, Request, Response } from "express";
const { verifyToken } = require("../../middleware/verifyToken");
import {
  deleteStaffHandler,
  getStaffByIdHandler,
  getStaffHandler,
  postStaffHandler,
  updateStaffHandler
} from "./staff.controller";
const router = express.Router();

// router.use(verifyToken);

router.post("/", postStaffHandler);
router.get("/", getStaffHandler);
router.get("/:_id", getStaffByIdHandler);
router.put("/:_id", updateStaffHandler);
router.delete("/:_id", deleteStaffHandler);

export const staff = router;
