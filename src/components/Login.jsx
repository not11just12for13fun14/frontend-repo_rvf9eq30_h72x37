import React, { Suspense, useEffect, useState } from 'react'

// Lazy-load Spline to avoid blocking first paint and prevent hard crashes on unsupported devices
const LazySpline = React.lazy(() => import('@splinetool/react-spline').then(m => ({ default: m.default })))

const colors = {
  primary: '#3F5C56',
  text: '#506366',
  accent: '#EDAE49',
  secondary: '#5B85AA'
}

function FallbackBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
  )
}

function SafeSpline() {
  const [canRender, setCanRender] = useState(false)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    // Basic feature checks for WebGL to avoid white screens on unsupported agents
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setCanRender(!!gl)
    } catch {
      setCanRender(false)
    }
  }, [])

  if (!canRender || errored) return <FallbackBackground />

  return (
    <Suspense fallback={<FallbackBackground />}>
      <LazySpline
        scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
        onLoad={() => { /* no-op */ }}
        onError={() => setErrored(true)}
        style={{ width: '100%', height: '100%' }}
      />
    </Suspense>
  )
}

export default function Login() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background (Spline or graceful fallback) */}
      <div className="absolute inset-0">
        <SafeSpline />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      {/* Foreground content */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white/85 backdrop-blur-xl border border-slate-100 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{background: colors.primary}}>
                  <span className="text-white font-semibold">E</span>
                </div>
                <div className="text-left">
                  <div className="text-slate-900 font-semibold">Efficium</div>
                  <div className="text-xs text-slate-400">Axis Pulse</div>
                </div>
              </div>
              <h1 className="text-xl font-semibold tracking-tight text-slate-900">Connectez-vous</h1>
              <p className="text-sm text-slate-500 mt-1">Votre système de croissance, orchestré avec précision.</p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" placeholder="prenom@entreprise.com" className="w-full h-11 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200/70 transition" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-slate-600">Mot de passe</label>
                <input type="password" placeholder="••••••••" className="w-full h-11 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200/70 transition" />
              </div>
              <button type="button" className="w-full h-11 rounded-2xl text-white font-medium shadow-[0_10px_30px_rgba(237,174,73,0.3)] transition hover:opacity-95" style={{background: colors.accent}}>Se connecter</button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400">ou</span></div>
              </div>
              <button type="button" className="w-full h-11 rounded-2xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition flex items-center justify-center gap-2">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Continuer avec Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
