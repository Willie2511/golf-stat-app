'use client';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabaseBrowser } from '@/utils/supabaseClient';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionContextProvider supabaseClient={supabaseBrowser()}>
      {children}
    </SessionContextProvider>
  );
}