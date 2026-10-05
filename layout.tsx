import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
const cairo=Cairo({subsets:["arabic","latin"],variable:"--font-cairo",weight:["400","600","800"]});
export const metadata:Metadata={title:"DzTape",description:"اكتشف الراي والموسيقى الجزائرية",manifest:"/manifest.webmanifest",icons:{icon:"/icon.svg"}};
export const viewport:Viewport={themeColor:"#0b0710",width:"device-width",initialScale:1,maximumScale:1};
export default function Root({children}:{children:React.ReactNode}){
 return(<html lang="ar" dir="rtl"><body className={`${cairo.variable} font-cairo`}>{children}
 <script dangerouslySetInnerHTML={{__html:"if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'))"}}/></body></html>);
}
