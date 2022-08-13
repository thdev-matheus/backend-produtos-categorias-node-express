import database from "../../database";

const deleteCategoryService = async (category_id) => {
  try {
    const id = await database.query("SELECT * FROM categories");
    const idExisting = id.rows.find((row) => row.id === category_id);

    if (idExisting === undefined) {
      throw "Not found!";
    }

    const res = await database.query(
      `DELETE FROM
            categories
        WHERE
            id = $1
        RETURNING *`,
      [category_id]
    );

    return "Category deleted successfully!";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;
