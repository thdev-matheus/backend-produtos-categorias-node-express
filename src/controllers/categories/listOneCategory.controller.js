import listOneCategoryService from "../../services/categories/listOneCategory.service";

const listOneCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const category = await listOneCategoryService(category_id);

    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listOneCategoryController;
