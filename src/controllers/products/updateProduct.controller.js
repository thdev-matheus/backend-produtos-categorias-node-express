import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (req, res) => {
  const { product_id } = req.params;
  const productData = req.body;

  try {
    const updated = await updateProductService(product_id, productData);

    updated.product.price = +updated.product.price;

    return res.status(200).json(updated);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateProductController;
