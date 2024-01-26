import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
            <Badge variant={"espera"}>
              {row.getValue("estado").toUpperCase()}
            </Badge>
          );
        case "bobinando":
          return (
            <Badge variant={"bobinando"}>
              {row.getValue("estado").toUpperCase()}
            </Badge>
          );
        case "terminado":
          return (
            <Badge variant={"terminado"}>
              {row.getValue("estado").toUpperCase()}
            </Badge>
          );
        case "entregado":
          return (
            <Badge variant={"entregado"}>
              {row.getValue("estado").toUpperCase()}
            </Badge>
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
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Button>Hola</Button>
        </div>
      );
    },
  },
];
