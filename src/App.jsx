import React, { useState } from 'react';
import { useGithub } from './hooks/useGithub';
import { useRepoStore } from './store/useRepoStore';
import { 
  Github, ExternalLink, Code2, Mail, Layout, 
  Database, ShieldCheck, Zap, Monitor, Server, Smartphone 
} from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const { fetchRepos, error } = useGithub();
  const { repos, loading } = useRepoStore();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRepos(username);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* NAVEGACIÓN SIMPLE */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DevPortfolio
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#deepdive" className="hover:text-white transition-colors">Reto Técnico</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - MARCA PROFESIONAL */}
      <header id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
              Full Stack Developer
            </span>
            <h1 className="text-6xl font-extrabold text-white tracking-tight">
              Construyendo <br />
              <span className="text-blue-500">soluciones</span> robustas.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Estudiante de DAM con mentalidad de producto. Especializado en ecosistemas 
              <span className="text-white"> Java/Spring</span> y arquitecturas modernas en 
              <span className="text-white"> Angular & React</span>. 
              Enfoque en código limpio y seguridad.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <Server size={18} className="text-green-400" /> <span>Spring Boot / JWT</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <Zap size={18} className="text-yellow-400" /> <span>Angular Signals</span>
              </div>
            </div>
          </div>
          <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl rotate-3 flex items-center justify-center shadow-2xl shadow-blue-500/20">
             <Code2 size={100} className="text-white -rotate-3" />
          </div>
        </div>
      </header>

      {/* PROYECTOS DESTACADOS */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Layout className="text-blue-500" /> Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Proyecto CRM Premium */}
            <div className="group p-8 bg-slate-800/40 border border-slate-700 rounded-2xl hover:border-blue-500 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500">2024 - Presente</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">CRM Full Stack & Security</h3>
              <p className="text-slate-400 mb-6 italic">
                Arquitectura robusta con Backend en Spring Boot y gestión de estado reactiva en Frontend mediante Angular Signals.
              </p>
              <ul className="text-sm text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">🔹 Autenticación JWT y Spring Security.</li>
                <li className="flex items-center gap-2">🔹 Optimización de rendimiento con Signals.</li>
                <li className="flex items-center gap-2">🔹 API REST documentada y escalable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE - EL RETO TÉCNICO REACT */}
      <section id="deepdive" className="py-24 max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-10 shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Deep Dive Técnico</h2>
            <p className="text-slate-400 mb-10 max-w-2xl">
              Este Showcase está construido en <span className="text-blue-400 font-bold text-xl px-1">React</span>. 
              Para el reclutador: aquí demuestro mi capacidad para implementar **Custom Hooks**, **Zustand** para estado global y **Tailwind v4**.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-12">
              <input
                type="text"
                placeholder="Busca un usuario en GitHub (ej: google)..."
                className="flex-1 p-4 rounded-xl bg-slate-950 border border-slate-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                Analizar Código <Zap size={18} />
              </button>
            </form>

            {loading && <div className="text-center py-10 text-blue-400 animate-pulse">Consultando API de GitHub...</div>}
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map(repo => (
                <div key={repo.id} className="p-5 bg-slate-950/50 rounded-xl border border-slate-800 hover:scale-[1.02] transition-all group">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-blue-400 truncate">{repo.name}</h4>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-white" />
                  </div>
                  <p className="text-xs text-slate-500 mb-4 h-8 line-clamp-2">{repo.description || "Repositorio público de desarrollo."}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-slate-400">{repo.language || 'Code'}</span>
                    <span className="text-blue-500">⭐ {repo.stargazers_count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="py-20 text-center border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8">¿Listo para el siguiente nivel?</h2>
        <div className="flex justify-center gap-6">
          <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-all group">
            <Github className="text-slate-400 group-hover:text-white" />
          </a>
          <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-all group">
            <Mail className="text-slate-400 group-hover:text-white" />
          </a>
        </div>
        <p className="mt-10 text-slate-500 text-sm">
          © 2026 - Desarrollado bajo estándares de la Feria de Empleo.
        </p>
      </footer>
    </div>
  );
}

export default App;