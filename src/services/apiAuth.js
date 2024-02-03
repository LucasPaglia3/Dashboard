import { supabase } from "./supabase";

export const login = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(error);

  if (error) {
    throw new Error("Could not login!" + error.message);
  }
  return data;
};
