import database from "../database";

const verifyCategoryExists = async (req, res, next) => {
  const { category_id } = req.params;

  try {
    const id = await database.query("SELECT * FROM categories");
    const idExisting = id.rows.find((row) => row.id === category_id);

    if (idExisting === undefined) {
      return res.status(404).json({ message: "not found" });
    }

    next();
  } catch (err) {
    throw new Error(err);
  }
};

export default verifyCategoryExists;
