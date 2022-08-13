import listAllProductsService from "../../services/products/listAllProducts.service";

const listAllProductsController = async (req, res) => {
  try {
    const allProducts = await listAllProductsService();

    allProducts.forEach((product) => {
      product.price = +product.price;
    });

    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listAllProductsController;
