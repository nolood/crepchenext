import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import {
  selectCategories,
  selectSubcategories,
} from "@/store/devSlice/devSelectors";
import {
  deleteCategory,
  deleteSubcategory,
  fetchCategories,
  fetchSubcategories,
} from "@/store/devSlice/devAsync";
import React, { useEffect } from "react";

const CategoriesOverview = () => {
  const categories = useAppSelector(selectCategories);
  const subcategories = useAppSelector(selectSubcategories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  const handleDeleteCategory = (id: number) => {
    dispatch(deleteCategory(id));
  };
  const handleDeleteSubCategory = (id: number) => {
    dispatch(deleteSubcategory(id));
  };
  return (
    <List>
      {categories &&
        categories.map((category) => (
          <ListItem
            key={category.id}
            sx={{ padding: "20px", borderBottom: "1px solid gray" }}
          >
            <Button
              sx={{ mr: 2 }}
              onClick={() => handleDeleteCategory(category.id)}
            >
              <DeleteIcon />
            </Button>
            <ListItemText
              primary={category.title}
              sx={{ flexGrow: 0, minWidth: 250 }}
            />
            <Stack direction="row" sx={{ gap: "10px", flexWrap: "wrap" }}>
              {subcategories &&
                subcategories.map((subcategory) => (
                  <React.Fragment key={subcategory.id}>
                    {subcategory.categoryId === category.id ? (
                      <Chip
                        key={subcategory.id}
                        label={subcategory.title}
                        color="primary"
                        onDelete={() => handleDeleteSubCategory(subcategory.id)}
                      />
                    ) : null}
                  </React.Fragment>
                ))}
            </Stack>
          </ListItem>
        ))}
    </List>
  );
};

export default CategoriesOverview;
