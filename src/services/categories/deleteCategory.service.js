import database from "../../database";

const deleteCategoryService = async (category_id) => {
  try {
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
