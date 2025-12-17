import "./globals.css";

export const metadata = {
  title: "AgentsOS",
  description: "AgentsOS landing page — coming soon with a bold, electric gradient theme.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      {
        url: "/favicon-darkmode.svg",
        type: "image/svg+xml",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link
          rel="icon"
          href="/favicon-darkmode.svg"
          type="image/svg+xml"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
