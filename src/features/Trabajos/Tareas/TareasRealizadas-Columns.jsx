import { formatDate } from "@/utils/helpers";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { X } from "lucide-react";
import EliminarTarea from "./EliminarTarea";

export const columns = [
  {
    accessorKey: "tarea",
    header: "Tarea",
  },
  {
    accessorKey: "costo",
    header: "Costo",
    cell: ({ row }) => {
      const costo = row.getValue("costo");
      const dolares = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return dolares.format(costo);
    },
  },
  {
    accessorKey: "fecha",
    header: "Fecha de realización",
    cell: ({ row }) => {
      const timestampz = row.getValue("fecha");
      const formatted = formatDate(timestampz);

      return (
        <div>
          {row.getValue("fecha") === null ? "No entregado aún" : formatted}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const tarea = row.original;

      return (
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className=" border-slate-300 shadow-sm" variant="outline">
              <X color="red" />
              <span>Eliminar</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Se borrará definitivamente.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <EliminarTarea idTarea={tarea.id} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];
