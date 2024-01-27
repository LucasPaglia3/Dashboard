import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Trabajo = ({ trabajo }) => {
  return (
    // TODO: Hacer form y dividir en componentes asi no queda tan horrible.
    <Card className="shadow-md h-full w-full pb-12">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">
          Detalles de trabajo:
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-5 gap-3 h-full">
        <Card className="shadow-md col-span-1 lg:col-span-2 h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-md font-medium">Imagen</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">IMG</CardContent>
        </Card>
        <Card className="shadow-md col-span-1 lg:col-span-3 h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-md font-medium">
              Información sobre el trabajo
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-7">
            <Form>
              <FormLabel className="col-span-1">Name</FormLabel>
              <Input className="col-span-6" />
            </Form>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Trabajo;
