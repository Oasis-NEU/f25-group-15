import { createClient } from '@supabase/supabase-js';
import 'dotenv'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublicKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase_client = createClient(supabaseUrl, supabasePublicKey);