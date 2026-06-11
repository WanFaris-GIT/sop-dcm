import { Link } from "react-router-dom";

const teamMembers = [
  {
    role: "HOD",
    name: "En Afiq Azhar",
    image: "/images/TEAM1.png",
    accent: "bg-indigo-50 border-indigo-100",
  },
  {
    role: "Staff",
    name: "En Fadhil",
    image: "/images/TEAM2.png",
    accent: "bg-emerald-50 border-emerald-100",
  },
  {
    role: "Part-time",
    name: "En Izzudin",
    image: "/images/TEAM3.png",
    accent: "bg-cyan-50 border-cyan-100",
  },
  {
    role: "Freelance",
    name: "En Fakhrul",
    image: "/images/TEAM4.png",
    accent: "bg-purple-50 border-purple-100",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-indigo-100">
      <section className="border-b border-purple-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-500 font-semibold mb-4">
              Meet the Team
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Donor Customer Management Team
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Paparan ringkas ahli pasukan berdasarkan peranan. Gambar adalah rujukan visual untuk membantu
              pengecaman.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Senarai Ahli</h2>
            <p className="text-gray-500 text-sm mt-1">HOD, Staff, Part-time & Freelance</p>
          </div>

          <Link
            to="/sop-library?audience=team"
            className="text-sm text-purple-700 hover:underline font-medium"
          >
            Lihat SOP Team →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((m) => (
            <div
              key={m.role}
              className={`rounded-2xl border ${m.accent} bg-white shadow-sm overflow-hidden`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700">DCM</span>
                </div>
              </div>


              <div className="px-4 pb-4">
                <img
                  src={m.image}
                  alt={`${m.role} - ${m.name}`}
                  className="w-full h-40 object-cover rounded-xl border border-gray-200 bg-gray-50"
                />

                <div className="mt-4">
                  {/* role setiap team di bawah accent */}
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
                    {m.role}
                  </p>

                  <p className="text-lg font-extrabold text-gray-900 leading-tight">{m.name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {m.role === "HOD"
                      ? "Pengurusan & penyeliaan"
                      : m.role === "Staff"
                        ? "Operasi & pelaksanaan"
                        : m.role === "Part-time"
                          ? "Sokongan mengikut keperluan"
                          : "Kerja khusus/kontrak"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

