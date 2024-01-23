import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
          {" "}
          <Button
            className=" border-slate-300 shadow-sm"
            variant="outline"
            onClick={() => console.log(historial.id)}
          >
            <Download className="h-5 w-5 mr-2" /> <span>Descargar PDF</span>
          </Button>
        </div>
      );
    },
  },
];
