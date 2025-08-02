import "./globals.css";

export const metadata = {
  title: "AylexCODE - Portfolio",
  description: "AylexCODE Portfolio, explore my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
