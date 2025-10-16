'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "AIの予想精度はどの程度ですか？",
      answer: "AIは膨大なデータを学習し、継続的に精度を向上させています。レース条件や馬の状態など、多角的な分析により、データに基づいた予想を提供します。"
    },
    {
      question: "野球の戦略がなぜ競馬に役立つのですか？",
      answer: "野球の投手交代のタイミングや守備陣形の判断は、競馬のペース配分や最終コーナーでの判断と類似しています。両者とも「状況判断」と「確率的思考」が重要で、この共通点をAIが学習することで、より人間らしい戦略的予想が可能になります。"
    },
    {
      question: "月額費用以外に追加料金はかかりますか？",
      answer: "月額プラン費用以外の追加料金は一切発生しません。予想回数無制限、全機能利用可能です。ただし、馬券の購入費用は別途お客様のご負担となります。"
    },
    {
      question: "無料プランから有料プランへの変更は簡単ですか？",
      answer: "はい、管理画面からいつでも簡単にプラン変更が可能です。プラン変更後すぐに新しいプランの機能をご利用いただけます。"
    },
    {
      question: "スマートフォンアプリはありますか？",
      answer: "iOS・Android両対応のネイティブアプリを提供しています。ウェブ版と同じ機能がすべて利用でき、プッシュ通知でリアルタイムな情報をお届けします。App Store・Google Playから無料でダウンロードできます。"
    },
    {
      question: "地方競馬の予想にも対応していますか？",
      answer: "はい、中央競馬だけでなく全国の地方競馬にも対応しています。現在は大井、川崎、船橋、浦和、名古屋、金沢、園田、高知などの主要地方競馬場をカバーしており、順次拡大予定です。"
    },
    {
      question: "AIの予想データはいつ更新されますか？",
      answer: "レース開始の約1時間前から10分間隔で更新されます。オッズ変動、出走取消、騎手変更などの情報を自動的に反映し、常に最新の予想を提供します。重要な変更があった場合は即座に通知されます。"
    },
    {
      question: "過去の予想結果を確認できますか？",
      answer: "はい、お客様の予想履歴、的中率、収益率などを詳細に確認できます。月別、競馬場別、馬券種別での分析も可能で、ご自身の投資パフォーマンスを把握し、改善に役立てていただけます。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-indigo-600 rounded-full shadow-lg">
            <span className="text-white mr-2">❓</span>
            <span className="font-black text-sm uppercase tracking-wide text-white">FAQ</span>
            <span className="text-white ml-2">❓</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              よくある
            </span>
            <span className="block text-gray-900 mt-2">
              ご質問
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-50 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-black text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    <span className="text-white text-xl font-bold">+</span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-black">💬</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
              他にご質問がございますか？
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              専門サポートチームが24時間体制でお客様をサポートします。
              どんな小さな疑問でもお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl text-xl font-black hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105">
                📧 メールでお問い合わせ
              </button>
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl text-xl font-black hover:bg-gray-100 transition-all duration-300 shadow-lg">
                💬 チャットサポート
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;