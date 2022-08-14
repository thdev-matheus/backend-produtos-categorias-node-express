import database from "../../database";

const deleteProductService = async (product_id) => {
  try {
    const res = await database.query(
      `DELETE FROM
            products
        WHERE
            id = $1
        RETURNING *`,
      [product_id]
    );

    return "Product deleted successfully!";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;
