import React from "react";
import Header from "./components/Header";
import Card from "./Card";

const News = () => {
  const dataNews = [
    {
      title: "Berita Tragedi Pencurian Data Rabbanii Islamic School",
      date: "28 Juli 2024",
      content:
        "Dalam gelap malam, seorang hacker berpakaian hitam dengan jari-jari lincah menerobos jaringan Sekolah Rabbanii Islamic School. Ia menghindari firewall dan menggali ke dalam database yang terlindungi. Setiap ketukan keyboard mengungkap rahasia tersembunyi, membongkar sistem dengan keahlian dan kecerdikan yang memikat. Cahaya layar memantulkan kepuasan di wajahnya saat ia mengeksploitasi setiap celah keamanan.",
      image:
        "https://assets-a1.kompasiana.com/items/album/2020/04/24/theolivepress-5ea25ee2097f361ac9688cf2.png",
      category: "Hacker",
      link: "https://thehackernews-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc",
    },
    {
      title: "Berita Tawuran Smk melawan Sma di Bekasi",
      date: "10 Juni 2018",
      content:
        "Dalam keremangan sore, sekelompok siswa dari SMK dan SMA terlibat dalam keributan di kawasan Bekasi. Dengan emosi yang memuncak, mereka saling melempar kata-kata dan berakhir saling bentrok. Setiap teriakan dan lemparan batu menggambarkan intensitas ketegangan yang semakin meningkat. Di tengah situasi yang kacau, sejumlah siswa terlihat terluka, sementara yang lainnya mencoba melarikan diri. Suara sirene polisi mendekat, memantulkan ketegangan yang membekas di wajah para pelajar yang terlibat. Kerusuhan ini mengungkap ketegangan antar sekolah yang telah lama memanas, mengguncang ketenangan kota.",
      image: "https://kabarpadang.com/wp-content/uploads/2014/04/Tawuran.jpg",
      category: "Masyarakat",
      link: "https://www.detik.com/tag/tawuran",
    },
    {
      title: "Berita Israel Menyerang Palestina Dengan Brutal",
      date: "20 Agustus 2023",
      content:
        "Di siang hari, suara ledakan dan tembakan menghentak Gaza. Pesawat-pesawat tempur Israel melancarkan serangan udara, menyasar bangunan-bangunan yang dianggap sebagai tempat persembunyian militan. Warga Palestina berlari mencari perlindungan, sementara sirene serangan udara terus berbunyi. Ledakan-ledakan menggambarkan intensitas serangan. Beberapa warga terluka, sementara yang lainnya berusaha membantu mereka yang terjebak. Ketegangan terasa di wajah-wajah yang ketakutan. Serangan ini menunjukkan konflik yang kembali memanas, mengguncang kedamaian di wilayah tersebut.",
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/11/thumbs_b_c_3d35469e656fae2dd3742ec8801013c1.jpg?v=134731",
      category: "Perang",
      link: "https://www.aa.com.tr/id/dunia/pasukan-israel-serang-jamaah-palestina-di-masjid-al-aqsa/1554854",
    },
    {
      title: "Berita Indonesia Mengalahkan Thailand",
      date: "29 Juli 2024",
      content:
        "Di bawah sorotan lampu stadion, tim nasional Indonesia berhasil mengalahkan Thailand dalam pertandingan sengit. Dengan semangat juang tinggi, para pemain Indonesia menampilkan permainan gemilang, menguasai lapangan dan mencetak gol yang menentukan. Setiap serangan dan aksi brilian menggambarkan dominasi tim. Sorak sorai penonton menggema, memberikan dukungan penuh. Di akhir pertandingan, skor menunjukkan kemenangan Indonesia, mengukir momen bersejarah bagi tim dan pendukungnya. Kemenangan ini tidak hanya memperlihatkan keunggulan Indonesia di lapangan, tetapi juga membangkitkan kebanggaan nasional.",
      image:
        "https://asset-2.tstatic.net/jogja/foto/bank/images/live-indonesia-vs-thailand-AFF-U23-2023.jpg",
      category: "Fifa/Bola",
      link: "https://jogja.tribunnews.com/2023/08/24/hasil-indonesia-vs-thailand-garuda-muda-menang-3-1-hadapi-vietnam-di-final-piala-aff-u23-2023",
    },
    {
      title: "Berita Nasa Terbaru Saat Keluar Angkasa",
      date: "15 Desember 2001",
      content:
        "NASA baru-baru ini mengumumkan pencapaian signifikan dalam eksplorasi luar angkasa. Dalam misi terbaru, pesawat ruang angkasa mereka berhasil mengirimkan data penting dari Mars, memberikan wawasan baru tentang kondisi atmosfer dan potensi kehidupan di planet merah. Dengan teknologi mutakhir, para ilmuwan NASA menganalisis gambar dan sampel yang dikirimkan, membuka kemungkinan penemuan baru. Keberhasilan misi ini menandai langkah maju besar dalam penelitian luar angkasa dan memperkuat komitmen NASA untuk eksplorasi dan penemuan ilmiah.",
      image:
        "https://cdn.mos.cms.futurecdn.net/wqkwy8CNJGgWVp9nZBSqXk-1200-80.jpg",
      category: "Angkasa",
      link: "https://www.space.com/38700-nasa-history.html",
    },
    {
      title: "Berita Virus / Penyakit Terbaru Pada Masa Gen Z",
      date: "03 September 2019",
      content:
        "Dalam keremangan sore, sekelompok siswa dari SMK dan SMA terlibat dalam keributan di kawasan Bekasi. Dengan emosi yang memuncak, mereka saling melempar kata-kata dan berakhir saling bentrok. Setiap teriakan dan lemparan batu menggambarkan intensitas ketegangan yang semakin meningkat. Di tengah situasi yang kacau, sejumlah siswa terlihat terluka, sementara yang lainnya mencoba melarikan diri. Suara sirene polisi mendekat, memantulkan ketegangan yang membekas di wajah para pelajar yang terlibat. Kerusuhan ini mengungkap ketegangan antar sekolah yang telah lama memanas, mengguncang ketenangan kota.",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2023/07/02/ilustrasi-virus-corona_169.jpeg?w=600&q=90",
      category: "Penyakit",
      link: "https://www.detik.com/tag/virus",
    },
  ];

  console.log(dataNews);
  return (
    <>
      <Header
        title="Berita Viral Dunia"
        subtitle="Berita 2 Yang Harus Kamu Lihat Dan Ketahui Satu Kali Semumur Hidup "
      />

      {/* ini data map biar simple */}
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5 px-10 max-lg:px-5">
        {dataNews.map((news, index) => (
          <div key={index}>
            <Card
              title={news.title}
              date={news.date}
              content={news.content}
              image={news.image}
              category={news.category}
              link={news.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
