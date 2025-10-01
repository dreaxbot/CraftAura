export default function Ekip() {
  const ekip = [
    { isim: "DREAX", rol: "Sunucu Sahibi" },
    { isim: "Ahmet", rol: "Admin" },
    { isim: "Mehmet", rol: "Moderatör" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">👥 Ekip</h2>
      <ul className="space-y-2">
        {ekip.map((uye, i) => (
          <li key={i} className="bg-gray-800 p-3 rounded-lg shadow">
            <b>{uye.isim}</b> - {uye.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}

