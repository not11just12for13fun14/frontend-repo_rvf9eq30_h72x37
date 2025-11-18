import React from 'react'
import { motion } from 'framer-motion'
import { Settings as SettingsIcon, Sun, MoonStar } from 'lucide-react'

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

export default function Settings() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2"><SettingsIcon className="w-5 h-5 text-slate-400"/> Réglages</h2>
        <div className="flex items-center gap-2">
          <button className="h-9 px-3 rounded-xl border border-slate-200 text-sm text-slate-600 inline-flex items-center gap-2"><Sun className="w-4 h-4"/> Clair</button>
          <button className="h-9 px-3 rounded-xl border border-slate-200 text-sm text-slate-600 inline-flex items-center gap-2"><MoonStar className="w-4 h-4"/> Sombre</button>
        </div>
      </div>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Profil utilisateur</div></div>
        <div className="p-6 grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Prénom</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="Alex" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Nom</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="Martin" />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm text-slate-600">Email</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200 w-full" defaultValue="alex@efficium.com" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Entreprise</div></div>
        <div className="p-6 grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Nom de l'entreprise</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="Efficium" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Site web</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="efficium.com" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Notifications</div></div>
        <div className="p-6 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
          {['Mises à jour email', 'Récap hebdo', 'Alertes campagne'].map((n, i) => (
            <label key={i} className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100">
              <input type="checkbox" defaultChecked={i!==2} />
              <span>{n}</span>
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Gestion des accès</div></div>
        <div className="p-6 space-y-3 text-sm text-slate-700">
          <div className="p-3 rounded-2xl border border-slate-100">alex@efficium.com — Admin</div>
          <div className="p-3 rounded-2xl border border-slate-100">finance@efficium.com — Viewer</div>
          <button className="h-10 px-4 rounded-2xl text-white text-sm" style={{background: colors.primary}}>Inviter un utilisateur</button>
        </div>
      </Card>
    </div>
  )
}
