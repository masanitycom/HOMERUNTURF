const Concept = () => {
  return (
    <section id="concept" className="section-padding bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-blue-600 rounded-full shadow-lg">
            <span className="text-white mr-2">🎯</span>
            <span className="font-black text-sm uppercase tracking-wide text-white">CONCEPT</span>
            <span className="text-white ml-2">🎯</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              野球の戦略思考
            </span>
            <span className="block text-gray-900 mt-2">
              × 競馬の勝負勘
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            データ分析の先にある「直感」を、<br className="md:hidden" />AIが再現。<br />
            野球で培った戦略的思考を<br className="md:hidden" />競馬に応用し、<br />
            単なる数字では見えない<br className="md:hidden" />勝負の本質を捉えます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl text-white">⚾</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">野球の戦略思考</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                投手の球種、打者の癖、守備陣形の組み方...
                野球には数値化できない「読み」があります。
                この戦略的思考をAIに学習させました。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl text-white">🏇</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900">競馬の勝負感</h3>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                馬の調子、騎手の判断、レース展開の読み...
                競馬の醍醐味は予想の難しさにあります。
                この不確実性をAIが分析します。
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-black">🤖</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">AI統合システム</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                野球×競馬の思考パターンを<br className="md:hidden" />
                融合させた独自のAIアルゴリズム
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-black bg-opacity-30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">データ分析精度</span>
                  <span className="text-2xl font-black text-yellow-400">94.2%</span>
                </div>
              </div>
              <div className="bg-black bg-opacity-30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">戦略的判断力</span>
                  <span className="text-2xl font-black text-yellow-400">89.7%</span>
                </div>
              </div>
              <div className="bg-black bg-opacity-30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">勝負勘再現度</span>
                  <span className="text-2xl font-black text-yellow-400">92.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-black mb-4">
              🚀 革新的アプローチ
            </h3>
            <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto mb-6">
              単なるデータ分析ではなく、スポーツの本質を理解した<br className="md:hidden" />
              「戦略的AI」が、あなたの勝率を劇的に向上させます。
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-black hover:bg-gray-800 transition-all duration-300 shadow-lg">
              🎯 詳細を確認する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;