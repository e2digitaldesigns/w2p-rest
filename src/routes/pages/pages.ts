const express = require("express");
const { verifyToken } = require("../../middleware/verifyToken");
import {
  postPageHandler,
  getAllPagesHandler,
  deletePageHandler,
  updatePageHandler
} from "./pages.controller";

const router = express.Router();

// router.use(verifyToken);

// router.post("/", postPageHandler);

router.get("/", getAllPagesHandler);

// router.put("/:_id", updatePageHandler);

// router.delete("/:_id", deletePageHandler);

export const pages = router;
