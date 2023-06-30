import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import DevTable from "./DevTable";
import {
  selectCategories,
  selectSubcategories,
} from "@/store/devSlice/devSelectors";
import { IItem } from "@/types/IItem";
import {
  addItems,
  changeItemsCategory,
  fetchAllItems,
} from "@/store/devSlice/devAsync";

const ChangeItems = () => {
  const [itemsData, setItemsData] = useState<IItem[]>([]);
  const [subCategoryId, setSubCategoryId] = useState<number | string>("");
  const [selection, setSelection] = useState<GridRowSelectionModel>([]);
  const [image, setImage] = useState<FormData | null>(null);
  const categories = useAppSelector(selectCategories);
  const subcategories = useAppSelector(selectSubcategories);
  const dispatch = useAppDispatch();

  const handleSelectionModelChange = (
    newSelectionModel: GridRowSelectionModel
  ) => {
    setSelection(newSelectionModel);
  };
  const handleAddToSubcategoryItems = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (subCategoryId && selection.length) {
      dispatch(
        changeItemsCategory({
          items: selection,
          subcategoryId: subCategoryId,
          subcategories,
          image,
        })
      );
    }
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSubCategoryId(event.target.value as unknown as number);
  };
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    // @ts-ignore
    fileReader.readAsText(event.target.files[0]);
    fileReader.onload = () => {
      const fileContent = fileReader.result;
      setItemsData(JSON.parse(String(fileContent)));
    };
  };
  const handleAddFiles = () => {
    if (itemsData.length > 5) {
      dispatch(addItems(itemsData));
    }
  };

  const handleChangeImage = (e: any) => {
    //@ts-ignore
    setImage(e.target.files[0]);
  };

  const handleAddPromoItems = () => {
    // dispatch(addPromoItems(selection));
  };

  const handleAddPopItems = () => {
    // dispatch(addPopItems(selection));
  };

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Box component="form" onSubmit={handleAddToSubcategoryItems}>
          <Button
            type="submit"
            variant="outlined"
            sx={{ height: "100%", mr: 2 }}
            size="small"
          >
            Добавить в подкатегорию
          </Button>
          <FormControl>
            <InputLabel id="category-select">Подкатегория</InputLabel>
            <Select
              labelId="category-select"
              id="demo-simple-select"
              value={String(subCategoryId)}
              label="Age"
              onChange={handleChange}
              sx={{ minWidth: "300px" }}
            >
              {subcategories.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            type="file"
            sx={{ margin: "0 20px" }}
            onChange={handleFileInputChange}
          />

          <Button
            variant="outlined"
            sx={{ height: "100%" }}
            onClick={handleAddFiles}
            disabled={itemsData.length === 0}
            size="small"
          >
            Добавить товары
          </Button>
          <Button
            variant="outlined"
            sx={{ height: "100%", mr: 2, ml: 2 }}
            onClick={handleAddPromoItems}
            size="small"
          >
            Добавить в prom
          </Button>
          <Button
            variant="outlined"
            sx={{ height: "100%" }}
            onClick={handleAddPopItems}
            size="small"
          >
            Добавить в pop
          </Button>
          <Input
            type="file"
            sx={{ margin: "0 20px" }}
            onChange={handleChangeImage}
          />
        </Box>
      </Stack>
      <DevTable
        selection={handleSelectionModelChange}
        categories={categories}
        subcategories={subcategories}
      />
    </Box>
  );
};

export default ChangeItems;
