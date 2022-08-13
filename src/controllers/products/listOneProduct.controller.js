import listOneProductService from "../../services/products/listOneProduct.service";

const listOneProductController = async (req, res) => {
  const { product_id } = req.params;

  try {
    const product = await listOneProductService(product_id);

    product.price = +product.price;

    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listOneProductController;
