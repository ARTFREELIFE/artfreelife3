import "./globals.css";

export const metadata = {
  title: "ARTFreeLife",
  description: "Fine art photography platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
