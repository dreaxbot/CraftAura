"use client";
import { motion } from "framer-motion";

export default function ServerCard({ serverIP, status }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00ff99" }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-96 border border-green-400 text-center"
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
  );
}
