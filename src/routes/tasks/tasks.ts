const express = require("express");
const { verifyToken } = require("../../middleware/verifyToken");
import {
  postTaskHandler,
  getAllTasksHandler,
  deleteTaskHandler,
  updateTaskHandler
} from "./tasks.controller";

const router = express.Router();

router.use(verifyToken);

router.post("/", postTaskHandler);

router.get("/", getAllTasksHandler);

router.put("/:_id", updateTaskHandler);

router.delete("/:_id", deleteTaskHandler);

export const tasks = router;
