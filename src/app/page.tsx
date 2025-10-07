import { CheckCircle, Star, Users, Video, MessageCircle, TrendingUp, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white font-bold text-xl">🚀 VIRAL MASTERY</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            DESCUBRA O SEGREDO DOS
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
              VÍDEOS VIRAIS
            </span>
          </h1>
          
          {/* Oferta de Valor */}
          <div className="mb-8">
            <div className="text-gray-400 text-xl line-through mb-2">De R$ 427,59</div>
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
              Por apenas R$ 39,95
            </div>
            <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block text-lg font-bold">
              🔥 DESCONTO DE 90% - APENAS HOJE!
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Aprenda as técnicas secretas que fazem vídeos explodirem nas redes sociais e 
            <strong className="text-yellow-400"> ganhe milhares de seguidores em poucos dias!</strong>
          </p>

          <a 
            href="https://app.monetizze.com.br/checkout/DUK361183" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-8 animate-pulse font-bold"
          >
            ⚡ OFERTA LIMITADA - APENAS HOJE!
          </a>

          <a 
            href="https://app.monetizze.com.br/checkout/DUK361183" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 has-[>svg]:px-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            🚀 QUERO VIRALIZAR AGORA
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            O QUE VOCÊ VAI APRENDER:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Video className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Fórmulas Virais</h3>
              <p className="text-gray-200">
                Descubra as 7 fórmulas secretas que fazem qualquer vídeo viralizar em 24 horas
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Algoritmo Secreto</h3>
              <p className="text-gray-200">
                Como hackear o algoritmo do TikTok, Instagram e YouTube para máximo alcance
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Monetização</h3>
              <p className="text-gray-200">
                Transforme seus vídeos virais em uma máquina de fazer dinheiro online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            ⭐ O QUE NOSSOS ALUNOS DIZEM:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-4">
                <h4 className="text-white font-bold text-lg mb-2">Maria Silva</h4>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-gray-200 italic">
                "Em apenas 3 dias aplicando as técnicas do Viral Mastery, meu vídeo teve 2.3 milhões de visualizações! Nunca imaginei que seria tão simples."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-4">
                <h4 className="text-white font-bold text-lg mb-2">João Santos</h4>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-gray-200 italic">
                "Saí de 500 seguidores para 85K em 2 semanas! O curso é incrível, cada aula é uma bomba de conhecimento. Vale cada centavo!"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-4">
                <h4 className="text-white font-bold text-lg mb-2">Ana Costa</h4>
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-gray-200 italic">
                "Consegui monetizar meu perfil e agora ganho R$ 15.000 por mês só com conteúdo viral. O Viral Mastery mudou minha vida completamente!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            RESULTADOS COMPROVADOS:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-2">+50M</div>
              <div className="text-green-100">Visualizações Geradas</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-2">+10K</div>
              <div className="text-blue-100">Alunos Transformados</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-2">97%</div>
              <div className="text-purple-100">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🎁 BÔNUS EXCLUSIVOS:
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center gap-6">
              <div className="bg-yellow-500 rounded-full p-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  BÔNUS #1: Templates de Vídeos Virais
                </h3>
                <p className="text-gray-200 mb-2">
                  +100 templates prontos para usar e viralizar imediatamente
                </p>
                <div className="text-green-400 font-semibold">Valor: R$ 5,99</div>
              </div>
              <a 
                href="https://app.monetizze.com.br/checkout/DKE361187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                QUERO ESTE BÔNUS
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center gap-6">
              <div className="bg-blue-500 rounded-full p-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  BÔNUS #2: Grupo VIP no Telegram
                </h3>
                <p className="text-gray-200 mb-2">
                  Acesso exclusivo ao grupo de alunos + suporte direto comigo
                </p>
                <div className="text-green-400 font-semibold">Valor: R$ 17,80</div>
              </div>
              <a 
                href="https://app.monetizze.com.br/checkout/DGD361188" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-colors"
              >
                QUERO ESTE BÔNUS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-600 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              ⏰ ATENÇÃO: OFERTA EXPIRA EM BREVE!
            </h2>
            <p className="text-xl text-red-100 mb-6">
              Apenas os primeiros 100 alunos terão acesso a esse preço especial
            </p>
            <div className="text-4xl font-bold text-yellow-400">
              RESTAM APENAS 23 VAGAS!
            </div>
          </div>

          <a 
            href="https://app.monetizze.com.br/checkout/DUK361183" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 has-[>svg]:px-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-16 py-8 text-2xl rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 mb-6"
          >
            🔥 SIM, EU QUERO VIRALIZAR!
          </a>
        </div>
      </section>

      {/* Garantia */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              GARANTIA DE 7 DIAS
            </h2>
            <p className="text-xl text-gray-200">
              Se você não conseguir seus primeiros 1000 seguidores em 7 dias, 
              devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-400">
          © 2024 Viral Mastery. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}