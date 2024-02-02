import { Card, CardContent } from "@/components/ui/card";

const CardStats = ({ title, data }) => {
  return (
    <Card className="w-32 h-32">
      <CardContent className="p-2">
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CardStats;
