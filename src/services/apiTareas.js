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

export const createTarea = async (newTarea, url_id) => {
  console.log(newTarea, url_id);
  let { data, error } = await supabase
    .from("tareas")
    .insert({ ...newTarea, trabajo: url_id })
    .select();

  if (error) {
    throw new Error("Could not create Tarea. " + error.message);
  }

  return data;
};

export const deleteTarea = async (tareaId) => {
  const { error } = await supabase.from("tareas").delete().eq("id", tareaId);

  if (error) {
    throw new Error("Could not delete Tarea. " + error.message);
  }
};
