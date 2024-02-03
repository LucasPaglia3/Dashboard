import LogoIcon from "@/components/ui/LogoIcon";
import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/features/Autenticación/useLogin";
import { useForm } from "react-hook-form";

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "lucas@gmail.com",
      password: "123456",
    },
  });
  const { login, isLoggingIn } = useLogin();

  const onSubmit = (data) => {
    login({ email: data.email, password: data.password });
  };

  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center">
      <LogoIcon />
      <h3 className="text-xl font-semibold">Ingresá tu cuenta</h3>
      <Form {...form}>
        <div className=" h-auto w-96 border-2 shadow-sm rounded-md">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-7 flex flex-col gap-8"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel htmlFor="email">Usuario</FormLabel>
                    <Input
                      placeholder="Ingrese su usuario..."
                      {...form.register("email", {
                        required: {
                          value: true,
                          message: "Ingrese un email!",
                        },
                      })}
                      disabled={isLoggingIn}
                    />
                  </FormItem>
                  <FormMessage className="pt-2" />
                </div>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <div>
                  <FormItem>
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <Input
                      type="password"
                      placeholder="Ingrese su contraseña..."
                      {...form.register("password", {
                        required: {
                          value: true,
                          message: "Ingrese una contraseña!",
                        },
                      })}
                      disabled={isLoggingIn}
                    />
                  </FormItem>
                  <FormMessage className="pt-2" />
                </div>
              )}
            />
            <div className="flex flex-col gap-2">
              <Button type="submit" variant="blue" disabled={isLoggingIn}>
                {!isLoggingIn ? "Ingresar" : <Spinner isForButton={true} />}
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
