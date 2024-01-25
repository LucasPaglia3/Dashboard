import { formatDate } from "@/utils/helpers";

export const columns = [
  {
    accessorKey: "tipo",
    filterFn: (row, tipo, value) => {
      return value.includes(row.getValue(tipo));
    },
    header: "Tipo",
  },
  {
    accessorKey: "fechaEntrada",
    header: "Fecha de Entrada",
    cell: ({ row }) => {
      const timestampz = row.getValue("fechaEntrada");
      console.log(timestampz);
      const formatted = formatDate(timestampz);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "estado",
    cell: ({ row }) => {
      switch (row.getValue("estado")) {
        case "espera":
          return (
            <div className=" text-red-700">
              {row.getValue("estado").toUpperCase()}
            </div>
          );
        case "bobinando":
          return (
            <div className=" text-yellow-500">
              {row.getValue("estado").toUpperCase()}
            </div>
          );
        default:
          return (
            <div className=" text-green-500">
              {row.getValue("estado").toUpperCase()}
            </div>
          );
      }

      return <div>n/a</div>;
    },
    header: "Estado",
  },
  {
    accessorKey: "fechaSalida",
    filterFn: (row, fechaSalida, value) => {
      return value.includes(row.getValue(fechaSalida));
    },
    header: "Fecha de Salida",
  },
  /*  {
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
  }, */
];
