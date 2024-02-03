import { Card, CardContent } from "@/components/ui/card";

const CardStats = ({ title, data, icon, color }) => {
  return (
    <Card className="w-[18rem] shadow-md">
      <CardContent className="p-4 flex gap-3">
        <div
          className={`bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-1 items-baseline grow">
          <h3 className="text-md font-bold text-gray-500/90">{title}</h3>
          <span className="font-bold text-3xl">{data}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardStats;
