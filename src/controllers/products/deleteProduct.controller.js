import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (req, res) => {
  const { product_id } = req.params;

  try {
    const deleted = await deleteProductService(product_id);

    return res.status(204).json(deleted);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default deleteProductController;
