import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const updatedCategory = await updateCategoryService(category_id, req.body);

    return res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateCategoryController;
