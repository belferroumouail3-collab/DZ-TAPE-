import { SHORT_LEN } from "./types";
/** Suggested Golden Clip: the 30s window with the highest average RMS energy.
 *  This measures loudness/energy only — it does not "understand" music. */
export async function suggestGoldenClip(file:File){
 const ctx=new AudioContext();
 try{
  const buf=await ctx.decodeAudioData(await file.arrayBuffer());
  const ch=buf.getChannelData(0), sr=buf.sampleRate, n=Math.floor(buf.duration);
  const rms:number[]=[];
  for(let i=0;i<n;i++){let s=0;const a=i*sr,b=Math.min(a+sr,ch.length);for(let j=a;j<b;j+=4)s+=ch[j]*ch[j];rms.push(Math.sqrt(s/((b-a)/4)))}
  if(n<=SHORT_LEN) return {start:0,duration:buf.duration};
  const skip=Math.min(Math.floor(n*0.08),10); // ignore intro
  let sum=0,best=-1,start=skip;
  for(let i=skip;i<n;i++){sum+=rms[i];if(i-skip>=SHORT_LEN)sum-=rms[i-SHORT_LEN];
   if(i-skip>=SHORT_LEN-1&&sum>best){best=sum;start=i-SHORT_LEN+1}}
  return {start,duration:buf.duration};
 } finally { ctx.close(); }
}
