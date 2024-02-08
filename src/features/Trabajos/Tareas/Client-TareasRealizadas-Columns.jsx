import { formatDate } from "@/utils/helpers";

export const columns = [
  {
    accessorKey: "tarea",
    header: "Tarea",
  },
  {
    accessorKey: "fecha",
    header: "Fecha de realización",
    cell: ({ row }) => {
      const timestampz = row.getValue("fecha");
      const formatted = formatDate(timestampz);

      return <div className="ml-8">{formatted}</div>;
    },
  },
];
