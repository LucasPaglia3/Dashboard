import PageHeader from "@/components/ui/PageHeader";
import { Separator } from "@/components/ui/separator";
import Inicio from "@/features/Dashboard/Inicio";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 h-full">
      <PageHeader title={"Inicio"} />
      <Separator />
      <Inicio />
    </div>
  );
};

export default Dashboard;
