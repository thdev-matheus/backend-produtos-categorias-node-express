import express from "express";
import "dotenv/config";

import categoriesRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";

import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
