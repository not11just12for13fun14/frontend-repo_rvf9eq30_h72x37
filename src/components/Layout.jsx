import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Home, Users, BarChart2, FileText, MessageSquare, Settings, LogOut, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const colors = {
  primary: '#2563eb', // blue-600
  text: '#0f172a',
  accent: '#f59e0b', // amber-500
  secondary: '#22d3ee' // cyan-400
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
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-700">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:flex-col w-72 min-h-screen border-r border-slate-100/80 bg-white/70 backdrop-blur-sm">
          <div className="px-6 pt-8 pb-6 border-b border-slate-100/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm" style={{background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`}}>
                <span className="text-white font-semibold">A</span>
              </div>
              <div>
                <div className="text-slate-900 font-semibold tracking-tight">Axis Pulse</div>
                <div className="text-xs text-slate-400">by Efficium</div>
              </div>
            </div>
          </div>
          <nav className="relative flex-1 px-3 py-4 space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `relative group flex items-center gap-3 px-3 py-2 rounded-2xl transition-all ${isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                end
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: 'linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.03))',
                          border: '1px solid rgba(226,232,240,0.9)'
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                    <Icon className="w-5 h-5 relative z-10" />
                    <span className="text-sm font-medium relative z-10">{label}</span>
                  </>
                )}
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

        {/* Main */}
        <main className="flex-1 min-h-screen">
          {/* Top bar */}
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center" style={{background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`}}>
                  <Menu className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-sm sm:text-base font-semibold tracking-tight text-slate-800">Axis Pulse</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-600 bg-white/60">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{background: colors.accent}}></span>
                  <span>Premium Client Portal</span>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
