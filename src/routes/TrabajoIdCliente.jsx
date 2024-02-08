import { DataTable } from "@/components/ui/Data-Table";
import Spinner from "../components/ui/Spinner";
import { Separator } from "../components/ui/separator";
import { useTrabajoId } from "../features/Trabajos/useTrabajoId";
import { columns } from "@/features/Trabajos/Tareas/Client-TareasRealizadas-Columns";
import { useTareaById } from "@/features/Trabajos/Tareas/useTareaById";
import { Badge } from "@/components/ui/badge";

const TrabajoIdCliente = () => {
  const { trabajo, isLoading } = useTrabajoId();
  const { tareas, isLoading: isLoading2 } = useTareaById();
  console.log(tareas);

  if (isLoading || isLoading2)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="max-w-lg flex flex-col items-center gap-5">
        <div className="flex flex-col w-full items-center mt-5">
          <h1 className="text-5xl font-extrabold tracking-tight pb-5 text-center">
            Su {trabajo.tipo}
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold">Estado:</h3>
            <Badge variant={trabajo.estado}>
              {trabajo.estado.toUpperCase()}
            </Badge>
          </div>
          <Separator className="w-full" />
        </div>

        {trabajo.image ? (
          <img src={`${trabajo.image}`} />
        ) : (
          <h2 className="text-xl font-semibold">
            No se subió una imagen de su {trabajo.tipo}
          </h2>
        )}
        <h2 className="text-xl font-semibold">
          Tareas realizadas sobre su {trabajo.tipo}:
        </h2>
        <DataTable data={tareas} columns={columns} pageSize={10}></DataTable>
      </div>
    </div>
  );
};

export default TrabajoIdCliente;
