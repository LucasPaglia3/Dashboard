import PageHeader from "@/components/ui/PageHeader";
import Spinner from "@/components/ui/Spinner";
import { Separator } from "@/components/ui/separator";
import Trabajo from "@/features/Trabajos/Trabajo";
import { useTrabajoId } from "@/features/Trabajos/useTrabajoId";

const TrabajoId = () => {
  const { trabajo, isLoading } = useTrabajoId();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-5 h-full">
      <PageHeader title={"Trabajo"} />
      <Separator />
      <Trabajo trabajo={trabajo} />
      {/* <CreateTrabajo />  // TODO: Usar en /dashboard */}
    </div>
  );
};

export default TrabajoId;
