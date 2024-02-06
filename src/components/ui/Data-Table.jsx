import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFacetedUniqueValues,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DataTableFacetedFilter } from "./Data-Table-Faceted-Filter";

import { meses } from "../../features/Empleados/Filters";

import { X } from "lucide-react";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";

export function DataTable({
  columns,
  data,
  usesFacetedFilter,
  filterTitle,
  pageSize,
}) {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    initialState: { pagination: { pageSize: pageSize } },
  });

  const isFiltered = table.getState().columnFilters.length > 0;
  let filterOptions;

  switch (usesFacetedFilter) {
    case "mes":
      filterOptions = meses;
      break;
    case "nombre":
      filterOptions = table.getRowModel().rows.map((row) => {
        // Iteramos por todos los valores que hay dentro de las filas de la tabla y creamos objetos con el valor de cada una.
        return {
          value: row.original.nombre,
          label: row.original.nombre,
        };
      });
      break;
    case "tipo":
      filterOptions = [
        {
          value: "Freno",
          label: "Freno",
        },
        {
          value: "Motor",
          label: "Motor",
        },
      ];
  }

  return (
    <div className="w-full pt-2">
      {usesFacetedFilter && (
        <div className="">
          {table.getColumn(usesFacetedFilter) && (
            <DataTableFacetedFilter
              column={table.getColumn(usesFacetedFilter)}
              title={filterTitle}
              options={filterOptions}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="self-center h-8 px-2 lg:px-3"
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      )}
      <div className="rounded-md border">
        <ScrollArea type="auto">
          <Table className="relative">
            <TableHeader className="bg-gray-200/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className=" text-gray-700">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex items-center justify-end space-x-2 pb-4 pt-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
