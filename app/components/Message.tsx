const Message = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-yellow-400 rounded-full shadow-lg">
            <span className="text-black mr-2">💌</span>
            <span className="font-black text-sm uppercase tracking-wide text-black">MESSAGE</span>
            <span className="text-black ml-2">💌</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              開発者から
            </span>
            <span className="block text-white mt-2">
              あなたへ
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-8xl text-black">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">田中 雄一</h3>
              <p className="text-lg text-gray-200 mb-4">AI開発エンジニア / 元プロ野球選手</p>
              <div className="bg-black bg-opacity-30 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-200">
                  東京大学工学部卒<br />
                  元読売ジャイアンツ投手<br />
                  AI研究歴12年
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xl">💭</span>
                    </div>
                    <h4 className="text-2xl font-black text-gray-900">なぜこのシステムを作ったのか</h4>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    私は現役時代、投手として数々の場面で「確率」と「直感」の間で判断を迫られました。
                    データは重要ですが、最後は人間の「読み」が勝負を決める。
                    この感覚を競馬予想に活かせないかと考えたのが、HOMERUN TURFの始まりです。
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h4 className="text-2xl font-black text-gray-900">野球と競馬の共通点</h4>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    野球でバッターがスイングするタイミング、競馬で騎手が最後の直線で仕掛けるタイミング。
                    両者とも「瞬間の判断」が結果を左右します。
                    この共通する「戦略的思考」をAIに学習させることで、
                    従来にない精度の予想システムが完成しました。
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <h4 className="text-2xl font-black text-gray-900">お客様への約束</h4>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    このシステムは「必ず勝てる」魔法ではありません。
                    しかし、データと直感を融合させた戦略的アプローチで、
                    あなたの競馬投資をより確実で楽しいものにするお手伝いをします。
                    透明性を大切にし、常に改良を続けていくことをお約束します。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
                  <div className="text-center">
                    <p className="text-xl font-black text-gray-900 mb-2">
                      「データの先にある勝負勘を、AIで形にしました。」
                    </p>
                    <p className="text-lg text-gray-800">
                      - 田中 雄一
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-black bg-opacity-20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-12">
              🏆 開発チームからのメッセージ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3">精度への こだわり</h4>
                <p className="text-gray-200">
                  妥協のない精度追求で、
                  お客様の期待に応えます
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔄</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3">継続的な改善</h4>
                <p className="text-gray-200">
                  毎日のデータ分析で
                  システムを進化させます
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">💝</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3">お客様第一</h4>
                <p className="text-gray-200">
                  皆様の成功が私たちの
                  最大の喜びです
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-black mb-4">
              🎯 一緒に勝利を掴みましょう！
            </h3>
            <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto mb-6">
              野球で培った戦略的思考と最新のAI技術で、
              あなたの競馬ライフを次のレベルへ導きます。
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-xl text-xl font-black hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105">
              🚀 今すぐ無料体験を始める
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;