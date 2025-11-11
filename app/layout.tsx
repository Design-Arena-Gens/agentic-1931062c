export const metadata = {
  title: "Village Kitchen Cartoon Scene",
  description: "A Simpsons-inspired bright flat cartoon kitchen scene in an Indian village home",
};

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
