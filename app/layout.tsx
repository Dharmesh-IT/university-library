import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const babasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--babas-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "BookWise is book library that helps you to find your favorite books",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${babasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
