const Results = () => {
  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-green-600 rounded-full shadow-lg">
            <span className="text-white mr-2">🏆</span>
            <span className="font-black text-sm uppercase tracking-wide text-white">RESULTS</span>
            <span className="text-white ml-2">🏆</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              圧倒的な実績が
            </span>
            <span className="block text-gray-900 mt-2">
              証明する精度
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            データで証明された、AIの予想精度と収益性
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center card-hover shadow-xl">
            <div className="text-6xl md:text-8xl font-black text-green-600 mb-4">89.3%</div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">的中率</h3>
            <p className="text-lg text-gray-800 mb-4">過去12ヶ月実績</p>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-800 font-semibold">
                ✓ 3連単: 34.2%<br />
                ✓ 3連複: 67.8%<br />
                ✓ 馬連: 89.3%
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center card-hover shadow-xl">
            <div className="text-6xl md:text-8xl font-black text-blue-600 mb-4">340%</div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">平均回収率</h3>
            <p className="text-lg text-gray-800 mb-4">継続利用者平均</p>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-800 font-semibold">
                ✓ 最高: 847%<br />
                ✓ 最低: 118%<br />
                ✓ 中央値: 298%
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center card-hover shadow-xl">
            <div className="text-6xl md:text-8xl font-black text-orange-600 mb-4">1,247</div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">分析レース数</h3>
            <p className="text-lg text-gray-800 mb-4">AI学習データ</p>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-800 font-semibold">
                ✓ 中央競馬: 986<br />
                ✓ 地方競馬: 261<br />
                ✓ 海外G1: 47
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-12">
            📈 月別パフォーマンス推移
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <div className="text-sm font-bold text-white mb-2">7月</div>
              <div className="text-2xl font-black text-yellow-400">287%</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <div className="text-sm font-bold text-white mb-2">8月</div>
              <div className="text-2xl font-black text-yellow-400">342%</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <div className="text-sm font-bold text-white mb-2">9月</div>
              <div className="text-2xl font-black text-yellow-400">398%</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <div className="text-sm font-bold text-white mb-2">10月</div>
              <div className="text-2xl font-black text-yellow-400">276%</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <div className="text-sm font-bold text-white mb-2">11月</div>
              <div className="text-2xl font-black text-yellow-400">423%</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm text-center">
              <div className="text-sm font-bold text-white mb-2">12月</div>
              <div className="text-2xl font-black text-green-400">531%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              💰 実際の利益事例
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Aさん（3ヶ月利用）</span>
                  <span className="text-2xl font-black text-green-600">+¥847,000</span>
                </div>
                <p className="text-sm text-gray-800 mt-2">
                  投資元本: ¥200,000 → 回収: ¥1,047,000
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Bさん（6ヶ月利用）</span>
                  <span className="text-2xl font-black text-green-600">+¥1,230,000</span>
                </div>
                <p className="text-sm text-gray-800 mt-2">
                  投資元本: ¥300,000 → 回収: ¥1,530,000
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Cさん（1年利用）</span>
                  <span className="text-2xl font-black text-green-600">+¥2,890,000</span>
                </div>
                <p className="text-sm text-gray-800 mt-2">
                  投資元本: ¥500,000 → 回収: ¥3,390,000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              🎯 重賞レース実績
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">日本ダービー</span>
                  <span className="text-lg font-black text-blue-600">3連単的中</span>
                </div>
                <p className="text-sm text-gray-800">
                  配当: 847,200円 / 予想オッズ: 832,000円
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">有馬記念</span>
                  <span className="text-lg font-black text-blue-600">3連複的中</span>
                </div>
                <p className="text-sm text-gray-800">
                  配当: 234,560円 / 予想オッズ: 218,000円
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">宝塚記念</span>
                  <span className="text-lg font-black text-blue-600">馬連的中</span>
                </div>
                <p className="text-sm text-gray-800">
                  配当: 89,430円 / 予想オッズ: 91,000円
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-black mb-4">
              🚀 あなたも今すぐ始めませんか？
            </h3>
            <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto mb-6">
              実績に裏付けられた確かな予想精度で、
              競馬投資の成功を手に入れてください。
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-xl text-xl font-black hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105">
              🎯 7日間無料体験を開始
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;