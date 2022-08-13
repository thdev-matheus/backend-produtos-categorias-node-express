import express from "express";
import "dotenv/config";
import categoriesRouter from "./routers/categories.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
