import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardImagenTrabajo = ({ trabajo }) => {
  return (
    <Card className="shadow-md col-span-1 lg:col-span-2 h-[32rem]">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Imagen</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {trabajo.image !== null ? (
          <img
            className="mt-5"
            src={trabajo.image}
            alt={`Imagen ${trabajo.tipo}`}
          />
        ) : (
          <h4 className="mt-8 font-semibold text-xl">
            Subí una imagen en la sección &quot;Editar Freno&quot;.
          </h4>
        )}
      </CardContent>
    </Card>
  );
};

export default CardImagenTrabajo;
