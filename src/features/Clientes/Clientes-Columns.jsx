import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

import { useNavigate } from "react-router-dom";

export const columns = [
  {
    accessorKey: "nombre",
    filterFn: (row, nombre, value) => {
      return value.includes(row.getValue(nombre));
    },
    header: "Nombre Cliente",
  },
  {
    accessorKey: "email",
    filterFn: (row, email, value) => {
      return value.includes(row.getValue(email));
    },
    header: "Email",
  },
  {
    accessorKey: "telefono",
    filterFn: (row, telefono, value) => {
      return value.includes(row.getValue(telefono));
    },
    header: "Teléfono",
  },
  {
    accessorKey: "cuit",
    filterFn: (row, cuit, value) => {
      return value.includes(row.getValue(cuit));
    },
    header: "Cuit/Cuil",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const navigate = useNavigate();
      const cliente = row.original;
      return (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="p-2 flex gap-2"
            onClick={() => navigate(`/clientes/${cliente.id}`)}
          >
            <Eye /> Detalles
          </Button>
        </div>
      );
    },
  },
];
