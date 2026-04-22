// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { Providers } from "./Providers";
// import { ToastContainer } from "react-toastify";

// // Load Inter font
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: "",
//   description: "Document Signature Application",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="robots" content="noindex, nofollow" />
//       </head>
//       <body className="font-sans">
//         <Providers>
//           {children}
//           <ToastContainer />
//         </Providers>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const brand = process.env.NEXT_PUBLIC_BRAND_NAME;
export const metadata = {
  title: "eSignSure | Fast, Secure & Legally-Binding Online eSignature Software",
  description:
    "Simplify your document workflows with eSignSure. Send contracts, collect legally-binding eSignatures, and track status instantly — all in one secure platform.",
};

import GlobalNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Rock+Salt&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
          <GlobalNavbar />
          <main style={{ minHeight: 'calc(100vh - 100px)' }}>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
