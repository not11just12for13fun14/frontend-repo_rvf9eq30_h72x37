import React from 'react'

function Card({ children, className='' }) {
  return <div className={`bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}>{children}</div>
}

export default function Documents() {
  const docs = [
    { title: 'Rapport - Octobre.pdf', type: 'Monthly report' },
    { title: 'Stratégie Q4.pdf', type: 'Strategy' },
    { title: 'Créatives - Archive.zip', type: 'Creatives' }
  ]
  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((d, i) => (
          <Card key={i} className="p-5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)] transition">
            <div className="h-28 rounded-2xl bg-slate-50 border border-slate-100 mb-4"></div>
            <div className="text-slate-900 font-medium">{d.title}</div>
            <div className="text-xs text-slate-400 mt-1">{d.type}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
