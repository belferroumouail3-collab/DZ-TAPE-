import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx","./hooks/**/*.ts"], theme:{extend:{fontFamily:{cairo:["var(--font-cairo)","sans-serif"]}}}, plugins:[] } satisfies Config;
