import database from "../../database";

const updateProductService = async (product_id, productData) => {
  try {
    if (productData.id) {
      delete productData["id"];
    }

    let query = "UPDATE products SET ";
    const keys = Object.keys(productData);
    const values = Object.values(productData);

    keys.forEach((key, index) => {
      query += `${key} = \$${index + 1}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${keys.length + 1} RETURNING *;`;

    const res = await database.query(query, [...values, product_id]);

    if (res.rowCount === 0) {
      throw new Error("User not found");
    }

    return {
      message: "Product successfully updated!",
      product: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
