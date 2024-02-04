import { Button } from "@/components/ui/button";
import EliminarHorario from "./EliminarHorario";
import HistorialPDF from "./pdf/HistorialPDF";

import { X } from "lucide-react";

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
        <div className="flex justify-center gap-3">
          <HistorialPDF
            tableData={historial.empleadosHoras}
            año={historial.año}
            mes={historial.mes}
            quincena={historial.quincena}
          />

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
                <EliminarHorario idHistorial={historial.id} />
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
