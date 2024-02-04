import { Button } from "@/components/ui/button";

import { useDeleteHistorial } from "./useDeleteHistorial";

const EliminarHorario = ({ idHistorial }) => {
  const { deleteHistorial, isDeleting } = useDeleteHistorial();
  return (
    <Button
      className=" border-slate-300 shadow-sm"
      variant="destructive"
      onClick={() => deleteHistorial(idHistorial)}
      disabled={isDeleting}
    >
      Confirmar
    </Button>
  );
};

export default EliminarHorario;
