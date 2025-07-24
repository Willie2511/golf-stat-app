import { Database } from '@/types/supabase';                       // ← auto-generated types
import {
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

/** Supabase client for use inside **client** components */
export const supabaseBrowser = () =>
  createClientComponentClient<Database>();

/** Supabase client for **server** components / Server Actions */
export const supabaseServer = () =>
  createServerComponentClient<Database>({ cookies });