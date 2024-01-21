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

export const createHistorial = async (newHistoria) => {
  const { data, error } = await supabase
    .from("horasEmpleados")
    .insert([{ empleadosHoras: newHistoria }])
    .select();

  if (error) {
    throw new Error("Could not insert into 'horasEmpleados'.");
  }

  return data;
};
