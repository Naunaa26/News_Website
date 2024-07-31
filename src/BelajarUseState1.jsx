import React, { useEffect, useRef, useState } from "react";

const BelajarUseState1 = () => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    e.preventDefault;
    alert(`Selamat Datang : ${nama}\n${kelas}\n${telephone}\n${email}`);
  };

  const inputNumber = useRef(1);
  const tambahAngka = () => {
    inputNumber.current = inputNumber.current + 1;
    console.log(inputNumber.current);
  };

  return (
    <div>
      <h2 className="text-center font-medium text-3xl m-4">Belajar Alert</h2>

      <div className="mt-10 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="mb-2">
            Nama Lengkap
            <input
              type="text"
              className="border-2 border-orange-500 bg-transparent rounded-md ml-3 p-1"
              onChange={(e) => setNama(e.target.value)}
            />
          </label>
          <label className="mb-2">
            Kelas
            <input
              type="text"
              className="border-2 border-orange-500 bg-transparent rounded-md ml-3 p-1"
              onChange={(e) => setKelas(e.target.value)}
            />
          </label>
          <label className="mb-2">
            No Telephone
            <input
              type="number"
              className="border-2 border-orange-500 bg-transparent rounded-md ml-3 p-1"
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
          <label className="mb-2">
            Email
            <input
              type="email"
              className="border-2 border-orange-500 bg-transparent rounded-md ml-3 p-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button
            className="bg-blue-400 p-2 border-black rounded-md px-4"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>

      <div>
        {number.current}
        <button onClick={add}>add</button>
      </div>
    </div>
  );
};

export default BelajarUseState1;
