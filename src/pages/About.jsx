import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-indigo-100">
      <section className="border-b border-purple-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-500 font-semibold mb-4">
              About Department
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Donor Customer Management (DCM)
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Portal SOP ini adalah rujukan pusat untuk proses pengurusan donor customer—daripada penyediaan
              data, pemantauan operasi, penyelarasan pelaporan, sehingga semakan pematuhan dan keputusan.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Ringkasan Jabatan</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                DCM bertanggungjawab memastikan semua aktiviti berkaitan donor customer berjalan mengikut
                standard yang ditetapkan. Ini termasuk pengurusan pangkalan data, operasi harian (blasting,
                recording), pemantauan prestasi, serta penyediaan laporan untuk semakan HOD.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Skop Kerja Utama (High-level)</h2>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>
                    <span className="font-semibold text-gray-900">Pengurusan Database</span> — muat turun, kemas kini,
                    tapisan dan pengkelasan data mengikut keperluan operasi.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>
                    <span className="font-semibold text-gray-900">Operasi Team</span> — setup sistem/alat, penyediaan
                    bahan kreatif, blasting menggunakan platform WhatsApp, dan rekodkan hasil.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>
                    <span className="font-semibold text-gray-900">Monitoring & Penyelarasan</span> — pemantauan proses,
                    semakan silang data, serta koordinasi dengan HOD.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>
                    <span className="font-semibold text-gray-900">Pelaporan & Keputusan</span> — penyediaan laporan
                    (harian/mingguan/bulanan & pelaporan untuk client), pembentangan, dan sokongan decision making.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>
                    <span className="font-semibold text-gray-900">Pematuhan SOP</span> — memastikan setiap PIC DB
                    mematuhi langkah-langkah yang ditetapkan serta penilaian KPI.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Prinsip Pemantapan Pematuhan</h2>
              <div className="space-y-3">
                <div className="rounded-xl bg-purple-50 p-4 border border-purple-100">
                  <p className="text-sm font-semibold text-purple-900">Konsistensi Proses</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Semua aktiviti dibuat mengikut langkah SOP untuk mengurangkan risiko kesilapan.
                  </p>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 border border-purple-100">
                  <p className="text-sm font-semibold text-purple-900">Semakan & Validasi</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Double-check/cross-check data dan hasil sebelum pelaporan atau tindakan seterusnya.
                  </p>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 border border-purple-100">
                  <p className="text-sm font-semibold text-purple-900">KPI Yang Telus</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Penilaian prestasi dibuat secara teratur berdasarkan indikator yang ditetapkan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-300 font-semibold mb-3">Bermula Dengan SOP</p>
              <h3 className="text-xl font-bold mb-2">Pilih kumpulan SOP</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Untuk capaian pantas, pergi ke SOP Library dan pilih sama ada SOP HOD atau SOP Team.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/sop-library?audience=hod"
                  className="text-center bg-purple-700 hover:bg-purple-600 transition-colors font-semibold px-4 py-2 rounded-md"
                >
                  SOP HOD
                </Link>
                <Link
                  to="/sop-library?audience=team"
                  className="text-center bg-white/10 hover:bg-white/15 transition-colors border border-white/20 font-semibold px-4 py-2 rounded-md"
                >
                  SOP Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

