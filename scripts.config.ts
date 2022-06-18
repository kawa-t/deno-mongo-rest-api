import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run src/server.ts",
      desc: "run my server.ts file",
      allow: ["net", "read", "env"],
      unstable: true,
    },
  },
};

export default config;
