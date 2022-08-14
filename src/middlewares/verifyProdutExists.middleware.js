import database from "../database";

const verifyProductExists = async (req, res, next) => {
  const { product_id } = req.params;

  try {
    const id = await database.query("SELECT * FROM products");
    const idExisting = id.rows.find((row) => row.id === product_id);

    if (idExisting === undefined) {
      return res.status(400).json({ message: "not found" });
    }

    next();
  } catch (err) {
    throw new Error(err);
  }
};

export default verifyProductExists;
