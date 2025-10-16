const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-emerald-600 rounded-full shadow-lg">
            <span className="text-white mr-2">⚡</span>
            <span className="font-black text-sm uppercase tracking-wide text-white">SERVICES</span>
            <span className="text-white ml-2">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              AIが提供する
            </span>
            <span className="block text-gray-900 mt-2">
              3つのサービス
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            野球戦略とAI分析を融合させた、革新的な競馬予想システム
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 card-hover shadow-xl">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-white">🎯</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 text-center mb-4">
              リアルタイム予想
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed text-center mb-6">
              レース開始直前まで更新される
              最新のAI予想データ
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="font-semibold">1着〜3着の確率予想</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="font-semibold">オッズ変動の監視</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="font-semibold">天候・馬場状態の反映</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="font-semibold">騎手変更への対応</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 card-hover shadow-xl">
            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-white">📊</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 text-center mb-4">
              戦略的分析レポート
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed text-center mb-6">
              野球の戦術思考を応用した
              詳細な馬券戦略の提案
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="text-emerald-600 mr-3">✓</span>
                <span className="font-semibold">買い目の優先順位</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-3">✓</span>
                <span className="font-semibold">投資配分の推奨</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-3">✓</span>
                <span className="font-semibold">リスク管理アドバイス</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-3">✓</span>
                <span className="font-semibold">回収率最適化戦略</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 card-hover shadow-xl">
            <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-white">🏆</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 text-center mb-4">
              パーソナル学習
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed text-center mb-6">
              あなたの投票履歴から学習し
              個人最適化された予想を提供
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="text-orange-600 mr-3">✓</span>
                <span className="font-semibold">好みの馬場・距離分析</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-600 mr-3">✓</span>
                <span className="font-semibold">勝ちパターンの発見</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-600 mr-3">✓</span>
                <span className="font-semibold">負けパターンの回避</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-600 mr-3">✓</span>
                <span className="font-semibold">継続的な精度向上</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-purple-600 rounded-full shadow-lg">
              <span className="text-white mr-2">💎</span>
              <span className="font-black text-sm uppercase tracking-wide text-white">PRICING</span>
              <span className="text-white ml-2">💎</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                あなたに最適な
              </span>
              <span className="block text-gray-900 mt-2">
                プランを選択
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
              4つのプランから、ご利用スタイルに合わせてお選びいただけます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 無料プラン */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">無料プラン</h3>
                <div className="text-4xl font-black text-gray-600 mb-2">¥0</div>
                <div className="text-sm text-gray-600">/ 月</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span className="text-sm">基本的なレース情報閲覧</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span className="text-sm">週末のみAI予想閲覧</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span className="text-sm">1日3レースまで</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✗</span>
                  <span className="text-sm text-gray-400">詳細分析レポート</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white px-6 py-3 rounded-xl font-black hover:bg-gray-700 transition-all duration-300">
                無料で始める
              </button>
            </div>

            {/* ノーマルプラン */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl border-2 border-blue-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">ノーマル</h3>
                <div className="text-4xl font-black text-blue-600 mb-2">¥3,980</div>
                <div className="text-sm text-gray-600">/ 月</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">全レースAI予想閲覧</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">リアルタイム更新</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">基本的な分析レポート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✗</span>
                  <span className="text-sm text-gray-400">パーソナル学習</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition-all duration-300">
                このプランを選択
              </button>
            </div>

            {/* ゴールドプラン */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-xl border-2 border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-black">
                人気No.1
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">ゴールド</h3>
                <div className="text-4xl font-black text-yellow-600 mb-2">¥7,980</div>
                <div className="text-sm text-gray-600">/ 月</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span className="text-sm">全レースAI予想閲覧</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span className="text-sm">詳細分析レポート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span className="text-sm">パーソナル学習機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span className="text-sm">戦略的買い目提案</span>
                </li>
              </ul>
              <button className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-black hover:bg-yellow-500 transition-all duration-300">
                このプランを選択
              </button>
            </div>

            {/* プラチナプラン */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-xl border-2 border-purple-400">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">プラチナ</h3>
                <div className="text-4xl font-black text-purple-600 mb-2">¥14,980</div>
                <div className="text-sm text-gray-600">/ 月</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">ゴールドプラン全機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">優先サポート（24時間）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">専属アナリスト相談</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">重賞レース特別分析</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-black hover:bg-purple-700 transition-all duration-300">
                このプランを選択
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;