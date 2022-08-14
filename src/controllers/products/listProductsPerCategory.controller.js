import listProductsPerCategoryService from "../../services/products/listProductsPerCategory.service";

const listProductsPerCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const products = await listProductsPerCategoryService(category_id);

    products.forEach((product) => {
      product.price = +product.price;
    });

    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listProductsPerCategoryController;
