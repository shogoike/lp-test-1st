import { ArrowRight, TrendingUp, Star } from 'lucide-react'

const stories = [
  {
    image: 'S__16564344_0.png',
    age: 32,
    gender: '男性',
    before: {
      position: 'IT営業',
      salary: 500,
      company: '中堅SIer',
    },
    after: {
      position: 'セールスリーダー',
      salary: 650,
      company: '大手SaaS企業',
    },
    improvements: [
      '自己PRの言語化',
      '強みの再定義',
      '面接での伝え方改善',
    ],
    comment: '書類添削で自分の強みが明確になり、面接でも自信を持って話せるようになりました。',
  },
  {
    image: 'S__16564345_0.jpg',
    age: 35,
    gender: '女性',
    before: {
      position: '経理担当',
      salary: 450,
      company: '中小メーカー',
    },
    after: {
      position: '経理マネージャー',
      salary: 620,
      company: '上場企業',
    },
    improvements: [
      'マネジメント経験の訴求',
      '業務改善実績の数値化',
      'キャリアビジョンの明確化',
    ],
    comment: '担当者が最後まで寄り添ってくれたおかげで、理想以上の転職ができました。',
  },
  {
    image: 'S__16564347_0.jpg',
    age: 38,
    gender: '男性',
    before: {
      position: 'Webディレクター',
      salary: 550,
      company: '制作会社',
    },
    after: {
      position: 'プロダクトマネージャー',
      salary: 750,
      company: 'メガベンチャー',
    },
    improvements: [
      'PM経験への読み替え',
      '事業貢献の可視化',
      '志望動機のブラッシュアップ',
    ],
    comment: '年収200万円アップは想像以上。書類の完成度が全てを変えてくれました。',
  },
]

function SuccessStoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-medium text-sm tracking-wider mb-3">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            内定実績
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            30代のキャリアチェンジを成功させた方々の事例をご紹介します。
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="bg-navy-900 text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-navy-700 rounded-full overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${story.image}`}
                      alt={`${story.age}歳${story.gender}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gold-400 font-medium">{story.age}歳・{story.gender}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Before/After */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-navy-300 mb-1">BEFORE</p>
                    <p className="text-sm">{story.before.company}</p>
                    <p className="text-xs text-navy-300">{story.before.position}</p>
                    <p className="text-lg font-bold mt-1">
                      年収<span className="text-xl">{story.before.salary}</span>万円
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gold-400 flex-shrink-0" />
                  <div className="flex-1 text-center">
                    <p className="text-xs text-gold-400 mb-1">AFTER</p>
                    <p className="text-sm">{story.after.company}</p>
                    <p className="text-xs text-navy-300">{story.after.position}</p>
                    <p className="text-lg font-bold mt-1 text-gold-400">
                      年収<span className="text-xl">{story.after.salary}</span>万円
                    </p>
                  </div>
                </div>

                {/* Salary Increase Badge */}
                <div className="flex items-center justify-center gap-2 mt-4 bg-gold-500/20 rounded-lg py-2">
                  <TrendingUp className="w-5 h-5 text-gold-400" />
                  <span className="text-gold-400 font-bold">
                    +{story.after.salary - story.before.salary}万円 UP
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-sm font-bold text-navy-900 mb-3">
                  改善ポイント
                </h4>
                <ul className="space-y-2 mb-4">
                  {story.improvements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Comment */}
                <div className="bg-navy-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-navy-700 italic">
                    "{story.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection
