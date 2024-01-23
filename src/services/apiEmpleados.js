import { supabase } from "./supabase";

// EMPLEADOS
export const getAllEmpleados = async () => {
  const { data: empleados, error } = await supabase
    .from("empleados")
    .select("*");

  if (error) {
    throw new Error("Empleados could not be loaded. " + error.message);
  }

  return { empleados, error };
};

// HISTORIAL EMPLEADOS
export const getHistorial = async () => {
  const { data: historial, error } = await supabase
    .from("horasEmpleados")
    .select("*");

  if (error) {
    throw new Error(
      "Historial horas empleados coud not be loaded. " + error.message
    );
  }

  return { historial, error };
};

export const createHistorial = async (newHistoria) => {
  const { data, error } = await supabase
    .from("horasEmpleados")
    .insert([
      {
        empleadosHoras: newHistoria.listaEmp,
        quincena: newHistoria.quincena,
        mes: newHistoria.mes,
        año: newHistoria.año,
      },
    ])
    .select();

  if (error) {
    throw new Error("Could not insert into 'horasEmpleados'. " + error.message);
  }

  return data;
};
