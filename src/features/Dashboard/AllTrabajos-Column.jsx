import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { useClienteId } from "../Clientes/useCliente";
import Spinner from "@/components/ui/Spinner";

export const columns = [
  {
    accessorKey: "tipo",
    filterFn: (row, tipo, value) => {
      return value.includes(row.getValue(tipo));
    },
    header: "Tipo",
  },
  {
    accessorKey: "idCliente",
    header: "Cliente",
    cell: ({ row }) => {
      const idCliente = row.getValue("idCliente");
      const { cliente, isLoading } = useClienteId(idCliente);
      if (isLoading) return <Spinner isForButton={true} />;

      return <div>{cliente.nombre}</div>;
    },
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
    header: "Fecha de Salida",
    cell: ({ row }) => {
      const timestampz = row.getValue("fechaSalida");
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
  {
    id: "actions",
    cell: ({ row }) => {
      const trabajoId = row.original;
      const navigate = useNavigate();
      return (
        <Button
          variant="outline"
          className="p-2 flex gap-2 shadow-sm border-gray-400/40"
          onClick={() => navigate(`/trabajos/${trabajoId.urlId}`)}
        >
          <Eye /> Detalles
        </Button>
      );
    },
  },
];
