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

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              圧倒的な実績が
            </h3>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              証明する精度
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              データで証明された、AIの予想精度と収益性
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;