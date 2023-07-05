import { IItem } from "@/types/IItem";
import axios from "axios";

export default async function fetchItem(id: string) {
  try {
    const response = await axios.get(`${process.env.API_URL}item/${id}`);

    return response.data as IItem;
  } catch (e) {
    console.error(e);
    return {} as IItem;
  }
}
