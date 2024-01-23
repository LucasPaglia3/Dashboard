import { Loader2 } from "lucide-react";
const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Loader2 className="h-16 w-16 animate-spin" />
      <span className="text-lg font-semibold">Cargando...</span>
    </div>
  );
};

export default Spinner;
