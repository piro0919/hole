import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "ress";
import "tippy.js/dist/tippy.css";

const inter = Inter({ subsets: ["latin"] });

const appName = "穴";
const appDefaultTitle = "穴";
const appTitleTemplate = "%s - 穴";
const appDescription = "王様の耳はロバの耳！！";

export const metadata: Metadata = {
  applicationName: appName,
  title: {
    default: appDefaultTitle,
    template: appTitleTemplate,
  },
  description: appDescription,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: appDescription,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: appName,
    title: {
      default: appDefaultTitle,
      template: appTitleTemplate,
    },
    description: appDescription,
  },
  twitter: {
    card: "summary",
    title: {
      default: appDefaultTitle,
      template: appTitleTemplate,
    },
    description: appDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
