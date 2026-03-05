import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from './config'

let browserClient: ReturnType<typeof createClient> | null = null

export function getSupabaseBrowserClient() {
  if (!browserClient) {
    browserClient = createClient(supabaseConfig.url, supabaseConfig.anonKey)
  }
  return browserClient
}
