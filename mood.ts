import type { Genre } from "./types";
// key = `${genre}_${mood}`
const MOODS:Record<string,string>={
 rai_nouveau_night:"linear-gradient(160deg,#2a0a4a,#6b21a8 55%,#0b0710)", // purple
 rai_nouveau_party:"linear-gradient(160deg,#4a0a2a,#db2777 55%,#0b0710)",
 rai_old_nostalgia:"linear-gradient(160deg,#3b2108,#b45309 55%,#0b0710)",
 kabyle_calm:"linear-gradient(160deg,#052e2b,#0f766e 55%,#0b0710)",
 madahat_spiritual:"linear-gradient(160deg,#052e16,#15803d 55%,#0b0710)",
 tunisian_sun:"linear-gradient(160deg,#4a1204,#dc2626 55%,#0b0710)",
 syrian_classic:"linear-gradient(160deg,#1e1b4b,#4338ca 55%,#0b0710)"};
const FALLBACK:Record<Genre,string>={rai_nouveau:MOODS.rai_nouveau_night,rai_old:MOODS.rai_old_nostalgia,kabyle:MOODS.kabyle_calm,madahat:MOODS.madahat_spiritual,tunisian:MOODS.tunisian_sun,syrian:MOODS.syrian_classic};
export const moodBg=(g:Genre,m:string)=>MOODS[`${g}_${m}`]??FALLBACK[g];
