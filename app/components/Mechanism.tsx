const Mechanism = () => {
  return (
    <section id="mechanism" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gray-900 rounded-full shadow-lg">
            <span className="text-white mr-2">🔧</span>
            <span className="font-black text-sm uppercase tracking-wide text-white">MECHANISM</span>
            <span className="text-white ml-2">🔧</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              AIエンジンの
            </span>
            <span className="block text-gray-900 mt-2">
              仕組みを公開
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            ブラックボックスではない、透明性の高いAI予想システム
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl card-hover">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">📥</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                STEP 1: データ収集
              </h3>
              <p className="text-gray-800">
                過去レース結果、馬体重、騎手データ、
                馬場状態など1000万件以上の
                データを24時間体制で収集
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl card-hover">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">⚾</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                STEP 2: 野球戦略適用
              </h3>
              <p className="text-gray-800">
                投手交代のタイミング、守備陣形
                などの戦略パターンを競馬の
                レース展開予想に応用
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl card-hover">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                STEP 3: AI判定
              </h3>
              <p className="text-gray-800">
                機械学習アルゴリズムが戦略的
                思考と統計データを融合し、
                最適な予想を算出
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-black">🧠</span>
                </div>
                <h3 className="text-3xl font-black mb-4 text-white">
                  ニューラルネットワーク構造
                </h3>
                <p className="text-lg text-gray-200">
                  野球の戦術思考をモデル化した独自のAI設計
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black bg-opacity-30 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-400 mb-2">127</div>
                    <div className="text-sm font-bold text-white mb-3">入力層ノード</div>
                    <div className="text-xs text-gray-200">
                      馬データ、騎手、馬場、天候、
                      オッズなどを多角的に分析
                    </div>
                  </div>
                </div>
                <div className="bg-black bg-opacity-30 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-400 mb-2">512</div>
                    <div className="text-sm font-bold text-white mb-3">中間層ノード</div>
                    <div className="text-xs text-gray-200">
                      野球戦略パターンを学習した
                      深層学習レイヤー
                    </div>
                  </div>
                </div>
                <div className="bg-black bg-opacity-30 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-400 mb-2">18</div>
                    <div className="text-sm font-bold text-white mb-3">出力層ノード</div>
                    <div className="text-xs text-gray-200">
                      各馬の勝率、連対率、
                      3着内率を精密予想
                    </div>
                  </div>
                </div>
                <div className="bg-black bg-opacity-30 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-400 mb-2">94.2%</div>
                    <div className="text-sm font-bold text-white mb-3">学習精度</div>
                    <div className="text-xs text-gray-200">
                      10万レース以上のデータで
                      検証済みの高精度
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl text-lg font-black hover:bg-yellow-300 transition-all duration-300 shadow-lg">
                  📊 技術詳細資料をダウンロード
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
            🔍 予想プロセスの透明性
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 mb-2">
                データ重み付け
              </h4>
              <p className="text-sm text-gray-800">
                各要素がどの程度
                予想に影響するかを
                数値で可視化
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 mb-2">
                根拠の表示
              </h4>
              <p className="text-sm text-gray-800">
                なぜその予想に
                至ったかの理由を
                分かりやすく説明
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 mb-2">
                信頼度スコア
              </h4>
              <p className="text-sm text-gray-800">
                予想の確実性を
                パーセンテージで
                表示する
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔄</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 mb-2">
                リアルタイム更新
              </h4>
              <p className="text-sm text-gray-800">
                オッズや馬場状態の
                変化に応じて予想を
                随時アップデート
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;