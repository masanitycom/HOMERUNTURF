const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 pt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Baseball and horse racing themed floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white bg-opacity-15 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-white bg-opacity-20 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-yellow-400 rounded-full shadow-xl">
            <span className="text-black mr-2">⚡</span>
            <span className="font-black text-sm uppercase tracking-wide text-black">革新的AI予想システム</span>
            <span className="text-black ml-2">⚡</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent text-glow">
              野球の戦略
            </span>
            <span className="block text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-2">×</span>
            <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent text-glow">
              競馬のロマン
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white">
              AIが導く、次の一手。
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-3xl mb-12 opacity-95 leading-relaxed font-medium">
            <span className="text-yellow-300">データの先にある勝負勘</span>を、
            <span className="text-orange-300">AIが形にしました。</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://note.com/homerunturf/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black px-10 py-5 rounded-xl text-lg font-black transition-all duration-300 hover:bg-yellow-300 transform hover:scale-105 shadow-lg"
            >
              🚀 AI予想を体験する
            </a>
            <a
              href="https://note.com/homerunturf/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-400 text-black px-10 py-5 rounded-xl text-lg font-black transition-all duration-300 hover:bg-emerald-300 transform hover:scale-105 shadow-lg"
            >
              🎯 今日の予想を見る
            </a>
          </div>

        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center animate-pulse">
          <span className="text-sm mb-3 font-semibold tracking-wide">↓ SCROLL DOWN ↓</span>
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center bg-white bg-opacity-20 backdrop-blur-sm">
            <div className="w-2 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;