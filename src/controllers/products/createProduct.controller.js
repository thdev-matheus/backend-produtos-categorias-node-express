import createProductservice from "../../services/products/createProduct.service";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;

  try {
    const created = await createProductservice(
      name,
      price,
      category_id && category_id
    );

    created.price = +created.price;

    return res.status(201).json(created);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default createProductController;
