import PageTitle from "@/components/ui/PageTitle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createTrabajo } from "@/services/apiTrabajos";

const TrabajoId = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageTitle title={"Trabajo"} />
      <Separator />
      <Button onClick={() => createTrabajo(1)} />
    </div>
  );
};

export default TrabajoId;
