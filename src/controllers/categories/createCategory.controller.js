import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await createCategoryService(name);

    return res.status(201).json(category);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default createCategoryController;
