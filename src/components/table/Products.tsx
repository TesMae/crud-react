import { useMemo } from "react";
import { Product } from "../../types";
import { useProducts, useRemove, useUpdate } from "../../server/productQuery";

import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Products = () => {
  const { data: products } = useProducts();
  const removeMutation = useRemove();
  const updateMutation = useUpdate();

  const columns = useMemo<(ColDef | ColGroupDef<Product>)[]>(
    () => [
      { field: "id", editable: false },
      { field: "name", editable: true },
      { field: "price", editable: true },
      { field: "expiryDate", editable: true },
      { field: "emailSupplier", editable: true },
      {
        field: "delete",
        sortable: false,
        editable: false,
        cellRenderer: (params: { data: Product }) => (
          <button onClick={() => removeMutation.mutate(params.data.id)}>
            Delete
          </button>
        ),
      },
    ],
    [],
  );

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        rowData={products}
        columnDefs={columns}
        onCellValueChanged={(params) => {
          updateMutation.mutate(params.data);
        }}
      />
    </div>
  );
};

export default Products;
