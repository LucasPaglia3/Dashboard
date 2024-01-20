import { supabase } from "./supabase";

export const getAllEmpleados = async () => {
  const { data: empleados, error } = await supabase
    .from("empleados")
    .select("*");

  if (error) {
    throw new Error("Empleados could not be loaded.");
  }

  return { empleados, error };
};
