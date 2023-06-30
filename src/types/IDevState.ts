import { ICategory } from "./ICategory";
import { IItem } from "./IItem";
import { ISubcategory } from "./ISubcategory";

export interface IDevState {
  categories: ICategory[];
  subcategories: ISubcategory[];
  items: IItem[];
}
