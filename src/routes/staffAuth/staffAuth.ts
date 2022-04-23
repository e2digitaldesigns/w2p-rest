const express = require("express");
import { staffLoginHandler } from "./staffAuth.controller";
const router = express.Router();

export const staffAuth = router.post("/", staffLoginHandler);
