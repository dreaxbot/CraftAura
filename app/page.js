"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [status, setStatus] = useState(null);
  const serverIP = "play.sunucun.com"; // Kendi IP’nizi yazın

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await res.json();
        setStatus(data);
      } catch (err) {
        console.error("Sunucuya bağlanılamadı", err);
      }
    }
    fetchStatus();
  }, []);

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-green-400"
      >
        {serverIP}
      </motion.h1>

      {/* Sunucu Durum Kartı */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-96 hover:shadow-green-500 transition-shadow"
      >
        {status ? (
          <>
            <motion.p
              animate={{ scale: status.online ? [1, 1.1, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className={`text-2xl font-bold mb-4 ${
                status.online ? "text-green-400" : "text-red-500"
              }`}
            >
              {status.online ? "🟢 Sunucu Aktif" : "🔴 Sunucu Kapalı"}
            </motion.p>
            {status.online && (
              <p className="text-lg">
                Oyuncular: <b>{status.players.online}</b> / {status.players.max}
              </p>
            )}
          </>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </motion.div>

      {/* Butonlar */}
      <div className="flex space-x-6 mt-4">
        <motion.a
          href={`minecraft://connect/${serverIP}`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95, rotate: -5 }}
          className="px-6 py-3 bg-green-500 rounded-xl shadow-lg hover:bg-green-400 transition"
        >
          Sunucuya Bağlan
        </motion.a>

        <motion.a
          href="https://discord.gg/xxxx" // Discord linkini koy
          target="_blank"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95, rotate: -5 }}
          className="px-6 py-3 bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-500 transition"
        >
          Discord'a Katıl
        </motion.a>
      </div>
    </div>
  );
}
