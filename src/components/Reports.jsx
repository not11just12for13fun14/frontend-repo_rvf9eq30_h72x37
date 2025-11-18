import React from 'react'
import { motion } from 'framer-motion'
import { BarChart2, TrendingUp } from 'lucide-react'

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

export default function Reports() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2"><BarChart2 className="w-5 h-5 text-slate-400"/> Rapports</h2>
        <div className="text-xs text-slate-500 inline-flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-500"/> Mise à jour: aujourd'hui
        </div>
      </div>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">CPL (30 derniers jours)</div></div>
        <div className="p-6">
          <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-blue-200/40 via-cyan-200/40 to-amber-200/40 border border-slate-100"></div>
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
            <motion.div key={i} initial={{opacity: 0, y: 6}} animate={{opacity: 1, y: 0}} transition={{duration: 0.2, delay: i*0.03}} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60">
              <div className="text-sm text-slate-800">{c}</div>
              <div className="text-xs text-slate-400 mt-1">Performance saine</div>
            </motion.div>
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
