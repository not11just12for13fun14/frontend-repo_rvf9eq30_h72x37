import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Plus, CheckCircle2, Phone, Mail, ChevronRight } from 'lucide-react'

const colors = {
  primary: '#2563eb', // blue-600
  accent: '#f59e0b',  // amber-500
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

const initialLeads = [
  { id: 1, name: 'Camille Durand', email: 'camille@example.com', phone: '+33 6 12 34 56 78', source: 'Meta', stage: 'Nouveau', notes: 'Intéressée par l’offre croissance.' },
  { id: 2, name: 'Marc Petit', email: 'marc@example.com', phone: '+33 6 23 45 67 89', source: 'Google', stage: 'Contacté', notes: 'Appel prévu vendredi.' },
  { id: 3, name: 'Inès Robert', email: 'ines@example.com', phone: '+33 6 98 76 54 32', source: 'Autre', stage: 'Qualifié', notes: 'Budget validé, attendre Q1.' }
]

export default function CRM() {
  const [leads, setLeads] = useState(initialLeads)
  const [selected, setSelected] = useState(leads[0])
  const [filter, setFilter] = useState('Tous')

  const filtered = useMemo(() => {
    if (filter === 'Tous') return leads
    return leads.filter(l => l.stage === filter)
  }, [leads, filter])

  function addLead() {
    const id = leads.length + 1
    const newLead = { id, name: 'Nouveau Lead', email: 'new@example.com', phone: '+33 …', source: 'Autre', stage: 'Nouveau', notes: '' }
    setLeads([newLead, ...leads])
    setSelected(newLead)
  }

  function updateStage(stage) {
    setLeads(leads.map(l => l.id === selected.id ? { ...l, stage } : l))
    setSelected({ ...selected, stage })
  }

  const stages = ['Tous', 'Nouveau', 'Contacté', 'Qualifié']

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-400" /> CRM
          </h2>
          <p className="text-xs text-slate-500 mt-1">Gérez les leads et avancez les deals avec clarté.</p>
        </div>
        <div className="flex items-center gap-2">
          {stages.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`h-9 px-3 rounded-xl border text-xs transition ${
                filter === s ? 'border-slate-300 bg-white text-slate-700' : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >{s}</button>
          ))}
          <button onClick={addLead} className="h-9 px-3 rounded-xl text-white text-xs inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:opacity-95" style={{ background: colors.primary }}>
            <Plus className="w-3.5 h-3.5" /> Nouveau lead
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 overflow-hidden">
          <div className="p-5 flex items-center justify-between border-b border-slate-100">
            <div className="font-semibold text-slate-800">Leads</div>
          </div>
          <div className="overflow-x-auto p-5">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400">
                  <th className="py-2">Nom</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Téléphone</th>
                  <th className="py-2">Source</th>
                  <th className="py-2">Étape</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {filtered.map(l => (
                  <motion.tr
                    key={l.id}
                    layout
                    className={`border-t border-slate-100 cursor-pointer hover:bg-slate-50 ${selected?.id===l.id?'bg-slate-50/80':''}`}
                    onClick={() => setSelected(l)}
                  >
                    <td className="py-3">{l.name}</td>
                    <td className="py-3">{l.email}</td>
                    <td className="py-3">{l.phone}</td>
                    <td className="py-3">{l.source}</td>
                    <td className="py-3">{l.stage}</td>
                    <td className="py-3">{l.notes || '—'}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-10 text-center text-sm text-slate-500">Aucun lead pour ce filtre.</div>
            )}
          </div>
        </Card>

        <Card>
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Détails du lead</div></div>
          <div className="p-5 space-y-4 text-sm text-slate-700">
            {selected ? (
              <>
                <div>
                  <div className="text-slate-400 text-xs uppercase">Contact</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span>{selected.name}</span>
                  </div>
                  <div className="text-slate-500 inline-flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> {selected.email}</div>
                  <div className="text-slate-500 inline-flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> {selected.phone}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase">Source</div>
                  <div className="mt-1">{selected.source}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase">Chronologie</div>
                  <ul className="mt-2 space-y-2">
                    <li className="p-3 rounded-2xl border border-slate-100">Lead créé</li>
                    <li className="p-3 rounded-2xl border border-slate-100">Premier contact</li>
                  </ul>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase">Notes</div>
                  <div className="mt-1">{selected.notes || '—'}</div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <button onClick={() => updateStage('Contacté')} className="h-9 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs hover:bg-slate-50 inline-flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Marquer contacté</button>
                  <button onClick={() => updateStage('Qualifié')} className="h-9 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs hover:bg-slate-50">Marquer qualifié</button>
                </div>
                <button className="group text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">Ouvrir dans le CRM <ChevronRight className="w-3.5 h-3.5" /></button>
              </>
            ) : (
              <div className="text-slate-400">Sélectionnez un lead pour voir les détails</div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
