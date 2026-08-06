import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const [githubOwner, githubRepository] = (
  process.env.GITHUB_REPOSITORY ?? "Zth9730/github.io"
).split("/");
const isUserSite =
  githubRepository.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;
const pagesOrigin = isUserSite
  ? `https://${githubOwner.toLowerCase()}.github.io`
  : `https://${githubOwner.toLowerCase()}.github.io/${githubRepository}`;

export const metadata: Metadata = {
  metadataBase: new URL(`${pagesOrigin}/`),
  title: "Tian-Hao Zhang — Speech Intelligence Researcher",
  description:
    "Research in Speech LLMs, automatic speech recognition, and expressive speech synthesis by Tian-Hao Zhang.",
  icons: {
    icon: `${pagesOrigin}/favicon.svg`,
  },
  openGraph: {
    title: "Tian-Hao Zhang — Speech Intelligence Researcher",
    description: "Speech LLM · ASR · TTS",
    type: "profile",
    images: [
      {
        url: `${pagesOrigin}/og-v2.png`,
        width: 1672,
        height: 941,
        alt: "Tian-Hao Zhang — Speech LLM, ASR, and TTS researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tian-Hao Zhang — Speech Intelligence Researcher",
    description: "Speech LLM · ASR · TTS",
    images: [`${pagesOrigin}/og-v2.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
