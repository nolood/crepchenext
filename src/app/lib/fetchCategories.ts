import axios from "axios";

export default async function fetchCategories() {
  try {
    const response = await axios.get(`${process.env.API_URL}category`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
