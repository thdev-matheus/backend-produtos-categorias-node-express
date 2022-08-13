import database from "../../database";

const createProductservice = async (name, price, category_id = null) => {
  try {
    const res = await database.query(
      `INSERT INTO
            products(name, price, category_id)
        VALUES
            ($1, $2, $3)
        RETURNING *`,
      [name, price, category_id]
    );

    return {
      message: "product created successfully",
      product: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductservice;
