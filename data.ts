import { supabase } from "./supabase";
import type { Song } from "./types";
// Demo data (used when Supabase isn't configured). Put real mp3 files in /public/audio.
export const DEMO:Song[]=[
 {id:"demo-1",title:"Layl Wahran",artist:"Artist One",genre:"rai_nouveau",mood:"night",audio_url:"/audio/demo1.mp3",duration:222,golden_30_start:102},
 {id:"demo-2",title:"Zhar",artist:"Artist Two",genre:"rai_nouveau",mood:"party",audio_url:"/audio/demo2.mp3",duration:200,golden_30_start:60},
 {id:"demo-3",title:"Ayen",artist:"Artist Three",genre:"kabyle",mood:"calm",audio_url:"/audio/demo3.mp3",duration:240,golden_30_start:45},
 {id:"demo-4",title:"Zman",artist:"Cheb Old",genre:"rai_old",mood:"nostalgia",audio_url:"/audio/demo4.mp3",duration:260,golden_30_start:80}];
export async function getSongs():Promise<Song[]>{
 if(!supabase) return DEMO;
 const {data,error}=await supabase.from("songs").select("*").order("created_at",{ascending:false});
 return error||!data?.length ? DEMO : (data as Song[]);
}
