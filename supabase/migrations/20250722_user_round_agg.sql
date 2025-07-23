create or replace view public.v_user_round_agg as
select
  r.user_id,
  count(*)                                    as rounds,
  avg(rs.fairways_hit)::numeric(4,2)          as avg_fairways,
  avg(rs.gir)::numeric(4,2)                   as avg_gir,
  avg(rs.sand_saves)::numeric(4,2)            as avg_sand,
  avg(rs.up_and_downs)::numeric(4,2)          as avg_updown,
  avg(rs.putts)::numeric(4,2)                 as avg_putts
from rounds r
join round_stats rs on r.id = rs.round_id
group by r.user_id;