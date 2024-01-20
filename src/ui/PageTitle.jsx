import { Separator } from "@/components/ui/separator";

const PageTitle = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
      <h4 className="text-xl font-semibold tracking-tight">{desc}</h4>

      <Separator />
    </div>
  );
};

export default PageTitle;
