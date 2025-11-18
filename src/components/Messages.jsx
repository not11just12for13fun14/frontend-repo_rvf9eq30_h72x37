import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, SendHorizonal } from 'lucide-react'

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

const conversations = [
  { id: 1, name: 'Efficium Team', last: 'Next steps for Q4 plan', messages: [
    { from: 'Efficium', text: 'Bonjour, voici les prochaines étapes pour Q4.' },
    { from: 'You', text: 'Parfait, merci.' }
  ]},
  { id: 2, name: 'Finance', last: 'Invoice confirmation', messages: [
    { from: 'Finance', text: 'Facture envoyée hier.' }
  ]}
]

export default function Messages() {
  const [selected, setSelected] = useState(conversations[0])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    selected.messages.push({ from: 'You', text: input })
    setSelected({ ...selected })
    setInput('')
  }

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-slate-400"/> Messages</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card>
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Conversations</div></div>
          <div className="p-3">
            {conversations.map(c => (
              <button key={c.id} onClick={() => setSelected(c)} className={`w-full text-left p-3 rounded-2xl hover:bg-slate-50 transition ${selected.id===c.id?'bg-slate-50/80':''}`}>
                <div className="text-sm text-slate-800">{c.name}</div>
                <div className="text-xs text-slate-400 truncate">{c.last}</div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">{selected.name}</div></div>
          <div className="p-5 space-y-3">
            {selected.messages.map((m, i) => (
              <motion.div key={i} initial={{opacity: 0, y: 6}} animate={{opacity: 1, y: 0}} transition={{duration: 0.15}} className={`max-w-[80%] p-3 rounded-2xl border ${m.from==='You'?'ml-auto bg-slate-50 border-slate-100':'bg-white border-slate-100'}`}>
                <div className="text-[11px] text-slate-400 mb-1">{m.from}</div>
                <div className="text-sm text-slate-700">{m.text}</div>
              </motion.div>
            ))}
          </div>
          <div className="p-5 border-t border-slate-100 flex items-center gap-3">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Écrire un message" className="flex-1 h-11 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-200/70" />
            <button onClick={send} className="h-11 px-4 rounded-2xl text-white text-sm inline-flex items-center gap-2" style={{background: colors.primary}}>
              <SendHorizonal className="w-4 h-4"/> Envoyer
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
