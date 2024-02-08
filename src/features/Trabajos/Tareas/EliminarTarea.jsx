import { Button } from "@/components/ui/button";
import { useDeleteTarea } from "./useDeleteTarea";
import Spinner from "@/components/ui/Spinner";

const EliminarTarea = ({ idTarea }) => {
  const { deleteTarea, isDeleting } = useDeleteTarea();
  return (
    <Button
      className=" border-slate-300 shadow-sm"
      variant="destructive"
      onClick={() => deleteTarea(idTarea)}
      disabled={isDeleting}
    >
      {isDeleting ? <Spinner isForButton={true} /> : "Confirmar"}
    </Button>
  );
};

export default EliminarTarea;
