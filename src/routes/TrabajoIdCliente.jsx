import Spinner from "../components/ui/Spinner";
import { Separator } from "../components/ui/separator";
import { useTrabajoId } from "../features/Trabajos/useTrabajoId";

const TrabajoIdCliente = () => {
  const { trabajo, isLoading } = useTrabajoId();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-5 h-screen">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight pb-5 text-center">
          Su {trabajo.tipo}
        </h1>
        <Separator />
        <img src={`${trabajo.image}`} />
        <h2 className="text-xl font-semibold">Reparaciones Realizadas:</h2>
        {/*         {trabajo.accionesRealizadas.map((accion, i) => (
          <div className="h-8 w-full" key={i}>
            {accion}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TrabajoIdCliente;
