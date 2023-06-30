import {
  DataGrid,
  GridRowSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { FC } from "react";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectItems } from "@/store/devSlice/devSelectors";
import { ICategory } from "@/types/ICategory";
import { ISubcategory } from "@/types/ISubcategory";

interface DevTableProps {
  selection: (newSelectionModel: GridRowSelectionModel) => void;
  categories: ICategory[];
  subcategories: ISubcategory[];
}

const DevTable: FC<DevTableProps> = ({
  selection,
  categories,
  subcategories,
}) => {
  const rows = useAppSelector(selectItems);
  const DevTableColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 530 },
    { field: "pack", headerName: "Pack", width: 130 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        categories.filter((item) => item.id === params.row.categoryId)[0]
          ?.title,
    },
    {
      field: "subCategory",
      headerName: "Subcategory",
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        subcategories.filter((item) => item.id === params.row.subcategoryId)[0]
          ?.title,
    },
    { field: "categoryId", headerName: "Category Id", width: 100 },
    { field: "subcategoryId", headerName: "Subcategory Id", width: 100 },
  ];

  return (
    <DataGrid
      columns={DevTableColumns}
      rows={rows}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[10, 10]}
      checkboxSelection
      onRowSelectionModelChange={selection}
    />
  );
};

export default DevTable;
