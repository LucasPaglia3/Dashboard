import { Loader2 } from "lucide-react";
const Spinner = ({ isForButton }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Loader2 className="h-16 w-16 animate-spin" />
      {!isForButton && (
        <span className="text-lg font-semibold">Cargando...</span>
      )}
    </div>
  );
};

export default Spinner;
