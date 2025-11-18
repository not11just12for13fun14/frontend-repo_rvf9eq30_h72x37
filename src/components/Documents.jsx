import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const colors = {
  primary: '#2563eb',
  accent: '#f59e0b',
  secondary: '#22d3ee'
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Documents() {
  const docs = [
    { title: 'Rapport - Octobre.pdf', type: 'Rapport mensuel', size: '1.2 MB' },
    { title: 'Stratégie Q4.pdf', type: 'Stratégie', size: '840 KB' },
    { title: 'Créatives - Archive.zip', type: 'Créatifs', size: '24.5 MB' }
  ]
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2"><FileText className="w-5 h-5 text-slate-400"/> Documents</h2>
        <button className="h-9 px-3 rounded-xl text-white text-xs shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:opacity-95" style={{background: colors.primary}}>Charger un document</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((d, i) => (
          <Card key={i} className="p-5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)] transition">
            <div className="h-28 rounded-2xl bg-gradient-to-br from-blue-50 via-cyan-50 to-amber-50 border border-slate-100 mb-4" />
            <div className="text-slate-900 font-medium truncate">{d.title}</div>
            <div className="text-xs text-slate-400 mt-1">{d.type} • {d.size}</div>
            <div className="mt-4 flex items-center justify-between">
              <button className="text-sm text-blue-600 hover:text-blue-700">Prévisualiser</button>
              <button className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 text-sm"><Download className="w-4 h-4"/> Télécharger</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
