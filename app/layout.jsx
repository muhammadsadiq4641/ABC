import { Urbanist, Inter } from "next/font/google";
import "./globals.css";
import "antd/dist/antd.min.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Sigma 33",
  description: "$AMP (Algorithmic Monetary Policy)",
  icons: {
    icon: [{ url: "/assets/sigma33-logo.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${urbanist.variable} `}>
        {children}
      </body>
    </html>
  );
}
