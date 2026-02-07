import { UserCheck, Building2, FileEdit } from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: '専任担当制',
    description: '初回面談から内定まで、一貫した伴走型サポート。',
    detail: 'あなたのキャリアを深く理解した担当者が、転職活動の最初から最後まで責任を持ってサポート。何度も同じ説明をする必要はありません。',
  },
  {
    icon: Building2,
    title: '企業直結パイプ',
    description: '経営層から直接依頼を受ける、質の高い非公開求人。',
    detail: '大手転職サイトには掲載されない、経営者・役員クラスからの直接依頼案件を150件以上保有。あなただけにマッチする求人をご紹介します。',
  },
  {
    icon: FileEdit,
    title: '高精度な書類添削',
    description: '通過率が劇的に変わる、業界熟知のプロによる添削。',
    detail: '書類選考の通過率を2倍以上に高める、業界15年のプロによる添削。あなたの強みを最大限に引き出す職務経歴書を一緒に作成します。',
  },
]

function ReasonsSection() {
  return (
    <section id="reasons" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-medium text-sm tracking-wider mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            選ばれる<span className="text-gold-500">3つ</span>の理由
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            30代のキャリア転職を成功に導く、私たちだけの強みをご紹介します。
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white border border-navy-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-8 bg-navy-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-navy-50 group-hover:bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-navy-700 group-hover:text-gold-500 transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-navy-800 font-medium mb-4">
                {reason.description}
              </p>
              <p className="text-navy-600 text-sm leading-relaxed">
                {reason.detail}
              </p>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonsSection
