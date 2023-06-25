import { get, getDatabase, ref } from "firebase/database";

export default async function getAllCategories() {
  const db = await getDatabase();
  const categoriesRef = ref(db, "categories");
  const categories = await get(categoriesRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data);
    }
    return [];
  });
  return categories;
}
