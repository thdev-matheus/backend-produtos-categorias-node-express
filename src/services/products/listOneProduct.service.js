import database from "../../database";

const listOneProductService = async (product_id) => {
  try {
    const res = await database.query(
      `SELECT
                *
            FROM
                products
            WHERE
                id = $1
            `,
      [product_id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listOneProductService;
