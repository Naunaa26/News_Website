import React from "react";

const BelajarChildren = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-4">
        Ini Card Pilihanmu
      </h2>
      <div className="flex mx-auto justify-center gap-10 mt-4">
        {/* ini htmlnya */}
        <CardChildren>
          <img
            className="w-30px mt-4 mx-auto flex justify-center h-48 object-cover"
            src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/03/31/1081666204.jpg"
            alt="ini gambar"
          />
          <p className="text-center mb-4 mt-4">Jadi Anak Yg Sholeh Yaa</p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition mx-auto flex justify-center">
            Klik Disini Nak !!
          </button>
        </CardChildren>

        <CardChildren>
          <img
            className="w-30px mt-4 mx-auto flex justify-center h-48 object-cover"
            src="https://asset-2.tstatic.net/pontianak/foto/bank/images/anak-nakal_20170417_101015.jpg"
            alt="ini gambar"
          />
          <p className="text-center mb-4 mt-4">Jadi Anak Yg Nakal Yaa!!</p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition mx-auto flex justify-center">
            Klik Disini Untuk Gas !!
          </button>
        </CardChildren>

        <CardChildren>
          <img
            className="w-30px mt-4 mx-auto flex justify-center h-48 object-cover"
            src="https://st2.depositphotos.com/2002575/5408/i/450/depositphotos_54084181-stock-photo-fashionable-little-boy-in-sunglasses.jpg"
            alt="ini gambar"
          />
          <p className="text-center mb-4 mt-4">Jadi Anak Yg Cool Mau Ga</p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition mx-auto flex justify-center">
            Ayok Menjadi Cool !!
          </button>
        </CardChildren>
      </div>
    </>
  );
};

// ini children / manggilnya biar muncul

const CardChildren = ({ children }) => {
  return (
    <div className="border-2 rounded-md w-fit border-black ">
      <h1></h1>
      <>{children}</>
    </div>
  );
};

export default BelajarChildren;
