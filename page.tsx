"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { fmt, type Song } from "@/lib/types";
import { getSongs } from "@/lib/data";
import { moodBg } from "@/lib/mood";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

export default function FullSong({params}:{params:Promise<{id:string}>}){
 const {id}=use(params);
 const [songs,setSongs]=useState<Song[]>([]);
 const [saved,setSaved]=useState(false);
 const p=useAudioPlayer(songs);
 const s=p.song??songs.find(x=>x.id===id);
 useEffect(()=>{getSongs().then(l=>{setSongs(l);const f=l.find(x=>x.id===id);f&&p.load(f,"full")})},[id]); // eslint-disable-line
 if(!s) return <main className="grid h-dvh place-items-center">جارٍ التحميل…</main>;
 return(
 <main className="flex h-dvh flex-col items-center justify-center px-6" style={{background:moodBg(s.genre,s.mood)}}>
  <Link href="/" className="absolute right-4 top-4 text-sm text-white/70">← رجوع</Link>
  <div className="aspect-square w-full max-w-xs overflow-hidden rounded-3xl bg-white/10 shadow-2xl">
   {s.cover_url?<img src={s.cover_url} alt="" className="h-full w-full object-cover"/>:<div className="grid h-full place-items-center text-7xl opacity-40">🎵</div>}
  </div>
  <div className="mt-6 w-full max-w-xs"><p className="text-white/70">{s.artist}</p><h1 className="text-2xl font-extrabold">{s.title}</h1></div>
  <div className="mt-5 w-full max-w-xs" dir="ltr">
   <input type="range" aria-label="التقدم" className="w-full accent-amber-400" min={0} max={p.duration||s.duration} step={1} value={p.time} onChange={e=>p.seek(+e.target.value)}/>
   <div className="flex justify-between text-xs text-white/70"><span>{fmt(p.time)}</span><span>{fmt(p.duration||s.duration)}</span></div>
  </div>
  <div className="mt-4 flex items-center gap-8 text-3xl" dir="ltr">
   <button onClick={p.previous} aria-label="السابق">⏮</button>
   <button onClick={p.toggle} aria-label={p.playing?"إيقاف مؤقت":"تشغيل"} className="grid h-16 w-16 place-items-center rounded-full bg-white text-black">{p.playing?"⏸":"▶"}</button>
   <button onClick={p.next} aria-label="التالي">⏭</button>
  </div>
  <div className="mt-5 flex w-full max-w-xs items-center gap-3" dir="ltr"><span aria-hidden>🔈</span><input type="range" aria-label="الصوت" min={0} max={1} step={0.05} value={p.volume} onChange={e=>p.setVolume(+e.target.value)} className="w-full accent-amber-400"/></div>
  <button onClick={()=>setSaved(v=>!v)} className="mt-5 rounded-full bg-white/10 px-5 py-2">{saved?"❤️ تم الحفظ":"🤍 حفظ"}</button>
 </main>);
}
