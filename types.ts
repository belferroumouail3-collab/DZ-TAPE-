export type Genre = "rai_nouveau"|"kabyle"|"rai_old"|"madahat"|"tunisian"|"syrian";
export interface Song { id:string; title:string; artist:string; genre:Genre; mood:string; cover_url?:string|null; audio_url:string; duration:number; golden_30_start:number }
export const GENRES:{key:Genre;label:string}[]=[
 {key:"rai_nouveau",label:"Rai Nouveau"},{key:"kabyle",label:"Kabyle"},{key:"rai_old",label:"Rai Old"},
 {key:"madahat",label:"Madahat"},{key:"tunisian",label:"Tunisian"},{key:"syrian",label:"Syrian"}];
export const SHORT_LEN=30;
export const fmt=(s:number)=>{s=Math.max(0,Math.floor(s||0));return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`};
export const parseTime=(v:string)=>{const [m,s]=v.split(":").map(Number);return (m||0)*60+(s||0)};
