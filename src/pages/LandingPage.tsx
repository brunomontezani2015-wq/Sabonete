import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Star, 
  Gift, 
  ChevronDown, 
  ChevronUp, 
  Zap,
  BookOpen,
  Wallet,
  Clock,
  Palette,
  TrendingUp,
  Lightbulb,
  FlaskConical,
  Sparkles,
  Heart,
  Camera,
  Layers,
  Crown,
  ArrowRight,
  Lock,
  PlayCircle,
  ShieldCheck,
  Hourglass,
  Eye,
  Move3d,
  X
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl mb-4 overflow-hidden bg-white">
      <button 
        className="flex w-full justify-between items-center text-left p-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-gray-500 shrink-0" /> : <ChevronDown className="text-gray-500 shrink-0" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="px-5 pb-5 text-gray-600"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-800 selection:bg-purple-200 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <img 
              src="https://i.postimg.cc/sgGS0V3T/Sabonetes_artesanais_com_bolhas_de_sabão.png" 
              alt="Sabonetes Artesanais" 
              className="h-32 sm:h-48 md:h-60 max-w-full object-contain mb-6" 
              referrerPolicy="no-referrer" 
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl">
              +300 Receitas de Sabonetes Para <span className="text-purple-600">Criar, Encantar</span> e <span className="text-green-500">Lucrar</span> em Casa
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Aprenda um método simples para transformar ingredientes básicos em peças criativas, delicadas e vendáveis — mesmo começando do zero.
            </p>

            {/* Mockup Image */}
            <div className="w-full max-w-3xl mx-auto mb-10 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/g2Nv45Y5/Chat-GPT-Image-27-de-mar-de-2026-04-24-27-(1).webp" 
                alt="Mockup Sabonetes Artesanais" 
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <a href="#planos" className="w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-black text-xl shadow-xl shadow-purple-600/30 transition-all transform hover:scale-105 mb-6 inline-flex items-center justify-center gap-3">
              QUERO VER A OFERTA
            </a>
          </motion.div>
        </div>
      </header>

      {/* 2. SOMENTE HOJE VOCÊ RECEBE */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-10">
            ✨ SOMENTE HOJE VOCÊ <span className="text-purple-600">RECEBE</span>
          </h2>
          
          <div className="space-y-4 mb-10">
            {[
              "+70 Aulas em vídeos passo a passo",
              "+300 Modelos de sabonetes, diversas flores, formatos, lembrancinhas",
              "Modelos de embalagens, personalizados, e muito mais!",
              "Como vender sua primeira peça em 24 horas",
              "Suporte individual",
              "Grupo de alunas",
              "Certificado de conclusão"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="mt-0.5 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                  <Check size={20} strokeWidth={3} />
                </div>
                <p className="font-bold text-gray-800 text-base sm:text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-3xl p-8 text-center">
            <Gift className="text-purple-600 w-12 h-12 mx-auto mb-4" />
            <p className="text-xl font-black text-gray-900 mb-6">
              🎁 Os 30 primeiros ganharam de brinde +50 Receitas Exclusivas
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-gray-600 font-medium">
              <span className="font-bold text-purple-600">21</span> pessoas já garantiram — restam apenas <span className="font-bold text-red-500">9 vagas</span>!
            </p>
          </div>
        </div>
      </section>

      {/* 3. POR QUE ESSE MATERIAL FAZ TANTO SENTIDO? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Por Que Esse Material Faz Tanto <span className="text-purple-600">Sentido?</span></h2>
            <p className="text-lg text-gray-600 font-medium">Motivos reais para dar o primeiro passo com confiança.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Lightbulb, title: "Sem Experiência Necessária", desc: "Criado para quem nunca fez nada parecido e quer aprender do zero." },
              { icon: Eye, title: "Explicações Simples e Claras", desc: "Linguagem acessível que facilita cada etapa do processo." },
              { icon: Wallet, title: "Comece com Pouco Investimento", desc: "Os materiais iniciais são acessíveis e fáceis de encontrar." },
              { icon: Zap, title: "Resultados em Pouco Tempo", desc: "Crie peças bonitas e encantadoras rapidamente." },
              { icon: Layers, title: "Vários Modelos em Um Só Material", desc: "Diversidade de peças para explorar e criar." },
              { icon: TrendingUp, title: "Potencial Para Renda Extra", desc: "Use o que aprender para vender e gerar uma nova fonte de renda." },
              { icon: Clock, title: "Economize Tempo com Método", desc: "Conteúdo organizado que evita tentativa e erro." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 bg-[#f8f9fa] p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-purple-100 p-3 rounded-xl text-purple-600 shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METODO 3 PASSOS */}
      <section className="py-20 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-10">
            Mas Precisa ter habilidade ou ser <span className="text-[#b68bd1]">especialista?</span>
          </h3>
          
          <img 
            src="https://i.postimg.cc/4y2YpCvK/Chat-GPT-Image-27-de-mar-de-2026-04-30-11-(1).webp" 
            alt="Passo a passo" 
            className="w-full max-w-3xl mx-auto mb-10 rounded-3xl object-contain"
            referrerPolicy="no-referrer"
          />
          
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <span className="text-3xl md:text-4xl font-black text-gray-800">A resposta é</span>
            <span className="text-3xl md:text-4xl font-black bg-[#ef4444] text-white px-4 py-1 rounded-lg">NÃO!</span>
          </div>
          
          <div className="text-gray-600 text-lg md:text-xl space-y-6 max-w-2xl mx-auto">
            <p>
              Com o <strong className="text-gray-800">Método 3 Passos</strong>, você aprende a criar todas as<br className="hidden md:block" /> peças utilizando 3 passos simples.
            </p>
            
            <p className="font-bold text-gray-800">
              Derreter &gt; Misturar &gt; Moldar.
            </p>
            
            <p>
              Cada peça segue o mesmo padrão. Basta seguir o <strong className="text-gray-800">passo a passo</strong>.
            </p>
            
            <p>
              Se você consegue mexer uma panela, você já consegue fazer<br className="hidden md:block" /> <strong className="text-gray-800">Sabonetes Artesanais</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BONUS ESPECIAIS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Bônus Especiais <span className="text-purple-600">Inclusos</span></h2>
            <p className="text-lg text-gray-600 font-medium">Conteúdos extras pensados para acelerar seus resultados.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "Exclusivo", icon: Heart, title: "Bônus 1: Guia Aromaterapia", desc: "Momentos de paz através dos sabonetes." },
              { tag: "Tendência", icon: TrendingUp, title: "Bônus 2: As 20 Peças Mais Vendidas 2025", desc: "Descubra quais modelos estão bombando e têm maior potencial de venda este ano." },
              { tag: "Diferencial", icon: Sparkles, title: "Bônus 3: Detalhes que Encantam", desc: "Aprenda acabamentos e toques finais que transformam peças simples em verdadeiras obras de arte." },
              { tag: "Estratégia", icon: Camera, title: "Bônus 4: Fotos que Vendem", desc: "Técnicas simples de fotografia para destacar suas peças e atrair mais clientes nas redes sociais." },
              { tag: "Método", icon: Move3d, title: "Bônus 5: Método 3 Passos", desc: "Crie centenas de peças encantadoras usando apenas 3 passos simples." },
              { tag: "Premium", icon: Crown, title: "Bônus 6: Receitas Exclusivas", desc: "Acesso a modelos únicos que você não encontra em nenhum outro lugar para se destacar no mercado." }
            ].map((bonus, i) => (
              <div key={i} className="bg-[#f8f9fa] p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                <div className="inline-block bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6">
                  {bonus.tag}
                </div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <bonus.icon className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{bonus.title}</h3>
                <p className="text-gray-600 leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEPOIMENTOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">O QUE AS ALUNAS ESTÃO <span className="text-[#b68bd1]">DIZENDO DO CURSO😍</span></h2>
            <p className="text-lg text-gray-600 font-medium">⬅️ Deslize para o lado! ➡️</p>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              {
                username: 'marcia.artes',
                avatar: 'https://i.pravatar.cc/150?img=47',
                time: '2 h',
                text: 'Meninas, fiz minha primeira fornada ontem e já vendi tudo no grupo do condomínio! 😍 O método é perfeito, não tem erro.',
                likes: 124,
              },
              {
                username: 'ju_oliveira92',
                avatar: 'https://i.pravatar.cc/150?img=32',
                time: '5 h',
                text: 'Sempre achei que precisava de dom pra isso, mas seguindo o passo a passo consegui fazer lembrancinhas lindas pro niver da minha filha. Todos amaram! ❤️',
                likes: 89,
              },
              {
                username: 'carol.sabonetes',
                avatar: 'https://i.pravatar.cc/150?img=5',
                time: '1 d',
                text: 'O melhor investimento que fiz esse ano. Já recuperei o valor do curso na primeira semana vendendo kits de dia das mães. Super recomendo!',
                likes: 256,
              },
              {
                username: 'ana.paula.silva',
                avatar: 'https://i.pravatar.cc/150?img=9',
                time: '2 d',
                text: 'As receitas são maravilhosas e rendem muito. Minha casa tá com um cheirinho incrível kkkk 🥰',
                likes: 45,
              },
              {
                username: 'luciana_mendes',
                avatar: 'https://i.pravatar.cc/150?img=20',
                time: '3 d',
                text: 'Didática nota 10! Até eu que sou péssima com trabalhos manuais consegui fazer. Muito obrigada por compartilhar esse conhecimento.',
                likes: 112,
              }
            ].map((t, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[380px] snap-center bg-[#f8f7f5] p-5 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-3">
                  <img src={t.avatar} alt={t.username} className="w-10 h-10 rounded-full object-cover border border-gray-200 shrink-0" referrerPolicy="no-referrer" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 leading-snug">
                      <span className="font-bold mr-2">{t.username}</span>
                      {t.text}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 font-medium">
                      <span>{t.time}</span>
                      <span>{t.likes} curtidas</span>
                      <button className="hover:text-gray-900 transition-colors">Responder</button>
                    </div>
                  </div>
                  <div className="shrink-0 pt-1">
                    <Heart size={14} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLANOS / OFERTA */}
      <section id="planos" className="py-20 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-8 flex items-center justify-center gap-3">
              <Sparkles className="text-[#d4a373]" size={28} /> 
              Escolha o Seu Plano Ideal 
              <Sparkles className="text-[#d4a373]" size={28} />
            </h2>
            
            {/* Timer */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="bg-[#f4f0ea] rounded-2xl p-4 min-w-[80px] flex flex-col items-center justify-center shadow-sm">
                <span className="text-3xl font-black text-[#b68bd1]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs text-gray-500 font-medium uppercase mt-1">min</span>
              </div>
              <Heart className="text-[#d4a373] fill-[#d4a373]" size={20} />
              <div className="bg-[#f4f0ea] rounded-2xl p-4 min-w-[80px] flex flex-col items-center justify-center shadow-sm">
                <span className="text-3xl font-black text-[#b68bd1]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs text-gray-500 font-medium uppercase mt-1">seg</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center max-w-4xl mx-auto">
            
            {/* Kit Completo (Left) */}
            <div className="flex-1 bg-white rounded-[2rem] border-2 border-[#b68bd1] shadow-xl relative p-6 sm:p-8 md:p-10 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b68bd1] text-white px-6 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-md">
                <Star className="fill-yellow-300 text-yellow-300" size={16} /> MAIS ESCOLHIDO
              </div>
              
              <div className="text-center mb-8 mt-2">
                <Crown className="w-12 h-12 text-[#b68bd1] mx-auto mb-3" />
                <h3 className="text-2xl font-black text-[#b68bd1] mb-1">Kit Completo</h3>
                <p className="text-gray-500 text-sm">Tudo que você precisa para arrasar</p>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  "+300 Receitas de Sabonetes Artesanais",
                  "+70 Aulas em vídeos passo a passo",
                  "Modelos de lembrancinhas e peças decorativas",
                  "Lista de materiais e fornecedores"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-green-100 rounded-full p-0.5 shrink-0">
                      <Check size={14} className="text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-gray-200 my-6"></div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "Bônus 1: Base Glicerinada do Zero",
                  "Bônus 2: Lista de Fornecedores",
                  "Bônus 3: Extrato Glicólico",
                  "Bônus 4: Sabonete Líquido e Geléias",
                  "Bônus 5: Guia de Aromaterapia",
                  "Bônus 6: Planilha de Precificação"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-purple-100 rounded-full p-0.5 shrink-0">
                      <Check size={14} className="text-purple-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#fdfbf7] rounded-2xl p-6 text-center mb-6">
                <div className="text-gray-400 line-through text-sm font-medium mb-1">De R$ 197,00</div>
                <div className="text-4xl font-black text-[#2d6a4f] mb-2">R$ 27,00</div>
                <div className="text-xs text-gray-500 font-medium">Acesso imediato após a confirmação ❤️</div>
              </div>

              <button className="w-full bg-[#355e3b] hover:bg-[#2a4b2f] text-white rounded-xl py-4 font-black text-lg transition-colors shadow-lg flex items-center justify-center gap-2 mb-4">
                GARANTIR KIT COMPLETO 💜
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                <ShieldCheck size={14} className="text-green-600" /> Compra 100% segura • Acesso imediato
              </div>
            </div>

            {/* Kit Básico (Right) */}
            <div className="flex-1 bg-white rounded-[2rem] border border-gray-200 shadow-lg p-6 sm:p-8 md:p-10 flex flex-col mt-4 md:mt-0 md:scale-95 origin-left">
              <div className="text-center mb-8 mt-2">
                <Star className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <h3 className="text-2xl font-black text-gray-800 mb-1">Kit Básico</h3>
                <p className="text-gray-500 text-sm">Para quem quer começar</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "70 Vídeos de Sabonetes Artesanais",
                  "45 Vídeos de Técnicas e Efeitos",
                  "Lista de materiais essenciais"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-gray-100 rounded-full p-0.5 shrink-0">
                      <Check size={14} className="text-gray-400" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#f4f0ea] rounded-2xl p-6 text-center mb-6">
                <div className="text-3xl font-black text-gray-900 mb-2">R$ 10,00</div>
                <div className="text-xs text-gray-500 font-medium">Acesso imediato</div>
              </div>

              <button 
                onClick={() => setShowUpsellModal(true)}
                className="w-full bg-[#f4f0ea] hover:bg-[#e8e4dc] text-gray-800 rounded-xl py-4 font-black text-lg transition-colors"
              >
                QUERO O BÁSICO
              </button>
            </div>

          </div>
          
          <div className="text-center mt-8 text-xs text-gray-500 font-medium flex items-center justify-center gap-2">
            <Hourglass size={14} className="text-[#d4a373]" /> Após o tempo acabar, a condição promocional poderá ser removida.
          </div>
        </div>
      </section>

      {/* 6.5 O MATERIAL É CARO? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            O material é <span className="text-[#b68bd1]">caro?</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            <strong className="text-gray-900">Nem um pouco!</strong> Na <strong className="text-[#ee4d2d]">Shopee</strong> ou em loja de armarinhos, o kit básico é <strong className="text-gray-900">menos de R$ 20,00</strong>, e com um kit você consegue fazer várias artes, no valor de <strong className="text-green-600">R$ 100 ou mais</strong> 👇
          </p>
          
          <div className="flex justify-center">
            <img 
              src="https://i.postimg.cc/d3czVDZg/imagem-2026-03-27-044638287.png" 
              alt="Preço do material na Shopee" 
              className="max-w-full h-auto rounded-2xl shadow-md border border-gray-100"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 6.6 EXEMPLOS */}
      <section className="py-20 bg-[#f8f7f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Veja Alguns Exemplos do Que Você Pode <span className="text-[#b68bd1]">Criar</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Peças encantadoras que você vai aprender a fazer.
          </p>
          
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar justify-start" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { img: "https://i.postimg.cc/nh68Pdcs/1.png", title: "Arte Encantadora" },
              { img: "https://i.postimg.cc/Hx0C5QmL/2.png", title: "Peça Delicada" },
              { img: "https://i.postimg.cc/LsLdKznZ/3.png", title: "Trabalho Manual" },
              { img: "https://i.postimg.cc/wjSKGWTR/4.png", title: "Criação Exclusiva" },
              { img: "https://i.postimg.cc/x1Wr4sTJ/5.png", title: "Arte Decorativa" },
              { img: "https://i.postimg.cc/gcDW2q4y/6.png", title: "Presente Especial" }
            ].map((item, i) => (
              <div key={i} className="min-w-[260px] md:min-w-[280px] snap-center bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover rounded-xl mb-4" referrerPolicy="no-referrer" />
                <p className="text-gray-800 font-medium text-sm pb-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GARANTIA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
            <div className="w-40 h-40 shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-100">
              <Check size={80} className="text-green-500" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Risco zero para você! Garantia Incondicional!</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Ainda não tem certeza? Não se preocupe. Se o conteúdo descrito acima não for o mesmo que você receber, você tem <span className="font-bold text-gray-900">7 dias de garantia</span> e devolverei seu dinheiro sem burocracia!
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                Lembrando que seu acesso a plataforma é por tempo ilimitado e sempre estamos incluindo novas aulas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUEM ENSINA */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">CONHEÇA NOSSA PROFESSORA!</h2>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-[#f8f9fa] shadow-xl">
              <img 
                src="/autor.png" 
                alt="Gislene Alves" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-gray-900 mb-2">Gislene Alves</h3>
              <div className="inline-block bg-purple-100 text-purple-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                ✨ Diretora da Enkanto Nature ✨
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Olá! eu sou a Gislene Alves, diretora da Enkanto Nature, e artesã a mais de 5 anos e encontrei nos sabonetes e cosméticos artesanais a oportunidade que eu procurava para transformar minha vida e a da minha família.
                </p>
                <p>
                  Dei a volta por cima e hoje vivo do meu trabalho, tenho mais tempo para mim e minha família, conquistei a independência financeira através dessa arte apaixonante.
                </p>
                <p>
                  O meu objetivo e mostrar a você que é possível sim viver seus sonhos e fabricar seus produtos no conforto da sua casa junto da sua família. Mostrar que com os materiais necessários e força de vontade você pode ganhar seu próprio dinheiro e conquistar sua independência financeira.
                </p>
                <p>
                  Criei esse curso para ajudar o máximo de pessoas que estejam precisando lucrar e criar seu próprio negócio. Investi muito tempo nessa curso e garanto que dei o meu melhor para te ajudar a atingir seus objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="Como vou receber o acesso ao curso?" 
              answer="Após a confirmação do pagamento, você receberá os dados de acesso automaticamente no e-mail cadastrado no momento da compra." 
            />
            <FAQItem 
              question="Quais as formas de pagamento?" 
              answer="Você pode pagar no cartão de crédito em até 10x, PIX ou boleto bancário (pagamentos no boleto podem levar até 3 dias úteis para compensar)." 
            />
            <FAQItem 
              question="Por quanto tempo terei acesso?" 
              answer="O seu acesso ao curso é VITALÍCIO. Você poderá assistir às aulas quantas vezes quiser, no seu próprio ritmo." 
            />
            <FAQItem 
              question="Tem certificado de conclusão?" 
              answer="Sim! Ao concluir todas as aulas, você poderá emitir seu certificado de conclusão válido em todo o Brasil diretamente na plataforma." 
            />
            <FAQItem 
              question="Preciso ter experiência para começar?" 
              answer="Não! O curso foi desenhado passo a passo, do básico ao avançado, perfeito para quem está começando do absoluto zero." 
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#f8f9fa] py-8 text-center text-gray-500 text-sm font-medium border-t border-gray-200">
        <p>© {new Date().getFullYear()} Sabonetes Artesanais. Todos os direitos reservados.</p>
      </footer>

      {/* Upsell Modal */}
      {showUpsellModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative"
          >
            <button 
              onClick={() => setShowUpsellModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="bg-red-600 text-white text-center py-3 font-bold text-sm uppercase tracking-wider">
              ⚠️ ESPERE! NÃO FECHE ESSA PÁGINA!
            </div>
            
            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-tight">
                Leve o <span className="text-[#b68bd1]">Kit Completo</span> com TODOS os bônus por apenas <span className="text-green-600">R$ 17,00!</span>
              </h3>
              
              <p className="text-gray-600 mb-6">
                Você clicou no Kit Básico, mas eu quero te fazer uma proposta irrecusável. Adicione apenas <strong>R$ 7,00</strong> e leve o pacote completo!
              </p>
              
              <div className="bg-[#fdfbf7] rounded-xl p-4 mb-6 text-left border border-[#f4f0ea]">
                <p className="font-bold text-gray-800 mb-2">O que você ganha a mais:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> + 100 Vídeos de Sabonetes</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> + 50 Vídeos de Técnicas</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Todos os 6 Bônus Exclusivos</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Certificado de Conclusão</li>
                </ul>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 font-black text-lg transition-colors shadow-lg mb-4 animate-pulse">
                SIM! QUERO O COMPLETO POR R$ 17
              </button>
              
              <button 
                onClick={() => setShowUpsellModal(false)}
                className="text-gray-400 text-sm font-medium hover:text-gray-600 underline"
              >
                Não, obrigado. Quero apenas o Básico por R$ 10.
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
