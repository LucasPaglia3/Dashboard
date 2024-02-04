import { supabase } from "./supabase";

// EMPLEADOS
export const getAllEmpleados = async () => {
  const { data: empleados, error } = await supabase
    .from("empleados")
    .select("*");

  if (error) {
    throw new Error("Empleados could not be loaded. " + error.message);
  }

  return empleados;
};

// HISTORIAL EMPLEADOS
export const getAllHistorial = async () => {
  const { data: historial, error } = await supabase
    .from("horasEmpleados")
    .select("*")
    .order("created_at", { ascending: false }); // Ordena para que salgan primeros en la lista los que recien fueron creados.

  if (error) {
    throw new Error(
      "Historial horas empleados coud not be loaded. " + error.message
    );
  }

  return historial;
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

export const deleteHistorial = async (id) => {
  const { data, error } = await supabase
    .from("horasEmpleados")
    .delete()
    .eq("id", id);

  console.log(id);

  if (error) {
    throw new Error("Could not delete from 'horasEmpleados'. " + error.message);
  }

  return data;
};
