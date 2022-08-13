import database from "../../database";

const updateCategoryService = async (category_id, category_data) => {
  try {
    if (category_data.id) {
      delete category_data.id;
    }

    // const categories = await database.query(`SELECT * FROM categories`);
    // const category = categories.find((cat) => cat.id === category_id);

    // if (!category) {
    //   throw "Not found";
    // }

    const res = await database.query(
      `UPDATE
            categories
        SET
            name = $1
        WHERE
            id = $2
        RETURNING *`,
      [category_data.name, category_id]
    );

    return {
      message: "category edited successfully",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
