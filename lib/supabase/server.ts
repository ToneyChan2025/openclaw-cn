import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from './config'

export function getSupabaseServerClient() {
  return createClient(supabaseConfig.url, supabaseConfig.anonKey)
}
