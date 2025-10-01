export const metadata = {
  title: "Minecraft Sunucum",
  description: "Minecraft Sunucu Durum Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-900 text-white font-sans">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl font-bold text-green-400">Minecraft Sunucum</h1>
          <div className="space-x-6">
            <a href="/" className="hover:text-green-300 transition">Ana Sayfa</a>
            <a href="/kurallar" className="hover:text-green-300 transition">Kurallar</a>
            <a href="/ekip" className="hover:text-green-300 transition">Ekip</a>
          </div>
        </nav>

        {/* Sayfa İçeriği */}
        <main className="min-h-screen p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-center p-4 mt-6 border-t border-gray-700">
          © 2025 Minecraft Sunucum | Tüm Hakları Saklıdır
        </footer>
      </body>
    </html>
  );
}
