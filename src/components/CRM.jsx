import React, { useState } from 'react'

const colors = {
  primary: '#3F5C56',
  text: '#506366',
  accent: '#EDAE49',
  secondary: '#5B85AA'
}

function Card({ children, className='' }) {
  return <div className={`bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}>{children}</div>
}

const initialLeads = [
  { id: 1, name: 'Camille Durand', email: 'camille@example.com', phone: '+33 6 12 34 56 78', source: 'Meta', stage: 'New', notes: 'Intéressée par l’offre croissance.' },
  { id: 2, name: 'Marc Petit', email: 'marc@example.com', phone: '+33 6 23 45 67 89', source: 'Google', stage: 'Contacted', notes: 'Appel prévu vendredi.' },
  { id: 3, name: 'Inès Robert', email: 'ines@example.com', phone: '+33 6 98 76 54 32', source: 'Other', stage: 'Qualified', notes: 'Budget validé, attendre Q1.' },
]

export default function CRM() {
  const [leads, setLeads] = useState(initialLeads)
  const [selected, setSelected] = useState(leads[0])

  function addLead() {
    const id = leads.length + 1
    const newLead = { id, name: 'Nouveau Lead', email: 'new@example.com', phone: '+33 ...', source: 'Other', stage: 'New', notes: '' }
    setLeads([newLead, ...leads])
    setSelected(newLead)
  }

  function updateStage(stage) {
    setLeads(leads.map(l => l.id === selected.id ? { ...l, stage } : l))
    setSelected({ ...selected, stage })
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-2 overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-slate-100">
          <div className="font-semibold text-slate-800">Leads</div>
          <button onClick={addLead} className="h-10 px-4 rounded-2xl text-white text-sm" style={{background: colors.primary}}>Add new lead</button>
        </div>
        <div className="overflow-x-auto p-5">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Source</th>
                <th className="py-2">Stage</th>
                <th className="py-2">Notes</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {leads.map(l => (
                <tr key={l.id} className={`border-t border-slate-100 cursor-pointer hover:bg-slate-50 ${selected?.id===l.id?'bg-slate-50/80':''}`} onClick={() => setSelected(l)}>
                  <td className="py-3">{l.name}</td>
                  <td className="py-3">{l.email}</td>
                  <td className="py-3">{l.phone}</td>
                  <td className="py-3">{l.source}</td>
                  <td className="py-3">{l.stage}</td>
                  <td className="py-3">{l.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Lead details</div></div>
        <div className="p-5 space-y-4 text-sm text-slate-700">
          {selected ? (
            <>
              <div>
                <div className="text-slate-400 text-xs uppercase">Contact</div>
                <div className="mt-1">{selected.name}</div>
                <div className="text-slate-500">{selected.email}</div>
                <div className="text-slate-500">{selected.phone}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase">Source</div>
                <div className="mt-1">{selected.source}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase">Timeline</div>
                <ul className="mt-2 space-y-2">
                  <li className="p-3 rounded-2xl border border-slate-100">Lead created</li>
                  <li className="p-3 rounded-2xl border border-slate-100">Initial touchpoint</li>
                </ul>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase">Notes</div>
                <div className="mt-1">{selected.notes || '—'}</div>
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={() => updateStage('Contacted')} className="h-9 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs hover:bg-slate-50">Mark contacted</button>
                <button onClick={() => updateStage('Qualified')} className="h-9 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs hover:bg-slate-50">Mark qualified</button>
              </div>
            </>
          ) : (
            <div className="text-slate-400">Select a lead to view details</div>
          )}
        </div>
      </Card>
    </div>
  )
}
