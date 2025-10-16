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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <span className="text-6xl text-white">1</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xl text-black">📝</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              アカウント登録
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              メールアドレスだけで簡単登録。
              SNSアカウントでの登録も可能です。
            </p>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-800 text-left space-y-2">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>メールアドレス入力</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>認証コード確認</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>パスワード設定</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <span className="text-6xl text-white">2</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xl text-black">⚙️</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              プラン選択
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              あなたに最適なプランを選択。
              無料プランから始められます。
            </p>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-800 text-left space-y-2">
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>無料プラン</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>ノーマルプラン</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>ゴールドプラン</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>プラチナプラン</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <span className="text-6xl text-white">3</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xl text-black">🚀</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              予想開始
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              レースを選択するだけで、
              即座にAI予想が表示されます。
            </p>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-800 text-left space-y-2">
                <div className="flex items-center">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>レース選択</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>AI予想表示</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>馬券購入支援</span>
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
              無料プランからお試しいただけます。
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