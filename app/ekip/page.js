export default function Ekip() {
  const ekip = [
    { isim: "DREAX", rol: "Sunucu Sahibi" },
    { isim: "Ahmet", rol: "Admin" },
    { isim: "Mehmet", rol: "Moderatör" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-green-400">👥 Ekip</h2>
      <ul className="space-y-3">
        {ekip.map((uye, i) => (
          <li
            key={i}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-green-500 transition"
          >
            <b>{uye.isim}</b> - {uye.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}
