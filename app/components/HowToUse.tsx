const HowToUse = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-purple-600 rounded-full shadow-lg">
            <span className="text-white mr-2">📱</span>
            <span className="font-black text-sm uppercase tracking-wide text-white">HOW TO USE</span>
            <span className="text-white ml-2">📱</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              簡単3ステップで
            </span>
            <span className="block text-gray-900 mt-2">
              AI予想を開始
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            誰でも簡単に使える、直感的なインターフェース
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-5xl font-black text-white">1</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-2xl">📝</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">
                  アカウント登録
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6 text-center">
                  メールアドレスだけで<br />簡単登録
                </p>
                <div className="space-y-3">
                  <div className="flex items-center bg-blue-50 rounded-lg p-3 transition-all hover:bg-blue-100">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">メールアドレス入力</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-3 transition-all hover:bg-blue-100">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">認証コード確認</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-3 transition-all hover:bg-blue-100">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">パスワード設定</span>
                  </div>
                </div>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="text-5xl text-purple-400">→</div>
              </div>
              {/* Arrow for mobile */}
              <div className="md:hidden flex justify-center my-4">
                <div className="text-5xl text-purple-400">↓</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-100">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-5xl font-black text-white">2</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-2xl">⚙️</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">
                  プラン選択
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6 text-center">
                  最適なプランを<br />選択
                </p>
                <div className="space-y-3">
                  <div className="flex items-center bg-emerald-50 rounded-lg p-3 transition-all hover:bg-emerald-100">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">ノーマルプラン（無料）</span>
                  </div>
                  <div className="flex items-center bg-emerald-50 rounded-lg p-3 transition-all hover:bg-emerald-100">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">ゴールドプラン</span>
                  </div>
                  <div className="flex items-center bg-emerald-50 rounded-lg p-3 transition-all hover:bg-emerald-100">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">プラチナプラン</span>
                  </div>
                </div>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="text-5xl text-purple-400">→</div>
              </div>
              {/* Arrow for mobile */}
              <div className="md:hidden flex justify-center my-4">
                <div className="text-5xl text-purple-400">↓</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-5xl font-black text-white">3</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">
                  予想開始
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6 text-center">
                  即座にAI予想を<br />表示
                </p>
                <div className="space-y-3">
                  <div className="flex items-center bg-orange-50 rounded-lg p-3 transition-all hover:bg-orange-100">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">レース選択</span>
                  </div>
                  <div className="flex items-center bg-orange-50 rounded-lg p-3 transition-all hover:bg-orange-100">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">AI予想表示</span>
                  </div>
                  <div className="flex items-center bg-orange-50 rounded-lg p-3 transition-all hover:bg-orange-100">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">馬券購入支援</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-black mb-4">
              🎯 今すぐ始めよう！
            </h3>
            <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto mb-6">
              たった3分で始められる簡単セットアップ。
              ノーマルプラン（無料）からお試しいただけます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-xl text-xl font-black hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105">
                🚀 登録を開始
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-xl text-xl font-black hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-black">
                📹 使い方動画を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;