"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServerCard from "../components/ServerCard";

export default function Home() {
  const [status, setStatus] = useState(null);
  const serverIP = "play.sunucun.com"; // Sunucu IP’nizi yazın

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
    <div className="flex flex-col items-center space-y-8 mt-20">
      <h1 className="text-5xl font-extrabold text-green-400">{serverIP}</h1>
      <ServerCard serverIP={serverIP} status={status} />
      <div className="flex space-x-6 mt-4">
        <motion.a
          href={`minecraft://connect/${serverIP}`}
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 20px #00ff99" }}
          whileTap={{ scale: 0.95, rotate: -5, boxShadow: "0 0 10px #00ff99" }}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl shadow-lg text-white font-bold transition"
        >
          Sunucuya Bağlan
        </motion.a>
        <motion.a
          href="https://discord.gg/xxxx"
          target="_blank"
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 0 20px #7f00ff" }}
          whileTap={{ scale: 0.95, rotate: -5, boxShadow: "0 0 10px #7f00ff" }}
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl shadow-lg text-white font-bold transition"
        >
          Discord'a Katıl
        </motion.a>
      </div>
    </div>
  );
}
