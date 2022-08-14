import express from "express";
import "dotenv/config";

import categoriesRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";

import { startDatabase } from "./database";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

export default app.listen(PORT, () => {
  startDatabase();
  console.log("Server running in port ", PORT);
});
