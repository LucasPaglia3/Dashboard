import { supabase } from "./supabase";

export const getTareasById = async (urlId) => {
  let { data, error } = await supabase
    .from("tareas")
    .select("*")
    .eq("trabajo", urlId);

  console.log(error);

  if (error) {
    throw new Error("Could not create Tarea. " + error.message);
  }

  return data;
};

export const createTarea = async (newTarea) => {
  let { data, error } = await supabase
    .from("tareas")
    .insert({ ...newTarea })
    .select();

  if (error) {
    throw new Error("Could not create Tarea. " + error.message);
  }

  return data;
};
