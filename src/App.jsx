import React, { useState } from 'react';
import { useGithub } from './hooks/useGithub';
import { useRepoStore } from './store/useRepoStore';
import { 
  Github, Mail, Download, ExternalLink, Code2, Layout, 
  Database, ShieldCheck, Zap, Server, Terminal, Shield, Cpu
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
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* HEADER SIMPLIFICADO - MÁXIMO ESPACIO EN MÓVIL */}
      <div className="max-w-6xl mx-auto px-6 pt-8 flex justify-between items-center">
        <span className="text-sm font-mono text-blue-500 tracking-tighter">&lt;grillete.dev /&gt;</span>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent ml-4 opacity-20"></div>
      </div>

      {/* SECCIÓN PRINCIPAL: IDENTIDAD Y FILOSOFÍA */}
      <header className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              HOLA, SOY <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                GUILLERMO SÁNCHEZ.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
              Desarrollador Full Stack enfocado en la construcción de sistemas 
              <span className="text-white font-medium"> seguros, reactivos y escalables</span>. 
              Especialista en entornos Java y arquitecturas modernas de Frontend.
            </p>
          </div>

          {/* FILOSOFÍA DE CÓDIGO - EL VALOR DIFERENCIAL */}
          <div className="grid md:grid-cols-2 gap-6 py-8">
            <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
              <Shield className="text-blue-400 shrink-0" size={32} />
              <div>
                <h3 className="text-white font-bold">Seguridad por Diseño</h3>
                <p className="text-sm text-slate-500">Experiencia implementando Spring Security y JWT para proteger la integridad de los datos.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
              <Cpu className="text-cyan-400 shrink-0" size={32} />
              <div>
                <h3 className="text-white font-bold">Reactividad Eficiente</h3>
                <p className="text-sm text-slate-500">Dominio de Angular Signals y Zustand para una gestión de estado óptima y moderna.</p>
              </div>
            </div>
          </div>

          {/* TECH STACK (COHESIVO) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Server className="text-green-400" />, title: "Spring Boot", sub: "Java / JWT" },
              { icon: <Zap className="text-yellow-400" />, title: "Angular", sub: "Signals / RXJS" },
              { icon: <Terminal className="text-blue-400" />, title: "Python", sub: "Automation" },
              { icon: <Code2 className="text-cyan-400" />, title: "React", sub: "Zustand / Hooks" }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <span className="text-sm font-bold text-white">{tech.title}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{tech.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* PROYECTOS */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Layout className="text-blue-500" /> Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 italic">Full Stack Project</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">CRM Enterprise Solution</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Desarrollo completo de un sistema CRM. Backend robusto con Java/Spring Security (JWT) 
                y Frontend reactivo optimizado con Angular Signals.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] rounded-lg border border-slate-700">JAVA</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] rounded-lg border border-slate-700">ANGULAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE TÉCNICO */}
      <section id="deepdive" className="py-24 max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 italic">Deep Dive Técnico</h2>
            <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Módulo desarrollado en <strong>React</strong> para demostrar la gestión de estado asíncrono. 
              Utiliza <strong>Zustand</strong> para el almacenamiento global y <strong>Custom Hooks</strong> para la lógica de API.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-12">
              <input
                type="text"
                placeholder="Analizar usuario de GitHub..."
                className="flex-1 p-4 rounded-2xl bg-slate-950/50 border border-white/10 text-white focus:border-blue-500 transition-all outline-none backdrop-blur-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/30">
                Analizar Código
              </button>
            </form>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map(repo => (
                <div key={repo.id} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                  <h4 className="font-bold text-blue-400 truncate mb-2">{repo.name}</h4>
                  <div className="flex items-center justify-between mt-4 text-[10px] font-bold text-slate-500">
                    <span className="bg-slate-800 px-2 py-1 rounded">{repo.language || 'DATA'}</span>
                    <span className="text-blue-400">★ {repo.stargazers_count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACTO */}
      <footer className="py-20 text-center border-t border-slate-800 bg-[#0b1222]">
        <h2 className="text-3xl font-bold text-white mb-10">¿Hablamos?</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="/docs/Ficha_Tecnica_Showcase_Frontend_Profesional.pdf" 
            download 
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20"
          >
            <Download size={20} /> Ficha Técnica (QR)
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/grilletee" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 transition-all">
              <Github className="text-slate-400 hover:text-white" />
            </a>
            <a href="mailto:grillete07@gmail.com" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 transition-all">
              <Mail className="text-slate-400 hover:text-white" />
            </a>
          </div>
        </div>
        <p className="mt-12 text-slate-600 text-xs">
          © 2026 | Desarrollado con React + Tailwind v4
        </p>
      </footer>
    </div>
  );
}

export default App;