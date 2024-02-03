import LogoIcon from "@/components/ui/LogoIcon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const Login = () => {
  const form = useForm();
  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center">
      <LogoIcon />
      <h3 className="text-xl font-semibold">Ingresá tu cuenta</h3>
      <Form {...form}>
        <div className=" h-[21rem] w-96 border-2 shadow-sm rounded-md">
          <form className="p-7 flex flex-col gap-8">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel htmlFor="username">Usuario</FormLabel>
                    <Input placeholder="Ingrese su usuario..." />
                  </FormItem>
                  <FormMessage />
                </>
              )}
            />
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel htmlFor="username">Contraseña</FormLabel>
                    <Input placeholder="Ingrese su contraseña..." />
                  </FormItem>
                  <FormMessage />
                </>
              )}
            />
            <div className="flex flex-col gap-2">
              <Button type="submit" variant="blue">
                Ingresar
              </Button>
              <Button variant="link">Olvidé mi contraseña</Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default Login;
