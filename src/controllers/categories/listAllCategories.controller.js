import listAllCategoriesService from "../../services/categories/listAllCategories.service";

const listAllCategoriesController = async (req, res) => {
  try {
    const categories = await listAllCategoriesService();

    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listAllCategoriesController;
