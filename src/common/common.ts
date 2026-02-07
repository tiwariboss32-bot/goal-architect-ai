import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

export const insertIntoSupabase = async(email)=>{
    const { error } = await supabase.from('users').insert({ emailId:email,projectname:"goalbuilder" });
    console.log("er",error);
    return error;
}