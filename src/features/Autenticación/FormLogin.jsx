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

const FormLogin = () => {
  const form = useForm();

  const { login, isLoggingIn } = useLogin();
  const onSubmit = (data) => {
    login(
      { email: data.email, password: data.password },
      {
        onSettled: () => {
          form.reset();
        },
      }
    );
  };
  return (
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
  );
};

export default FormLogin;
