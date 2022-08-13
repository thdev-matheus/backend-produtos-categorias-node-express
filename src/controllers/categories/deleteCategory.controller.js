import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const deleted = await deleteCategoryService(category_id);

    return res.status(204).json(deleted);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default deleteCategoryController;
