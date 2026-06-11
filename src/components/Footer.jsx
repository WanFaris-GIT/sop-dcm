import { Link } from "react-router-dom";

const footerLinks = {
  "SOP Categories": [
    { label: "Donor Registration", to: "/sop/registration" },
    { label: "Appointment Scheduling", to: "/sop/scheduling" },
    { label: "Post-Donation Care", to: "/sop/care" },
    { label: "Complaint Handling", to: "/sop/complaints" },
  ],
  "Resources": [
    { label: "Forms & Templates", to: "/forms" },
    { label: "Guidelines", to: "/guidelines" },
    { label: "Training Materials", to: "/training" },
    { label: "FAQ", to: "/faq" },
  ],
  "Department": [
    { label: "About DCM", to: "/about" },
    { label: "Meet the Team", to: "/team" },
    { label: "Contact Us", to: "/contact" },
    { label: "Feedback", to: "/feedback" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-gray-900 text-gray-300">

      {/* Top Banner */}
<div className="bg-purple-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-sm text-center font-medium tracking-wide">
            🩸 Setiap prosedur penting — pastikan anda membaca SOP terkini sebelum bertugas.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Branding Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
<div className="bg-purple-700 text-white rounded-md px-2 py-1 text-xs font-bold tracking-widest uppercase">
                DCM
              </div>
              <div>
                <p className="text-white text-sm font-bold">SOP Portal</p>
<p className="text-purple-300 text-xs font-medium uppercase tracking-wide">
                  Donor Customer Mgmt
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Portal rasmi Standard Operating Procedures (SOP) untuk Jabatan Donor Customer Management. 
              Pastikan amalan terbaik dipatuhi setiap masa.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:dcm@hospital.gov.my"
                className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-md transition-colors"
              >
                📧 Email Kami
              </a>
              <a
                href="tel:+60312345678"
                className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-md transition-colors"
              >
                📞 Hubungi
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-150 flex items-center gap-1.5 group"
                    >
<span className="w-1 h-1 bg-gray-600 group-hover:bg-purple-500 rounded-full transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} Jabatan Donor Customer Management. Hak Cipta Terpelihara.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">
              Dasar Privasi
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terma Penggunaan
            </Link>
            <span className="text-gray-700">|</span>
            <span className="text-gray-600">WanFaris — Kemaskini: Jun 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}