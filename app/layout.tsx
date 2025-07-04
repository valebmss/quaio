
import "./globals.css";
import Hero from "@/components/Hero";
import Header from "@/components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body>
    <Header />
    <main className="relative">
      <Hero />
    </main>
  </body>
</html>

  );
}
