import axios from "axios";

export default async function fetchItems(
  category: string,
  subcategory: string
) {
  if (subcategory) {
    const response = await axios.get(
      `${process.env.API_URL}item?subCategoryId=${subcategory}`
    );
    return response.data.rows;
  }
  if (category) {
    const response = await axios.get(
      `${process.env.API_URL}item?categoryId=${category}`
    );
    return response.data.rows;
  }
}
