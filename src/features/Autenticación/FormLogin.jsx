import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";

import { useLogin } from "@/features/Autenticación/useLogin";
import { HoverCard } from "@radix-ui/react-hover-card";
import { useForm } from "react-hook-form";

const FormLogin = () => {
  const form = useForm({
    defaultValues: {
      email: "demo@mail.com",
      password: "123456",
    },
  });

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

            <HoverCard openDelay={0.1}>
              <HoverCardTrigger asChild>
                <span
                  className="self-center
                  font-semibold
                  text-sm
                  underline
                  text-primary
                  underline-offset-4"
                >
                  Atención! Esta app es una demo.
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-col items-center pt-2">
                  <h3 className="text-md">
                    Todos los datos son falsos. Para ingresar:
                  </h3>
                  <ul>
                    <li>Usuario: demo@mail.com</li>
                    <li>Contraseña: 123456</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default FormLogin;
