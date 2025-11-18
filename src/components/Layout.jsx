import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Home, Users, BarChart2, FileText, MessageSquare, Settings, LogOut } from 'lucide-react'

const colors = {
  primary: '#3F5C56',
  text: '#506366',
  accent: '#EDAE49',
  secondary: '#5B85AA'
}

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: Home },
  { to: '/crm', label: 'CRM', icon: Users },
  { to: '/reports', label: 'Reports', icon: BarChart2 },
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/messages', label: 'Messages', icon: MessageSquare },
  { to: '/settings', label: 'Settings', icon: Settings }
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <div className="flex">
        <aside className="hidden md:flex md:flex-col w-72 min-h-screen border-r border-slate-100/80 bg-white/70 backdrop-blur-sm">
          <div className="px-6 pt-8 pb-6 border-b border-slate-100/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background: colors.primary}}>
                <span className="text-white font-semibold">A</span>
              </div>
              <div>
                <div className="text-slate-900 font-semibold tracking-tight">Axis Pulse</div>
                <div className="text-xs text-slate-400">by Efficium</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `group flex items-center gap-3 px-3 py-2 rounded-2xl transition-all ${isActive ? 'bg-slate-50 text-slate-900 shadow-sm' : 'hover:bg-slate-50 text-slate-500'}`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="px-4 pb-6">
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition">
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sign out</span>
            </button>
          </div>
        </aside>
        <main className="flex-1 min-h-screen">
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center" style={{background: colors.primary}}>
                  <span className="text-white font-semibold text-sm">A</span>
                </div>
                <h1 className="text-sm sm:text-base font-semibold tracking-tight text-slate-800">Axis Pulse</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full" style={{background: colors.accent}}></span>
                  <span>Premium Client Portal</span>
                </div>
              </div>
            </div>
          </header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
