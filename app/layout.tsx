import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./Providers";
import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haladjian.dev";

const description =
  "Front-end Developer with 10+ years of experience building high-traffic eCommerce platforms. Specialized in Salesforce Commerce Cloud (SFCC), React, and Next.js. Available for freelance projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas Haladjian — Front-end Developer",
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lucas Haladjian",
    title: "Lucas Haladjian — Front-end Developer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Lucas Haladjian — Front-end Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = JSON.parse(localStorage.getItem('site-settings') || '{}');
                if (s.light) document.documentElement.classList.add('light');
                if (s.accessible) document.documentElement.classList.add('accessible');
                if (s.locale === 'fr') document.documentElement.setAttribute('data-locale', 'fr');
              } catch(e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucas Haladjian",
              jobTitle: "Front-end Developer",
              url: siteUrl,
              sameAs: [
                "https://github.com/naregordon",
                "https://www.linkedin.com/in/lucashaladjian/",
                "https://www.malt.fr/profile/lucashaladjian1",
              ],
            }),
          }}
        />
      </head>
      <body cz-shortcut-listen="true">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
