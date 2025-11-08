const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16 border-b border-gray-700">
          <div>
            <div className="font-display text-2xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                HOMERUN TURF
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              野球の戦略思考とAI技術を融合させた、
              革新的な競馬予想システム
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white text-lg">📘</span>
              </div>
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
                <span className="text-white text-lg">🐦</span>
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-white text-lg">📷</span>
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <span className="text-white text-lg">📺</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 HOMERUN TURF. All rights reserved.
            </p>
          </div>
        </div>

        <div className="pb-8">
          <div className="bg-gradient-to-r from-blue-900 to-emerald-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-black text-white mb-2">
              🚀 今すぐ始めませんか？
            </h3>
            <p className="text-gray-200 mb-4">
              AIの予想精度を実感してください
            </p>
            <a
              href="https://note.com/homerunturf/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-black hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              今すぐ始める
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;