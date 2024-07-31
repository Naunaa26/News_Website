import React, { useState } from "react";

const BelajarUseState = () => {
  const [hitung, setHitung] = useState(0);

  const handleAlert = (hitung) => {
    alert(`Angka yang Anda pilih: ${hitung}`);
  };

  return (
    <div className="flex items-center flex-col gap-4">
      <h2>Belajar UseState</h2>

      <div className="gap-6 items-center flex">
        <button
          className="bg-blue-400 p-2 border-black rounded-md"
          onClick={() => setHitung(hitung + 1)}
        >
          + Tambah
        </button>
        <p>{hitung}</p>
        <button
          className="bg-blue-400 p-2 border-black rounded-md"
          onClick={() => setHitung(hitung - 1)}
          disabled={hitung === 0}
        >
          - Kurangi
        </button>
      </div>
      <h2>Alert</h2>
      <button className="bg-blue-400 p-2 border-black" onClick={handleAlert}>
        Klik Disini
      </button>
    </div>
  );
};

export default BelajarUseState;
