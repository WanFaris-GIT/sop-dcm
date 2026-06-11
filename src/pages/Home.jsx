import { Link } from "react-router-dom";

const sopCategories = [
  {
    icon: "🛡️",
    title: "SOP HOD",
    desc: "Panduan pengurusan, penyeliaan dan keputusan utama untuk kakitangan atasan.",
    tag: "Pengurusan",
    tagColor: "bg-indigo-100 text-indigo-700",
    to: "/sop-library?audience=hod",
  },
  {
    icon: "👥",
    title: "SOP TEAM",
    desc: "Langkah operasi harian, penyediaan serta kerja pasukan yang perlu diikuti.",
    tag: "Operasi Harian",
    tagColor: "bg-emerald-100 text-emerald-700",
    to: "/sop-library?audience=team",
  },
];



// const announcements = [
//   {
//     date: "15 Mei 2025",
//     title: "SOP Pendaftaran Donor Dikemaskini (v3.2)",
//     desc: "Semakan baharu pada Bahagian 4.3 mengenai penyaringan donor berisiko tinggi.",
//     type: "Kemaskini",
//     color: "border-blue-500 bg-blue-50",
//     badge: "bg-blue-100 text-blue-700",
//   },
//   {
//     date: "2 Jun 2025",
//     title: "Latihan Wajib: Prosedur Kecemasan Donor",
//     desc: "Semua kakitangan DCM dikehendaki menghadiri sesi latihan pada 20 Jun 2025.",
//     type: "Latihan",
//     color: "border-red-500 bg-red-50",
//     badge: "bg-red-100 text-red-700",
//   },
//   {
//     date: "1 Jun 2025",
//     title: "Borang DCM-04 Tersedia dalam Versi Baharu",
//     desc: "Sila muat turun borang terkini dari bahagian Forms & Templates.",
//     type: "Borang",
//     color: "border-green-500 bg-green-50",
//     badge: "bg-green-100 text-green-700",
//   },
// ];


const stats = [
  { value: "26", label: "Dokumen SOP Aktif" },
  { value: "2", label: "Kategori Prosedur" },
  { value: "2026", label: "Tahun Pengemaskinian" },
  { value: "100%", label: "Standard Pematuhan" },
];

export default function Home() {
  return (
<main className="bg-gradient-to-b from-purple-50 via-white to-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                🩸 Portal SOP Rasmi
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Donor Customer{" "}
                <span className="text-purple-700">Management</span>
                <br />
                SOP Portal
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8">
                Akses cepat kepada semua Standard Operating Procedures (SOP), 
                garis panduan, borang, dan sumber rujukan jabatan DCM dalam satu platform terpusat.
              </p>
            </div>

            {/* Stats Card */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="bg-gray-900 text-white rounded-2xl p-8 grid grid-cols-2 gap-6 min-w-[280px]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-extrabold text-purple-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SOP Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Kategori SOP</h2>
            <p className="text-gray-500 text-sm mt-1">
              Pilih kategori berkaitan untuk melihat prosedur terperinci
            </p>
          </div>
          <Link
            to="/sop-library"
            className="text-sm text-purple-700 hover:underline font-medium"
          >
            Lihat semua →
          </Link>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sopCategories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.to}
              className="group bg-white border border-gray-200 hover:border-purple-300 rounded-xl p-6 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-purple-700 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              <div className="mt-4 text-purple-600 text-xs font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Buka SOP →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Announcements & Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Card */}
            <div className="mt-5 bg-gray-900 text-white rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Keperluan Segera</p>
              <p className="font-bold text-sm mb-3">Hubungi Pengurus DCM</p>
              <a
                href="tel:+60312345678"
                className="block text-center bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold py-2.5 rounded-md transition-colors"
              >
                📞 Talian Terus
              </a>
            </div>
          </div>
      </section>

    </main>
  );
}