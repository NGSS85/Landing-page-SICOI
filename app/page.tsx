"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Settings2, 
  Briefcase, 
  Layers, 
  FileText, 
  QrCode, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3, 
  Activity, 
  Zap,
  Cpu,
  Microscope,
  Wrench,
  FolderOpen,
  SlidersHorizontal,
  Settings,
  LogOut,
  Menu,
  Sun
} from "lucide-react";

const showcaseData = [
  {
    id: "ferramentaria",
    title: "Ferramentaria Avançada",
    desc: "Gestão completa do ciclo de vida das ferramentas, portal unificado e chão de fábrica.",
    images: [
      "/ferramentaria/portal.png",
      "/ferramentaria/dashboard.png",
      "/ferramentaria/cronograma.png",
      "/ferramentaria/agenda.png",
      "/ferramentaria/cadastro.png"
    ]
  },
  {
    id: "manutencao",
    title: "Manutenção Industrial",
    desc: "Command Center de manutenção preditiva e corretiva, OEE e formulários digitais.",
    images: [
      "/Manutenção/dashboard manutenção.png",
      "/Manutenção/ativos.png",
      "/Manutenção/cronogramas.png",
      "/Manutenção/cronograma master..png",
      "/Manutenção/formulario.png",
      "/Manutenção/metricas.png"
    ]
  },
  {
    id: "projetos",
    title: "Gestão de Projetos",
    desc: "Controle de escopo, desenvolvimento de produtos e pastas de especificações.",
    images: [
      "/Projetos/dashboard projetos.png",
      "/Projetos/pasta de projetos.png",
      "/Projetos/detalhes .png"
    ]
  }
];

export default function SicoiLandingPage() {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto-play the images of the active theme
  useEffect(() => {
    const currentTheme = showcaseData[activeThemeIndex];
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % currentTheme.images.length);
    }, 3000); // Troca a imagem a cada 3 segundos

    return () => clearInterval(timer);
  }, [activeThemeIndex]);

  // Quando o mouse passar em um novo tema
  const handleThemeHover = (idx: number) => {
    if (idx !== activeThemeIndex) {
      setActiveThemeIndex(idx);
      setActiveImageIndex(0);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 overflow-hidden font-sans">
      {/* Header / Logo */}
      <header className="absolute top-0 left-0 w-full z-50 py-8 px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Activity className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tight text-white leading-none">SICOI</span>
            <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-widest mt-1">Sistema de Controle Industrial</span>
          </div>
        </div>
      </header>

      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>A Revolução da Indústria 4.0 Chegou</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          {...fadeInUp}
        >
          Gerenciamento de setores na palma da mão - <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Eficiência e Tecnologia</span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          O <strong>Sicoi</strong> é o sistema nervoso digital da sua indústria. Transforme processos manuais e planilhas obsoletas em uma central de comando auditável, preditiva e altamente lucrativa.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2">
            Agendar Demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center group">
            <span className="flex items-center gap-2 text-base">Impacto do Sistema <BarChart3 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" /></span>
            <span className="text-xs text-cyan-400 mt-1 font-bold">+45% Eficiência &bull; -80% Paradas</span>
          </button>
        </motion.div>


      </section>

      {/* Simulador do Portal SICOI */}
      <section className="py-24 relative z-10 w-full overflow-hidden bg-[#050B14]">
        {/* Padrão de bolinhas no fundo simulando o portal */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-20">
          
          {/* Header Falso do Portal */}
          <div className="flex justify-between items-center bg-[#0A111F]/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 mb-20 shadow-xl">
            <div className="flex items-center gap-4">
              <button className="p-2 border border-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-lg flex items-center justify-center font-black text-slate-900">
                  SQ
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-white font-bold text-lg leading-tight">Sistema de Controle Industrial</span>
                  <span className="text-xs text-amber-500 font-semibold tracking-wider">INDUSTRIAL ECOSYSTEM</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-lg text-sm font-semibold hover:bg-amber-500/20 transition-colors">
                <BarChart3 className="w-4 h-4" /> ACESSO GERENCIAL
              </button>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors">
                <Settings className="w-4 h-4 text-amber-500" /> CONFIGURAÇÕES
              </button>
              <button className="p-2 border border-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                <Sun className="w-5 h-5" />
              </button>
              <button className="p-2 border border-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Título Central do Portal */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center font-black text-amber-500 text-xl shadow-[0_0_30px_rgba(245,158,11,0.15)] mb-6">
              SQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">SICOI - Sistema de Controle Industrial</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-slate-700"></div>
              <span className="text-slate-400 text-sm font-bold tracking-[0.2em]">GERENCIAMENTO E INTERAÇÃO ENTRE SETORES</span>
              <div className="h-px w-12 bg-slate-700"></div>
            </div>
          </div>

          {/* Linha de Cards Interativos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* 1. Ferramentaria */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#0A111F] border border-slate-800 rounded-xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.2)] hover:z-10 flex flex-col h-full"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.8)] group-hover:w-2 transition-all"></div>
              <div className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-amber-500/50 transition-colors">
                <Wrench className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ferramentaria</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                Acesse o painel operacional técnico, gerencie dispositivos e ferramentas com precisão industrial.
              </p>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-600 mt-auto pt-4 border-t border-slate-800/50">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div> ACESSO PROTEGIDO</span>
                <span>SICOI IND. SYSTEM</span>
              </div>
            </motion.div>

            {/* 2. Qualidade */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#0A111F] border border-slate-800 rounded-xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.2)] hover:z-10 flex flex-col h-full"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:w-2 transition-all"></div>
              <div className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-cyan-500/50 transition-colors">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualidade</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                Controle de instrumentos, relatórios dimensionais e padrões de qualidade corporativos.
              </p>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-600 mt-auto pt-4 border-t border-slate-800/50">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> ACESSO PROTEGIDO</span>
                <span>SICOI IND. SYSTEM</span>
              </div>
            </motion.div>

            {/* 3. Engenharia */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[#0A111F] border border-slate-800 rounded-xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.2)] hover:z-10 flex flex-col h-full"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] group-hover:w-2 transition-all"></div>
              <div className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Engenharia</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                Documentação técnica, fluxogramas e otimização de processos industriais avançados.
              </p>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-600 mt-auto pt-4 border-t border-slate-800/50">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> ACESSO PROTEGIDO</span>
                <span>SICOI IND. SYSTEM</span>
              </div>
            </motion.div>

            {/* 4. Projetos */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-[#0A111F] border border-slate-800 rounded-xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_-10px_rgba(244,63,94,0.2)] hover:z-10 flex flex-col h-full"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)] group-hover:w-2 transition-all"></div>
              <div className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-rose-500/50 transition-colors">
                <FolderOpen className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Projetos</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                Gestão completa de desenhos técnicos, especificações e cronogramas de desenvolvimento.
              </p>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-600 mt-auto pt-4 border-t border-slate-800/50">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> ACESSO PROTEGIDO</span>
                <span>SICOI IND. SYSTEM</span>
              </div>
            </motion.div>

            {/* 5. Manutenção Industrial */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="bg-[#0A111F] border border-slate-800 rounded-xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.2)] hover:z-10 flex flex-col h-full"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:w-2 transition-all"></div>
              <div className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
                <SlidersHorizontal className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">Manutenção Industrial</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                Gestão individualizada de ativos, preventivas semestrais e controle de estoque de peças críticas.
              </p>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-600 mt-auto pt-4 border-t border-slate-800/50">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> ACESSO PROTEGIDO</span>
                <span>SICOI IND. SYSTEM</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Preview do Sistema - Showcase Automático */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Poder na sua <span className="text-amber-400">Tela</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Passe o mouse sobre os módulos abaixo para visualizar a interface real do SICOI em ação.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-slate-900/40 p-4 md:p-8 rounded-3xl border border-slate-800 backdrop-blur-md shadow-2xl">
          {/* Tabs Navigation */}
          <div className="flex lg:flex-col gap-4 w-full lg:w-1/3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {showcaseData.map((theme, idx) => (
              <div
                key={theme.id}
                onMouseEnter={() => handleThemeHover(idx)}
                onClick={() => handleThemeHover(idx)} // Para quem estiver no mobile / touch
                className={`flex flex-col items-start p-5 rounded-xl text-left transition-all duration-300 min-w-[260px] lg:min-w-0 border-l-4 cursor-pointer ${
                  activeThemeIndex === idx 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-transparent border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                  : 'hover:bg-slate-800/50 text-slate-400 border-transparent hover:text-slate-200'
                }`}
              >
                <span className={`text-xl font-bold mb-2 ${activeThemeIndex === idx ? 'text-cyan-400' : ''}`}>{theme.title}</span>
                <span className="text-sm opacity-80 mb-4">{theme.desc}</span>
                
                {/* Progress Indicators for images */}
                {activeThemeIndex === idx && (
                  <div className="flex gap-1.5 mt-auto w-full">
                    {theme.images.map((_, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${
                          imgIdx === activeImageIndex ? 'bg-cyan-400' : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Display */}
          <div className="w-full lg:w-2/3 relative aspect-video bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl shadow-black/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeThemeIndex}-${activeImageIndex}`}
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={showcaseData[activeThemeIndex].images[activeImageIndex]} 
                  alt={showcaseData[activeThemeIndex].title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Funcionalidades Complementares */}
      <section className="py-24 bg-slate-950 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Arquitetura Tecnológica de Ponta</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tudo que sua indústria precisa em um ecossistema seguro e escalável.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: 'Multi-plataforma', desc: 'Desktop Windows robusto + PWA Mobile para operadores.', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
              { icon: FileText, title: 'Docs Universais', desc: 'Plantas técnicas e PDFs direto no tablet da máquina.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
              { icon: QrCode, title: 'ID Industrial', desc: 'Etiquetagem por QR Code de alta resistência para todo o ativo.', color: 'text-amber-400', bg: 'bg-amber-500/10' },
              { icon: ShieldCheck, title: 'Segurança RLS', desc: 'Controle de acesso rigoroso (Row-Level Security) e auditoria.', color: 'text-rose-400', bg: 'bg-rose-500/10' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:bg-slate-800/60 transition-colors"
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI e Impacto */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Resultados Reais, <br/><span className="text-amber-400">Impacto Direto no Lucro</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              A digitalização não é apenas sobre tecnologia, é sobre estancar vazamentos de capital. O Sicoi proporciona um retorno sobre o investimento visível no primeiro trimestre.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Redução de 80%', desc: 'No tempo de localização de ferramentas e ativos críticos.' },
                { title: '95% de Confiabilidade', desc: 'Na execução da manutenção preventiva programada.' },
                { title: 'Redução de 45%', desc: 'Nas paradas de máquina inesperadas.' }
              ].map((roi, idx) => (
                <li key={idx} className="flex">
                  <div className="mr-4 mt-1">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{roi.title}</h4>
                    <p className="text-slate-400">{roi.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-amber-500/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-slate-300 font-semibold">Relatório de Eficiência</span>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">AO VIVO</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'OEE Geral da Planta', val: '87.4%', w: 'w-[87%]', color: 'bg-emerald-500' },
                  { label: 'Compliance de Manutenção', val: '96.2%', w: 'w-[96%]', color: 'bg-cyan-500' },
                  { label: 'Disponibilidade de Ferramental', val: '99.1%', w: 'w-[99%]', color: 'bg-blue-500' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">{stat.label}</span>
                      <span className="text-white font-bold">{stat.val}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className={`${stat.color} h-2 rounded-full ${stat.w}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final e Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center px-6 mb-20 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para dar o passo para a Indústria 4.0?</h2>
          <p className="text-slate-400 text-xl mb-10">
            Pare de perder dinheiro com processos arcaicos. Assuma o controle total da sua produção hoje.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-lg rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.6)]">
            Solicitar Acesso Antecipado
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between border-t border-slate-800/50 pt-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Activity className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-black tracking-tight text-white">SICOI</span>
          </div>
          <div className="text-slate-500 text-sm flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contato</a>
          </div>
          <p className="text-slate-600 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Sicoi Industrial Systems. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
