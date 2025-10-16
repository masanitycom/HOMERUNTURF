const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16 border-b border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
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

            <div>
              <h3 className="text-lg font-black text-white mb-6">サービス</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    リアルタイム予想
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    戦略的分析レポート
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    パーソナル学習
                  </a>
                </li>
                <li>
                  <a href="#mechanism" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    AIエンジン詳細
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-black text-white mb-6">サポート</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    使い方ガイド
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    技術サポート
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-black text-white mb-6">お問い合わせ</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    メールサポート
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    チャットサポート
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    お客様の声
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 HOMERUN TURF. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  利用規約
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  プライバシーポリシー
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  特定商取引法
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <div className="bg-gradient-to-r from-blue-900 to-emerald-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-black text-white mb-2">
              🚀 今すぐ始めませんか？
            </h3>
            <p className="text-gray-200 mb-4">
              7日間無料体験で、AIの予想精度を実感してください
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-black hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105">
              無料体験を開始
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;