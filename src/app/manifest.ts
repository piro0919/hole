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
        sizes: "any",
        type: "image/x-icon",
      },
      {
        "sizes": "192x192",
        "src": "/icon192.png",
        "type": "image/png"
      },
      {
        "sizes": "512x512",
        "src": "/icon512.png",
        "type": "image/png"
      }
    ],
  };
}
