import axios from "axios";

export default async function fetchSubcategories(id: string) {
  try {
    const response = await axios.get(`${process.env.API_URL}subcategory/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
