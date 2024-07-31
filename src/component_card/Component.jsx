import React from "react";
import Data from "./Data";

const GridLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-8">Berita Terkini</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Data
          title="Kemenangan Bersejarah Argentina di Piala Dunia 2022"
          imageurl="https://kaltimtoday.co/wp-content/uploads/2022/12/Timnas-Argentina-di-Piala-Dunia-2022.jpeg"
          description="Pada tanggal 18 Desember 2022 ,Tim Argentina berhasil meraih gelar juara Piala Dunia setelah mengalahkan Prancis dalam final yang dramatis di Stadion Lusail, Qatar di mana Argentina keluar sebagai pemenang dengan skor 4-2.setelah sebelumnya meraih trofi tersebut pada tahun 1978 dan 1986."
          button="Baca Selengkapnya"
        />
        <Data
          title="Indonesia Menangkan Medali Emas di Kejuaraan Dunia BWF"
          imageurl="https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg"
          description="Liliyana Natsir dan Tontowi Ahmad adalah pasangan ganda campuran Indonesia yang telah meraih berbagai prestasi gemilang di bulu tangkis dunia dan mereka juga juara satu disana. menjadikan mereka salah satu pasangan ganda campuran terbaik dalam sejarah bulu tangkis."
          button="Baca Selengkapnya"
        />
        <Data
          title="Penemuan Arkeologi Menakjubkan di Mesir"
          imageurl="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?cs=srgb&dl=pexels-pixabay-248547.jpg&fm=jpg"
          description="Para arkeolog baru-baru ini menemukan makam kuno di Mesir yang berusia lebih dari 3.000 tahun. Penemuan ini termasuk barang-barang berharga dan lukisan dinding yang mengungkap kehidupan masyarakat Mesir kuno. Temuan ini memberikan wawasan baru tentang budaya dan sejarah Mesir kuno."
          button="Baca Selengkapnya"
        />
        <Data
          title="Peluncuran Smartphone Terbaru dari Apple"
          imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDqUB2zca0JDW1aTZMyj2fgaYO8Pkx6lS8Q&s"
          description="Apple baru saja meluncurkan model smartphone terbaru mereka yang dilengkapi dengan teknologi canggih dan fitur inovatif. Model terbaru ini menawarkan peningkatan performa dan kamera yang lebih baik, serta desain yang lebih elegan. Peluncuran ini sangat dinanti oleh para penggemar teknologi di seluruh dunia."
          button="Baca Selengkapnya"
        />
      </div>
    </div>
  );
};

export default GridLayout;
