import "./globals.css";

export const metadata = {
  title: "Node Home",
  description: "Next-style layout with a bold landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
