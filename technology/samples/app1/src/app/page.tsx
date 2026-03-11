import React from 'react';
import { Flame, Sword, Skull, Gem, ShieldAlert, Zap } from 'lucide-react';

// --- Subcomponentes para organização ---

// Card de Feature com temática sombria e borda rúnica
const ClassCard = ({ icon: Icon, title, description, bgImage }: { icon: any, title: string, description: string, bgImage: string }) => (
  <div className="group relative overflow-hidden rounded-lg border border-red-950/50 bg-[#0d0d0d] transition-all duration-500 hover:border-red-600/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/20">
    {/* Imagem de fundo sutil no hover */}
    <div 
      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    
    <div className="relative p-8 z-10">
      <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-red-950 bg-[#0a0a0a] text-red-500 mb-6 group-hover:scale-110 group-hover:border-red-700/50 group-hover:shadow-lg group-hover:shadow-red-900/50 transition-all duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-cinzel text-2xl font-bold mb-3 tracking-wider text-gray-100 group-hover:text-red-400 transition-colors">{title}</h3>
      <p className="font-inter text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
    
    {/* Efeito de brilho rúnico na borda inferior */}
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

// Botão Primário Estilo "Sangue e Ouro"
const DiabloButtonPrimary = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <button className="relative px-8 py-4 font-cinzel font-bold text-lg tracking-widest text-yellow-100 overflow-hidden group transition-all duration-300 bg-gradient-to-b from-red-700 via-red-950 to-red-700 hover:from-red-600 hover:via-red-900 hover:to-red-600 shadow-lg shadow-black/50 border border-yellow-600/20">
    {/* Brilho interno */}
    <span className="absolute inset-0 w-full h-full bg-black/30 group-hover:bg-transparent transition-colors"></span>
    {/* Borda decorativa */}
    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-400"></span>
    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-400"></span>
    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-yellow-400"></span>
    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-400"></span>
    
    <span className="relative z-10 flex items-center justify-center gap-3">
      {Icon && <Icon size={20} className="text-yellow-200" />}
      {children}
    </span>
  </button>
);

// Botão Secundário Estilo "Ferro Velho"
const DiabloButtonSecondary = ({ children }: { children: React.ReactNode }) => (
  <button className="relative px-8 py-4 font-cinzel font-bold text-lg tracking-widest text-gray-300 overflow-hidden group transition-all duration-300 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 hover:border-gray-500 shadow-md shadow-black/50">
     <span className="relative z-10 flex items-center justify-center gap-3">
      {children}
    </span>
  </button>
);


export default function DiabloLandingPage() {
  return (
    // Fundo preto profundo com textura de ruído sutil
    <div className="min-h-screen bg-[#050505] text-gray-300 font-inter selection:bg-red-900/50 overflow-x-hidden">
      
      {/* OVERLAY DE NÉVOA/FUMAÇA (Efeito imersivo) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-dotted-2.png')] opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-full h-full bg-red-950/10 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-full h-full bg-black blur-[150px]"></div>
      </div>

      {/* Navegação Gótica Minimalista */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-red-950/30 bg-[#050505]/80 backdrop-blur-sm">
        <div className="font-cinzel text-3xl font-bold tracking-tighter bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-100 bg-clip-text text-transparent hover:from-white hover:to-white transition transition-all duration-500 hover:scale-105 cursor-pointer">
          DIABLO<span className="font-light text-red-600">IMMORTAL</span>
        </div>
        <div className="hidden md:flex gap-8 font-cinzel text-sm font-medium tracking-widest text-gray-400">
          <a href="#" className="hover:text-red-400 transition">Classes</a>
          <a href="#" className="hover:text-red-400 transition">Mundo</a>
          <a href="#" className="hover:text-red-400 transition">Atualizações</a>
        </div>
        <button className="font-cinzel font-bold text-sm tracking-widest px-6 py-2 border-2 border-yellow-700 text-yellow-200 bg-transparent hover:bg-yellow-700/20 transition group relative overflow-hidden">
           Jogue Agora
           <span className="absolute inset-0 w-1/2 h-full bg-white/5 skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-500"></span>
        </button>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION - O Portal para o Inferno */}
        <section className="relative pt-24 pb-40 overflow-hidden border-b-4 border-black shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          {/* Imagem de Fundo Hero (Sombria) */}
          <div className="absolute inset-0 -z-10 bg-black">
            <img 
              src="https://images.blizzard.com/diabloimmortal/variants/wallpapers/wallpapers-skarn-thumnail.jpg" 
              alt="Skarn, o Arauto do Terror" 
              className="w-full h-full object-cover object-center opacity-30 blur-[2px]"
            />
            {/* Gradiente para misturar com o fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 text-center relative">
            {/* Distintivo Rúnico */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-red-700 bg-black/80 text-red-300 font-cinzel text-xs font-bold tracking-widest mb-10 shadow-lg shadow-red-950/50">
              <Skull size={14} className="text-red-500 animate-pulse" />
            
              Sample App1: Sanctuary Edition
            </div>
            
            <h1 className="font-cinzel text-6xl md:text-8xl font-bold tracking-tight mb-10 leading-none">
              <span className="block text-gray-100 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Enfrente o</span>
              <span className="block bg-gradient-to-b from-red-500 via-red-800 to-black bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(255,0,0,0.5)]">
                Terror Ancestral
              </span>
            </h1>
            
            <p className="font-inter max-w-3xl mx-auto text-xl text-gray-400 mb-16 leading-relaxed drop-shadow-md">
              A Pedra do Mundo foi estilhaçada. Skarn, o Senhor da Condenação, busca os fragmentos para ressuscitar Diablo. O destino de Sanctuary está nas suas mãos, Nephalem. Prepare-se para o combate no seu App1.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <DiabloButtonPrimary icon={Flame}>
                Crie seu Herói
              </DiabloButtonPrimary>
              <DiabloButtonSecondary>
                Explore a Lore
              </DiabloButtonSecondary>
            </div>
          </div>
        </section>

        {/* CLASSES/FEATURES GRID - O Caminho do Guerreiro */}
        <section className="relative max-w-7xl mx-auto px-8 py-32">
          {/* Título da Seção Gótica */}
          <div className="text-center mb-20 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-60 h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent"></div>
            <h2 className="font-cinzel text-5xl font-bold tracking-widest text-gray-100 pt-8 mb-4">Escolha seu Destino</h2>
            <p className="font-inter text-gray-500 text-lg">Seis classes icônicas. Uma batalha sem fim.</p>
             <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-60 h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <ClassCard 
              icon={Sword}
              title="Bárbaro"
              description="Um guerreiro feroz que domina o combate corpo a corpo com força bruta e fúria incontrolável."
              bgImage="https://images.blizzard.com/diabloimmortal/variants/home/classes/barbarian-concept.jpg"
            />
            <ClassCard 
              icon={Zap}
              title="Arcanista"
              description="Manipula as forças arcanas para conjurar feitiços devastadores de longo alcance, controlando o tempo e o espaço."
              bgImage="https://images.blizzard.com/diabloimmortal/variants/home/classes/wizard-concept.jpg"
            />
            <ClassCard 
              icon={ShieldAlert}
              title="Cruzado"
              description="Um guerreiro sagrado blindado que usa a fé como arma e escudo, liderando a investida contra o mal."
              bgImage="https://images.blizzard.com/diabloimmortal/variants/home/classes/crusader-concept.jpg"
            />
            <ClassCard 
              icon={Skull}
              title="Necromante"
              description="Mestre sobre a vida e a morte, evoca exércitos de mortos-vivos e usa magias de sangue e osso."
              bgImage="https://images.blizzard.com/diabloimmortal/variants/home/classes/necromancer-concept.jpg"
            />
            <ClassCard 
              icon={Flame}
              title="Caçador de Demônios"
              description="Um vingador implacável que usa bestas e dispositivos táticos para eliminar demônios à distância."
              bgImage="https://images.blizzard.com/diabloimmortal/variants/home/classes/demon-hunter-concept.jpg"
            />
            <ClassCard 
              icon={Gem}
              title="Monge"
              description="Um guerreiro ágil que canaliza a energia divina em golpes rápidos e artes marciais letais."
              bgImage="https://images.blizzard.com/diabloimmortal/variants/home/classes/monk-concept.jpg"
            />
          </div>
        </section>

        {/* CTA FINAL - O Chamado das Sombras */}
        <section className="relative py-40 border-t-4 border-black bg-[#080808]">
           {/* Imagem de Fundo Final */}
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.blizzard.com/diabloimmortal/variants/home/bg-di-map.jpg" 
              alt="Mapa de Sanctuary" 
              className="w-full h-full object-cover object-center opacity-20 blur-[1px]"
            />
             <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
          </div>

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <div className="relative p-16 rounded-xl border-2 border-red-950/70 bg-[#0a0a0a]/90 backdrop-blur-sm shadow-[0_0_60px_rgba(130,0,0,0.3)]">
                {/* Efeito Rúnico de Canto */}
                <span className="absolute -top-4 -left-4 text-4xl text-red-900 opacity-60">ᛦ</span>
                <span className="absolute -top-4 -right-4 text-4xl text-red-900 opacity-60">ᚱ</span>
                <span className="absolute -bottom-4 -left-4 text-4xl text-red-900 opacity-60">ᚻ</span>
                <span className="absolute -bottom-4 -right-4 text-4xl text-red-900 opacity-60">ᛥ</span>

              <h2 className="font-cinzel text-5xl font-bold tracking-widest mb-8 text-gray-100 drop-shadow-[0_2px_5px_rgba(255,0,0,0.4)]">
                Sanctuary clama por você
              </h2>
              <p className="font-inter text-gray-400 mb-12 text-xl leading-relaxed">
                A batalha entre o Paraíso Celestial e o Inferno Ardente continua. Não deixe que as trevas consumam tudo. Atualize o arquivo <code className="font-mono bg-red-950/50 text-red-200 px-2 py-1 rounded border border-red-900">src/app/page.tsx</code> e comece sua jornada.
              </p>
              <DiabloButtonPrimary icon={Sword}>
                Baixe o Cliente App1
              </DiabloButtonPrimary>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Profundo */}
      <footer className="relative z-10 py-16 border-t border-red-950/30 bg-[#030303] text-center text-gray-600 font-inter text-sm">
        <div className="font-cinzel text-xl font-bold tracking-widest text-gray-500 mb-4">DIABLO IMMORTAL LAB</div>
        <p>&copy; 2026 App1. Este é um projeto de estudo sample.</p>
        <p className="mt-2 text-xs">Diablo Immortal e Blizzard Entertainment são marcas registradas.</p>
        <div className="mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-red-950 to-transparent mx-auto"></div>
      </footer>
    </div>
  );
}