"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [status, setStatus] = useState(null);
  const serverIP = "play.sunucun.com"; // Kendi IP’ni yaz

  useEffect(() => {
    async function fetchStatus() {
      const res = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
      const data = await res.json();
      setStatus(data);
    }
    fetchStatus();
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        {serverIP}
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80"
      >
        {status ? (
          <>
            <p className="text-xl mb-2">
              {status.online ? "🟢 Sunucu Aktif" : "🔴 Sunucu Kapalı"}
            </p>
            {status.online && (
              <p>
                Oyuncular: {status.players.online} / {status.players.max}
              </p>
            )}
          </>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </motion.div>

      <motion.a
        href="https://discord.gg/xxxx" // Discord linkini koy
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-500 transition"
      >
        Discord'a Katıl
      </motion.a>
    </div>
  );
}


