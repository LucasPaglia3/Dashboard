import { formatDate } from "@/utils/helpers";

export const columns = [
  {
    accessorKey: "tarea",
    header: "Tarea",
  },
  {
    accessorKey: "costo",
    header: "Costo",
  },
  {
    accessorKey: "fecha",
    header: "Fecha de realización",
    cell: ({ row }) => {
      const timestampz = row.getValue("fecha");
      const formatted = formatDate(timestampz);

      return (
        <div>
          {row.getValue("fechaSalida") === null
            ? "No entregado aún"
            : formatted}
        </div>
      );
    },
  },
];
