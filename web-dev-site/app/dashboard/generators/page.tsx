// app/random/page.tsx
"use client";

import { useState } from "react";
import  Button  from "@/app/components/ui/button";
import  CardContent from "@/app/components/ui/card";
import  Card from "@/app/components/ui/card";
import  motion  from "@/app/components/framer-motion";

export default function RandomGeneratorPage() {
  const [number, setNumber] = useState<number | null>(null);

  const generateRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-6">
      <Card className="w-full max-w-md text-center shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Random Number Generator</h1>
          <motion.div
            key={number}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-extrabold text-indigo-600 mb-6"
          >
            {number !== null ? number : "?"}
          </motion.div>
          <Button
            onClick={generateRandom}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Generate
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
