export const metadata = {
  title: "Minecraft Sunucum",
  description: "Minecraft Sunucusu Durum Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-900 text-white font-sans">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 flex justify-between">
          <h1 className="text-xl font-bold">Minecraft Sunucum</h1>
          <div className="space-x-4">
            <a href="/" className="hover:text-green-400">Ana Sayfa</a>
            <a href="/kurallar" className="hover:text-green-400">Kurallar</a>
            <a href="/ekip" className="hover:text-green-400">Ekip</a>
            <a href="/logs" className="hover:text-green-400">Logs</a>
          </div>
        </nav>

        {/* Sayfa İçeriği */}
        <main className="min-h-screen p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-center p-4 mt-6">
          © 2025 Minecraft Sunucum | Tüm Hakları Saklıdır
        </footer>
      </body>
    </html>
  );
}

