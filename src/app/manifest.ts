import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "穴",
    short_name: "穴",
    description: "王様の耳はロバの耳！！",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        sizes: "96x96",
        src: "icon.png",
        type: "image/png",
      },
    ],
  };
}
