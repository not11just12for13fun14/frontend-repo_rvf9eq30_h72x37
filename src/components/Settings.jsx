import React from 'react'

function Card({ children, className='' }) {
  return <div className={`bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}>{children}</div>
}

export default function Settings() {
  return (
    <div className="space-y-8">
      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">User profile</div></div>
        <div className="p-6 grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">First name</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="Alex" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Last name</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="Martin" />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm text-slate-600">Email</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200 w-full" defaultValue="alex@efficium.com" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Company</div></div>
        <div className="p-6 grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Company name</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="Efficium" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-slate-600">Website</label>
            <input className="h-11 px-4 rounded-2xl border border-slate-200" defaultValue="efficium.com" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Notifications</div></div>
        <div className="p-6 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
          {['Email updates', 'Weekly digest', 'Campaign alerts'].map((n, i) => (
            <label key={i} className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100">
              <input type="checkbox" defaultChecked={i!==2} />
              <span>{n}</span>
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <div className="p-5 border-b border-slate-100"><div className="font-semibold text-slate-800">Access management</div></div>
        <div className="p-6 space-y-3 text-sm text-slate-700">
          <div className="p-3 rounded-2xl border border-slate-100">alex@efficium.com — Admin</div>
          <div className="p-3 rounded-2xl border border-slate-100">finance@efficium.com — Viewer</div>
          <button className="h-10 px-4 rounded-2xl text-white text-sm bg-slate-900">Invite user</button>
        </div>
      </Card>
    </div>
  )
}
