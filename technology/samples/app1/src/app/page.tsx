import React from 'react';
import { Coffee, Utensils, Clock, MapPin, Instagram, Facebook, ChevronRight, Star } from 'lucide-react';

// --- Subcomponentes ---

const ProductCard = ({ title, price, description, image }: { title: string, price: string, description: string, image: string }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#eaddcf]">
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#8b5e34] font-bold shadow-sm">
        {price}
      </div>
    </div>
    <div className="p-8">
      <h3 className="font-playfair text-2xl text-[#4a3728] mb-2">{title}</h3>
      <p className="text-[#6d5c4e] leading-relaxed text-sm mb-4">{description}</p>
      <button className="text-[#8b5e34] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        Encomendar <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

export default function BakeryLandingPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#4a3728] selection:bg-[#d4a373]/30">
      
      {/* Navegação */}
      <nav className="fixed w-full z-50 bg-[#faf7f2]/80 backdrop-blur-md border-b border-[#eaddcf]">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="font-playfair text-2xl font-black text-[#634832] tracking-tight">
            PANIS<span className="text-[#d4a373]">ARTIS</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm text-[#6d5c4e]">
            <a href="#produtos" className="hover:text-[#d4a373] transition">Produtos</a>
            <a href="#sobre" className="hover:text-[#d4a373] transition">Nossa História</a>
            <a href="#contato" className="hover:text-[#d4a373] transition">Contato</a>
          </div>
          <button className="bg-[#634832] text-[#faf7f2] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#4a3728] transition-all shadow-lg shadow-brown-900/20">
            Peça Online
          </button>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-20"
              alt="Fundo padaria"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a373]/10 text-[#8b5e34] text-xs font-bold tracking-widest uppercase mb-6 border border-[#d4a373]/20">
                <Clock size={14} /> Fornada quente a cada 30 min
              </div>
              <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-[#4a3728]">
                Onde o tempo <br /> 
                <span className="text-[#d4a373] italic text-5xl md:text-7xl">vira sabor.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#6d5c4e] mb-10 max-w-lg leading-relaxed">
                Pães de fermentação natural, feitos com farinha orgânica e o carinho que só uma produção artesanal oferece.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#634832] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#4a3728] transition-all scale-105">
                  Ver Cardápio
                </button>
                <button className="border-2 border-[#634832] text-[#634832] px-8 py-4 rounded-full font-bold hover:bg-[#634832] hover:text-white transition-all">
                  Conheça a Padaria
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-[16px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop" alt="Pão Artesanal" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-[#eaddcf] animate-bounce-slow">
                  <div className="flex gap-1 text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-bold text-[#4a3728]">O melhor Sourdough da cidade!</p>
                  <p className="text-xs text-gray-500">— Cliente satisfeito</p>
               </div>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl font-bold mb-4">Nossas Delícias</h2>
            <div className="w-24 h-1 bg-[#d4a373] mx-auto mb-6"></div>
            <p className="text-[#6d5c4e]">Feitos diariamente com ingredientes selecionados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProductCard 
              title="Sourdough Tradicional"
              price="R$ 28,00"
              description="Fermentação de 48h, casca crocante e miolo aerado com sabor levemente ácido."
              image="https://images.unsplash.com/photo-1585478259715-876a6a81bc31?q=80&w=1000&auto=format&fit=crop"
            />
            <ProductCard 
              title="Croissant Francês"
              price="R$ 14,00"
              description="Laminado com manteiga pura, resultando em camadas leves e folhadas impossíveis de resistir."
              image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop"
            />
            <ProductCard 
              title="Eclair de Chocolate"
              price="R$ 18,00"
              description="Massa choux recheada com creme de chocolate belga e cobertura espelhada."
              image="https://images.unsplash.com/photo-1621236304195-06bb1d00bab8?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* SOBRE A PADARIA */}
        <section id="sobre" className="bg-[#634832] text-[#faf7f2] py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1000&auto=format&fit=crop" 
                alt="Nosso processo" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4a373] rounded-full -z-0 opacity-20 blur-2xl"></div>
            </div>
            <div>
              <h2 className="font-playfair text-5xl font-bold mb-8 italic">Tradição que se amassa à mão</h2>
              <div className="space-y-6 text-[#eaddcf] leading-relaxed">
                <p>Nossa história começou no pequeno forno da bisavó Maria, onde aprendemos que o segredo do pão perfeito não é a receita, mas a paciência.</p>
                <p>Hoje, unimos técnicas ancestrais de panificação com grãos selecionados para trazer à sua mesa um produto que respeita o tempo da natureza.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-[#d4a373] mb-2"><Utensils size={32} /></div>
                  <h4 className="font-bold text-lg">100% Artesanal</h4>
                  <p className="text-sm text-[#eaddcf]">Sem conservantes ou misturas prontas.</p>
                </div>
                <div>
                  <div className="text-[#d4a373] mb-2"><Coffee size={32} /></div>
                  <h4 className="font-bold text-lg">Grãos Nobres</h4>
                  <p className="text-sm text-[#eaddcf]">Café torrado semanalmente para você.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO E LOCALIZAÇÃO */}
        <section id="contato" className="max-w-7xl mx-auto px-8 py-32">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-[#eaddcf] flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="font-playfair text-4xl font-bold mb-6 italic text-[#634832]">Venha nos visitar</h2>
              <p className="text-[#6d5c4e] mb-10 text-lg">O cheiro de pão novo está te esperando. Confira nossos horários e localização.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#faf7f2] rounded-xl text-[#d4a373]"><MapPin /></div>
                  <div>
                    <h5 className="font-bold">Endereço</h5>
                    <p className="text-[#6d5c4e]">Rua das Farinhas, 123 - Bairro Doce, Cachoeiro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#faf7f2] rounded-xl text-[#d4a373]"><Clock /></div>
                  <div>
                    <h5 className="font-bold">Horário de Funcionamento</h5>
                    <p className="text-[#6d5c4e]">Terça a Sábado: 07:00 – 19:00</p>
                    <p className="text-[#6d5c4e]">Domingo: 08:00 – 13:00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <a href="#" className="p-4 bg-[#634832] text-white rounded-full hover:bg-[#d4a373] transition-colors"><Instagram /></a>
                <a href="#" className="p-4 bg-[#634832] text-white rounded-full hover:bg-[#d4a373] transition-colors"><Facebook /></a>
              </div>
            </div>
            
            <div className="flex-1 bg-[#faf7f2] rounded-3xl p-8 border border-[#eaddcf]">
              <h3 className="font-playfair text-2xl font-bold mb-6">Mande uma mensagem</h3>
              <form className="space-y-4 text-sm">
                <input type="text" placeholder="Seu nome" className="w-full p-4 rounded-xl border border-[#eaddcf] focus:outline-none focus:ring-2 focus:ring-[#d4a373] bg-white" />
                <input type="email" placeholder="Seu e-mail" className="w-full p-4 rounded-xl border border-[#eaddcf] focus:outline-none focus:ring-2 focus:ring-[#d4a373] bg-white" />
                <textarea placeholder="No que podemos ajudar?" rows={4} className="w-full p-4 rounded-xl border border-[#eaddcf] focus:outline-none focus:ring-2 focus:ring-[#d4a373] bg-white"></textarea>
                <button className="w-full py-4 bg-[#634832] text-white font-bold rounded-xl hover:bg-[#4a3728] transition-all">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-[#6d5c4e] border-t border-[#eaddcf]">
        <p className="font-playfair font-bold text-xl mb-2">Panis Artis</p>
        <p className="text-sm opacity-70">© 2026 Todos os direitos reservados. Feito com amor e fermento.</p>
      </footer>
    </div>
  );
}