import { useState } from 'react';
import { Shield, Users } from 'lucide-react';
import { sopLibrary } from '../data/sopLibrary';



export default function SOPLibrary() {
  const [activeGroup, setActiveGroup] = useState('hod');
  const [selectedSOP, setSelectedSOP] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});


  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const groupedSOPs = sopLibrary.filter((sop) => sop.audience === activeGroup);
  const displaySOP = selectedSOP
    ? groupedSOPs.find((sop) => sop.id === selectedSOP)
    : null;

  const closeDetails = () => {
    setSelectedSOP(null);
    setExpandedSections({});
  };

  return (
      <div className="min-h-screen bg-linear-to-b from-slate-100 via-white to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 sm:mb-8 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">SOP Portal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Pilih kumpulan SOP</h1>
          <p className="max-w-2xl text-gray-600 text-sm sm:text-base">Pilih sama ada anda ingin melihat SOP untuk pengurusan HOD atau operasi Team. Paparan ini direka dengan susun atur kad yang lebih jelas dan mudah dibaca.</p>
        </div>


        <div className="space-y-6">
          {/* Audience toggle (optional) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                key: 'hod',
                title: 'SOP HOD',
                desc: 'Panduan pengurusan, penyeliaan dan keputusan utama untuk kakitangan atasan.',
                accent: 'from-indigo-600 via-indigo-500 to-blue-500',
                badge: 'Terdapat ' + sopLibrary.filter((sop) => sop.audience === 'hod').length + ' SOP',
                Icon: Shield,
              },
              {
                key: 'team',
                title: 'SOP TEAM',
                desc: 'Langkah operasi harian, penyediaan serta kerja pasukan yang perlu diikuti.',
                accent: 'from-emerald-500 via-teal-500 to-cyan-500',
                badge: 'Terdapat ' + sopLibrary.filter((sop) => sop.audience === 'team').length + ' SOP',
                Icon: Users,
              },
            ].map((card) => {
              const isActive = activeGroup === card.key;

              return (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => {
                    setActiveGroup(card.key);
                    closeDetails();
                  }}
                  className={`rounded-3xl border p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                    isActive
                      ? 'border-indigo-500 bg-white ring-2 ring-indigo-200'
                      : 'border-slate-200 bg-white/90 hover:border-indigo-200'
                  }`}
                >
                  <div className={`mb-4 inline-flex rounded-2xl bg-linear-to-r ${card.accent} p-3 text-white shadow-lg`}>
                    <card.Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{card.badge}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{card.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
                </button>
              );
            })}
          </div>

          {/* SOP Cards */}
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-500">Senarai SOP</p>
                <h3 className="text-xl font-bold text-slate-900">{activeGroup === 'hod' ? 'HOD' : 'TEAM'}</h3>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{groupedSOPs.length} item</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {groupedSOPs.map((sop) => {
                const isSelected = displaySOP?.id === sop.id;

                return (
                  <div
                    key={sop.id}
                    className={`min-h-[160px] md:aspect-square rounded-3xl border p-5 shadow-sm transition-all flex h-full flex-col justify-between ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-600 text-white'
                        : 'border-slate-200 bg-white hover:border-indigo-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-80">SOP #{sop.id}</p>
                        <h4 className={`mt-1 text-lg font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>{sop.title}</h4>
                        <p className={`mt-1 text-sm ${isSelected ? 'text-indigo-100' : 'text-slate-600'}`}>{sop.titleMalay}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex-1 rounded-2xl bg-white/10 p-3 backdrop-blur-sm">

                    </div>

                    <div className="mt-auto pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSOP(sop.id);
                          setExpandedSections({});
                        }}
                        className={`w-full rounded-2xl py-2.5 text-sm font-semibold transition-colors ${
                          isSelected
                            ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {isSelected ? 'Details Dipaparkan' : 'Lihat Details'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected SOP Details - Modal */}
          {displaySOP && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={closeDetails}
            >
              <div
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl max-h-[92vh]"
              >

                <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-indigo-500">
                      {activeGroup === 'hod' ? 'HOD Focus' : 'Team Operations'}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">{displaySOP.title}</h2>
                    <p className="text-sm text-slate-600">{displaySOP.titleMalay}</p>
                  </div>

                  <button
                    type="button"
                    onClick={closeDetails}
                    className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    ✕ Tutup
                  </button>
                </div>

                <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6 lg:p-8">
                  <div className="mb-6 rounded-3xl bg-linear-to-r from-indigo-600 to-blue-500 p-6 text-white shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-indigo-100">SOP Details</p>
                        <h2 className="mt-2 text-3xl font-bold">{displaySOP.title}</h2>
                        <p className="text-indigo-100">{displaySOP.titleMalay}</p>
                      </div>

                    </div>
                  </div>

                  <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">{displaySOP.jobList}</p>
                  </div>

                  <div className="space-y-6">
                    <section className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
                      <button
                        type="button"
                        onClick={() => toggleSection('workList')}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <h3 className="text-xl font-bold text-emerald-800">Work List</h3>
                        <span
                          className={`text-emerald-700 transition-transform ${expandedSections.workList ? 'rotate-180' : ''}`}
                        >
                          ▼
                        </span>
                      </button>
                      {expandedSections.workList !== false && (
                        <div className="mt-4 space-y-3">
                          {(() => {
                            let parentIndex = 0;

                            return displaySOP.workList.map((item, index) => {
                              const isSub = typeof item === 'string' && item.trim().startsWith('sub:');
                              if (isSub) return null;

                              const text = item;
                              parentIndex += 1;

                              const subItems = [];
                              for (let j = index + 1; j < displaySOP.workList.length; j++) {
                                const next = displaySOP.workList[j];
                                const nextIsSub = typeof next === 'string' && next.trim().startsWith('sub:');
                                if (!nextIsSub) break;
                                subItems.push(next.trim().replace(/^sub:\s*/, ''));
                              }

                              return (
                                <div key={index} className="flex flex-col gap-2 rounded-2xl bg-white p-3 shadow-sm">
                                  <div className="flex gap-3">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                                      {parentIndex}
                                    </span>
                                    <p className="text-sm text-slate-700">{text}</p>
                                  </div>

                                  {subItems.length > 0 && (
                                    <div className="flex flex-col gap-2">
                                      {subItems.map((subText, subIdx) => (
                                        <div
                                          key={`${index}-${subIdx}`}
                                          className="ml-4 flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm"
                                        >
                                          <span className="mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                                          <p className="text-sm text-slate-700">{subText}</p>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            });
                          })()}
                        </div>
                      )}
                    </section>

                    <section className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                      <button
                        type="button"
                        onClick={() => toggleSection('workflow')}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <h3 className="text-xl font-bold text-sky-800">Work Flow</h3>
                        <span
                          className={`text-sky-700 transition-transform ${expandedSections.workflow ? 'rotate-180' : ''}`}
                        >
                          ▼
                        </span>
                      </button>
                      {expandedSections.workflow !== false && (
                        <div className="mt-4 rounded-2xl border border-dashed border-sky-200 bg-white p-6 shadow-sm">
                          {displaySOP?.workflow?.image ? (
                            <div className="flex flex-col gap-3">
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Chart SOP Image</p>
                              <img
                                src={displaySOP.workflow.image}
                                alt={`Chart SOP for ${displaySOP.title}`}
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 object-contain max-h-[60vh]"
                              />
                              <p className="text-xs text-slate-500">(Draft placeholder — replace with real SOP image later)</p>
                            </div>
                          ) : (
                            <div className="flex min-h-55 flex-col items-center justify-center rounded-2xl bg-sky-50 text-center">
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Chart SOP Image</p>
                              <p className="mt-2 text-base text-slate-600">Masukkan 1 gambar chart SOP sebenar untuk SOP ini.</p>
                              <p className="mt-1 text-sm text-slate-400">(Tempat ini akan guna untuk image per SOP)</p>
                            </div>
                          )}
                        </div>
                      )}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

