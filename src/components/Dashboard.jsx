import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Bell, ChevronRight } from 'lucide-react'

const colors = {
  primary: '#2563eb',
  accent: '#f59e0b'
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

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* A. Welcome Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Bonjour Alex, voici le Pulse de votre croissance.</h1>
          <p className="text-sm text-slate-500 mt-1">Dernière mise à jour: il y a 3 heures</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Indice</span>
          <div className="px-2 py-1 rounded-xl border border-slate-200 bg-white flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span>Stable</span>
          </div>
        </div>
      </div>

      {/* B. KPI Row */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: 'Leads', value: '1,248', change: '+12%' },
          { label: 'CPL', value: '€ 9.30', change: '-14%' },
          { label: 'ROAS', value: '3.8x', change: '+0.3x' }
        ].map((k, i) => (
          <Card key={i} className="p-5">
            <div className="text-xs text-slate-400">{k.label}</div>
            <div className="mt-1 text-2xl font-semibold text-slate-900">{k.value}</div>
            <div className={`mt-1 text-xs ${k.change.includes('-') ? 'text-rose-500' : 'text-emerald-600'}`}>{k.change}</div>
          </Card>
        ))}
      </div>

      {/* C. Notifications Panel */}
      <Card>
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="font-semibold text-slate-800">Notifications récentes</div>
          <Bell className="w-4 h-4 text-slate-400" />
        </div>
        <div className="p-5 grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Nouveau lead ajouté', time: 'il y a 1h' },
            { title: 'Rapport disponible', time: 'il y a 4h' },
            { title: 'Optimisation campagne', time: 'il y a 6h' }
          ].map((n, i) => (
            <div key={i} className="p-4 rounded-2xl border border-slate-100 bg-gradient-to-br from-amber-50 to-white">
              <div className="text-sm text-slate-800">{n.title}</div>
              <div className="text-xs text-slate-400 mt-1">{n.time}</div>
            </div>
          ))}
        </div>
        <div className="px-5 pb-5"><button className="group text-sm text-slate-600 hover:text-slate-900 transition inline-flex items-center gap-1">Voir toutes <ChevronRight className="w-4 h-4" /></button></div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* D. New Leads Quick View */}
        <Card className="lg:col-span-2">
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Nouveaux leads</div></div>
          <div className="p-5 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400">
                  <th className="py-2">Nom</th>
                  <th className="py-2">Source</th>
                  <th className="py-2">Étape</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  ['Camille Durand', 'Meta', 'Nouveau', '2025-11-05'],
                  ['Marc Petit', 'Google', 'Contacté', '2025-11-04'],
                  ['Inès Robert', 'Autre', 'Qualifié', '2025-11-03']
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4"><button className="text-sm text-blue-600 hover:text-blue-700 transition">Open CRM</button></div>
          </div>
        </Card>

        {/* E. Next Actions */}
        <Card>
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Prochaines actions</div></div>
          <div className="p-5 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400">En action</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="p-3 rounded-2xl border border-slate-100">Audit de la landing page</li>
                <li className="p-3 rounded-2xl border border-slate-100">Segmenter les audiences Google</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400">À surveiller</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="p-3 rounded-2xl border border-slate-100">CTR campagne Meta - Prospecting</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400">Prochain test</div>
              <div className="mt-2 p-3 rounded-2xl border border-slate-100 text-sm text-slate-700">A/B test: nouvelle accroche – 12 Nov</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* F. Pulse Health Indicator */}
        <Card>
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Pulse Health</div></div>
          <div className="p-5">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50 to-white">
              <span className="text-green-500">🟢</span>
              <span className="text-sm text-slate-700">Stable</span>
            </div>
          </div>
        </Card>

        {/* G. Monthly Highlight */}
        <Card className="lg:col-span-2">
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Fait marquant du mois</div></div>
          <div className="p-5 text-sm text-slate-700">
            CPL en baisse de 14% ce mois-ci grâce à l'optimisation des mots-clés longue traîne et une meilleure hiérarchisation des campagnes.
          </div>
        </Card>
      </div>
    </div>
  )
}
