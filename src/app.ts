if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { Request, Response } from "express";
import helmet from "helmet";

import { chooseDatabase } from "./middleware/database";
import { routing } from "./routes/index";

const app = express();
app.use(helmet());
app.use(require("cors")());
app.use(express.json());
app.use(chooseDatabase);

app.get("/", async (req: Request, res: Response) => {
  res.send("W2P REST Service");
});

routing(app);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
