export default function Navbar() {
  return (
    <nav className="bg-gray-800/80 backdrop-blur-md p-4 flex justify-between items-center w-full shadow-lg fixed top-0 z-20">
      <img src="/logo.png" alt="Sunucu Logo" className="h-10 w-10"/>
      <h1 className="text-2xl font-bold text-green-400 ml-2">Minecraft Sunucum</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-green-300 transition">Ana Sayfa</a>
        <a href="/kurallar" className="hover:text-green-300 transition">Kurallar</a>
        <a href="/ekip" className="hover:text-green-300 transition">Ekip</a>
      </div>
    </nav>
  );
}
