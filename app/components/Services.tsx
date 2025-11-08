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

        {/* プランセクション */}
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
              3つのプランから、ご利用スタイルに合わせてお選びいただけます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ルーキープラン */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl border-2 border-blue-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">ルーキープラン</h3>
                <div className="text-5xl font-black text-blue-600 mb-2">無料</div>
                <div className="text-sm text-gray-600">&nbsp;</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">基本的なレース情報閲覧</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">週末のみAI予想</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">1日3レースまで</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-black hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                このプランを選択
              </button>
            </div>

            {/* レギュラープラン */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-xl border-2 border-emerald-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-white px-4 py-1 rounded-full text-xs font-black">
                人気No.1
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">レギュラープラン</h3>
                <div className="text-5xl font-black text-emerald-600 mb-2">¥4,980</div>
                <div className="text-sm text-gray-600">/ 月</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">全レースAI予想</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">リアルタイム更新</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">詳細分析レポート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">パーソナル学習機能</span>
                </li>
              </ul>
              <a
                href="https://note.com/homerunturf/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 text-white px-6 py-4 rounded-xl font-black hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                このプランを選択
              </a>
            </div>

            {/* エースプラン */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl border-2 border-orange-400">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">エースプラン</h3>
                <div className="text-5xl font-black text-orange-600 mb-2">¥9,980</div>
                <div className="text-sm text-gray-600">/ 月</div>
              </div>
              <ul className="space-y-3 text-gray-800 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">レギュラープラン全機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">優先サポート（24時間）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">専属アナリスト相談</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">✓</span>
                  <span className="text-sm font-semibold">重賞レース特別分析</span>
                </li>
              </ul>
              <a
                href="https://note.com/homerunturf/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-600 text-white px-6 py-4 rounded-xl font-black hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                このプランを選択
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
