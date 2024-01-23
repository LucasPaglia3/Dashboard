import HistorialPDF from "./pdf/HistorialPDF";

export const columns = [
  {
    accessorKey: "mes",
    filterFn: (row, mes, value) => {
      return value.includes(row.getValue(mes));
    },
    header: "Mes",
  },
  {
    accessorKey: "quincena",
    filterFn: (row, quincena, value) => {
      return value.includes(row.getValue(quincena));
    },
    header: "Quincena",
  },
  {
    accessorKey: "año",
    filterFn: (row, año, value) => {
      return value.includes(row.getValue(año));
    },
    header: "Año",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const historial = row.original;
      return (
        <div className="flex justify-center">
          <HistorialPDF
            tableData={historial.empleadosHoras}
            año={historial.año}
            mes={historial.mes}
            quincena={historial.quincena}
          />
        </div>
      );
    },
  },
];
