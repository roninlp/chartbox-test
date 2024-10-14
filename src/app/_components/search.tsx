"use client";

import { useState } from "react";
import { Card, CardHeader } from "./card";
import { useRouter } from "next/navigation";

export function Search() {
  const router = useRouter();
  const [symbol, setSymbol] = useState("");
  const handleSearch = () => {
    router.push(`/coin/${symbol}`);
  };
  return (
    <Card>
      <CardHeader>Crypto</CardHeader>
      <div className="flex flex-col gap-4">
        <label htmlFor="symbol">Enter Symbol Name and Search:</label>
        <input
          type="text"
          id="symbol"
          name="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Symbol Name"
          className="border border-neutral-100 rounded px-5 py-3"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-[#0059FF] text-white py-3 px-5 rounded"
      >
        Search
      </button>
    </Card>
  );
}
