import Navbar from "@/components/home/navbar";
import "./globals.css";

export const metadata = {
  title: 'Conscioux - Next-Gen Crypto Market Analysis',
  description: 'Empower your crypto trading with AI-driven insights and personalized experiences.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
