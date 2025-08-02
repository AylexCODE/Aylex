import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
});

export const metadata = {
  title: "AylexCODE - Portfolio",
  description: "AylexCODE Portfolio, explore my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-spaceGrotesk`}>
        {children}
      </body>
    </html>
  );
}
