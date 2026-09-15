import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const V2_THEME_SCRIPT = `(function(){try{if(localStorage.getItem('v2-theme')==='light')document.documentElement.setAttribute('data-v2-theme','light')}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://yatharthverma.dev"),
  title: {
    default: "Yatharth Verma — Senior Software Engineer",
    template: "%s · Yatharth Verma",
  },
  description:
    "Full-stack engineer. UI, APIs, and the jobs that have to keep running. Currently at Topo (YC W24), previously Artisan AI (YC W24) and LeadSquared.",
  applicationName: "Yatharth Verma",
  authors: [{ name: "Yatharth Verma", url: "https://yatharthverma.dev" }],
  creator: "Yatharth Verma",
  keywords: [
    "Yatharth Verma",
    "senior software engineer",
    "full-stack engineer",
    "Topo",
    "Artisan AI",
    "LeadSquared",
    "YC W24",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yatharthverma.dev",
    siteName: "Yatharth Verma",
    title: "Yatharth Verma — Senior Software Engineer",
    description:
      "Five years on the UI, the APIs, and the jobs that have to keep running. Topo (YC W24), Artisan AI (YC W24), LeadSquared.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatharth Verma — Senior Software Engineer",
    description:
      "Full-stack engineer. UI, APIs, and jobs that have to keep running. Topo and Artisan AI (YC W24), LeadSquared.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: V2_THEME_SCRIPT }} />
      </head>
      <body
        className={`${archivo.variable} ${jetbrains.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
