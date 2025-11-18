import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CRM from './components/CRM'
import Reports from './components/Reports'
import Documents from './components/Documents'
import Messages from './components/Messages'
import Settings from './components/Settings'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-slate-500">Page not found</div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
