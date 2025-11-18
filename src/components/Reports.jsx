import React from 'react'

function Card({ children, className='' }) {
  return <div className={`bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}>{children}</div>
}

export default function Reports() {
  return (
    <div className="space-y-8">
      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">CPL (30 derniers jours)</div></div>
        <div className="p-6">
          <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-amber-200/40 to-amber-100 border border-amber-200/50"></div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Total leads</div></div>
          <div className="p-6 text-3xl font-semibold text-slate-900">1,248</div>
        </Card>
        <Card>
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">ROAS</div></div>
          <div className="p-6 text-3xl font-semibold text-slate-900">3.8x</div>
        </Card>
      </div>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Aperçu des campagnes</div></div>
        <div className="p-6 grid md:grid-cols-3 gap-4">
          {['Meta Prospecting', 'Google Search - Brand', 'Retargeting'].map((c, i) => (
            <div key={i} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
              <div className="text-sm text-slate-800">{c}</div>
              <div className="text-xs text-slate-400 mt-1">Performance saine</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Résumé mensuel</div></div>
        <div className="p-6 text-sm text-slate-700">
          Les performances restent stables avec une baisse du CPL, une croissance des leads qualifiés et une optimisation des budgets multi-plateformes.
        </div>
      </Card>
    </div>
  )
}
