// src/app/(protected)/dashboard/page.tsx
import { supabaseServer } from '@/utils/supabaseClient';
import GolfStatsDashboard from '@/components/GolfStatsDashboard';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  /* 1️⃣  Auth guard */
  const supabase = supabaseServer();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect('/signin');

  /* 2️⃣  Query your aggregated view */
  const { data } = await supabase
    .from('v_user_round_agg')
    .select('*')
    .eq('user_id', session.user.id)
    .single();

  if (!data) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Add a round to see your stats.
      </div>
    );
  }

  /* 3️⃣  DROP THIS SNIPPET RIGHT HERE  */
  // hard-code PGA-Tour averages for now (swap later)
  const tourAvg = {
    fairways: 8.6,
    gir: 11.8,
    sand: 2.1,
    upDown: 4.2,
    putts: 29,
  };

  const stats = {
    fairways: { value: data.avg_fairways ?? 0, tourAvg: tourAvg.fairways, data: [] },
    gir:      { value: data.avg_gir      ?? 0, tourAvg: tourAvg.gir,      data: [] },
    sand:     { value: data.avg_sand     ?? 0, tourAvg: tourAvg.sand,     data: [] },
    upDown:   { value: data.avg_updown   ?? 0, tourAvg: tourAvg.upDown,   data: [] },
    putts:    { value: data.avg_putts    ?? 0, tourAvg: tourAvg.putts,    data: [] },
  };

  /* 4️⃣  Render the dashboard */
  return (
    <div className="p-6">
      <GolfStatsDashboard {...stats} />
    </div>
  );
}