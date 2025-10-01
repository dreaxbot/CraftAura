import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-900 text-white font-sans relative">
        <div
          className="fixed inset-0 -z-10 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/galaxy.gif')" }}
        />
        <Navbar />
        <main className="relative z-10 min-h-screen p-6 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
