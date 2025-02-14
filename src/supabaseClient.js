import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://SEU_PROJECT_URL.supabase.co';
const supabaseKey = 'SUA_PUBLIC_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
