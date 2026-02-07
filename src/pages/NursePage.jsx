import { useState } from 'react'
import { CheckCircle, Briefcase, Menu, X, Heart, Building2, Clock, ArrowRight, TrendingUp, Star, Shield, HeadphonesIcon, Moon } from 'lucide-react'

// ========== Header ==========
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: '選ばれる理由', href: '#reasons' },
    { label: '転職実績', href: '#success' },
    { label: '無料相談', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pink-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">NURSE</span>
            <span className="text-xl font-bold text-pink-300">CAREER</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-pink-100 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#cta" className="bg-pink-500 hover:bg-pink-400 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
              無料相談に申し込む
            </a>
          </nav>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-pink-100 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#cta" className="bg-pink-500 hover:bg-pink-400 text-white font-bold text-center px-5 py-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                無料相談に申し込む
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

// ========== Hero ==========
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-pink-300" />
              <span className="text-pink-200 text-sm font-medium">看護師・医療従事者専門</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              「夜勤がつらい」を終わりに。<br />
              <span className="text-pink-300">あなたらしい働き方</span>を叶える。
            </h1>

            <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed">
              病棟勤務から企業看護師へ。日勤のみ・土日休み。<br />
              ワークライフバランスを実現する転職をサポート。
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <CheckCircle className="w-5 h-5 text-pink-300" />
                <div>
                  <span className="text-2xl font-bold text-white">98</span>
                  <span className="text-pink-300 font-bold">%</span>
                  <p className="text-xs text-pink-200">満足度</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <Moon className="w-5 h-5 text-pink-300" />
                <div>
                  <span className="text-2xl font-bold text-white">70</span>
                  <span className="text-pink-300 font-bold">%</span>
                  <p className="text-xs text-pink-200">夜勤なし転職</p>
                </div>
              </div>
            </div>

            <a href="#cta" className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              無料キャリア相談を予約する
              <span className="text-sm font-normal opacity-80">（60秒で完了）</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-400/20 rounded-2xl blur-2xl" />
              <img src={`${import.meta.env.BASE_URL}images/S__16564346_0.png`} alt="看護師" className="relative rounded-2xl shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== Reasons ==========
function ReasonsSection() {
  const reasons = [
    {
      icon: Heart,
      title: '医療業界専門アドバイザー',
      description: '元看護師・医療従事者のコンサルタントが担当。',
      detail: '現場の大変さを知っているからこそ、あなたの気持ちに寄り添った提案ができます。「辞めたい」を「転職してよかった」に変えます。',
    },
    {
      icon: Building2,
      title: '病院以外の選択肢も豊富',
      description: '企業看護師・クリニック・健診センターなど多数。',
      detail: '病棟だけが看護師の働く場所ではありません。土日休み、日勤のみ、高年収など、あなたの希望に合った職場をご紹介。',
    },
    {
      icon: Clock,
      title: 'ワークライフバランス重視',
      description: '夜勤なし・残業少なめ・有給取得率の高い求人。',
      detail: '「プライベートを大切にしたい」「家庭と両立したい」そんな希望を叶える求人を厳選してご紹介します。',
    },
  ]

  return (
    <section id="reasons" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-pink-600 font-medium text-sm tracking-wider mb-3">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            看護師に<span className="text-pink-600">選ばれる</span>理由
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            あなたらしい働き方を見つけるサポート
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-8 bg-pink-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div className="w-14 h-14 bg-pink-50 group-hover:bg-pink-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-800 font-medium mb-4">{reason.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.detail}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== Success Stories ==========
function SuccessStoriesSection() {
  const stories = [
    {
      image: 'S__16564345_0.jpg',
      age: 28,
      role: '元病棟看護師',
      before: { position: '病棟看護師', salary: 420, company: '総合病院（夜勤あり）' },
      after: { position: '企業看護師', salary: 480, company: '大手メーカー（日勤のみ）' },
      improvements: ['夜勤なしで年収UP', '土日祝休み', '残業ほぼなし'],
      comment: '夜勤がなくなり、生活リズムが整いました。年収も上がって大満足です。',
    },
    {
      image: 'S__16564344_0.png',
      age: 32,
      role: '元ICU看護師',
      before: { position: 'ICU看護師', salary: 480, company: '大学病院' },
      after: { position: '治験コーディネーター', salary: 550, company: 'CRO企業' },
      improvements: ['臨床経験を活かせる', 'キャリアアップ', 'ワークライフバランス改善'],
      comment: 'ICUでの経験が評価され、新しいキャリアを築けました。',
    },
    {
      image: 'S__16564347_0.jpg',
      age: 35,
      role: '元外来看護師',
      before: { position: '外来看護師', salary: 380, company: 'クリニック' },
      after: { position: '健診センター', salary: 420, company: '健診専門機関' },
      improvements: ['完全予約制で余裕', '18時退勤', '有給取得率90%'],
      comment: '子育てと両立しやすくなりました。毎日定時で帰れます。',
    },
  ]

  return (
    <section id="success" className="py-20 lg:py-28 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-pink-600 font-medium text-sm tracking-wider mb-3">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">転職成功者の声</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">ワークライフバランスを実現した看護師たち</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-pink-800 text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-pink-700 rounded-full overflow-hidden">
                    <img src={`${import.meta.env.BASE_URL}images/${story.image}`} alt={`${story.age}歳`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-pink-200 font-medium">{story.age}歳・{story.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-pink-300 text-pink-300" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-pink-300 mb-1">BEFORE</p>
                    <p className="text-sm">{story.before.company}</p>
                    <p className="text-lg font-bold mt-1">年収{story.before.salary}万円</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-pink-300 flex-shrink-0" />
                  <div className="flex-1 text-center">
                    <p className="text-xs text-pink-300 mb-1">AFTER</p>
                    <p className="text-sm">{story.after.company}</p>
                    <p className="text-lg font-bold mt-1 text-pink-300">年収{story.after.salary}万円</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 bg-pink-500/20 rounded-lg py-2">
                  <TrendingUp className="w-5 h-5 text-pink-300" />
                  <span className="text-pink-300 font-bold">+{story.after.salary - story.before.salary}万円 UP</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-3">改善ポイント</h4>
                <ul className="space-y-2 mb-4">
                  {story.improvements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-pink-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700 italic">"{story.comment}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== CTA ==========
function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-pink-300" />
            <span className="text-pink-200 text-sm font-medium">今すぐ60秒で完了</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            「夜勤疲れ」から解放される<br />
            <span className="text-pink-300">新しい働き方</span>を見つけよう。
          </h2>

          <p className="text-lg text-pink-100 mb-10 leading-relaxed">
            元看護師のコンサルタントが、<br className="hidden md:block" />
            あなたの希望に合った職場をご紹介します。
          </p>

          <a href="#contact" className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1">
            無料キャリア相談に申し込む
            <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">60秒で完了</span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-pink-200">
              <Shield className="w-5 h-5 text-pink-300" />
              <span className="text-sm">完全無料</span>
            </div>
            <div className="flex items-center gap-2 text-pink-200">
              <HeadphonesIcon className="w-5 h-5 text-pink-300" />
              <span className="text-sm">元看護師が対応</span>
            </div>
            <div className="flex items-center gap-2 text-pink-200">
              <Moon className="w-5 h-5 text-pink-300" />
              <span className="text-sm">夜勤なし求人多数</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== Footer ==========
function Footer() {
  return (
    <footer className="bg-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">NURSE</span>
              <span className="text-xl font-bold text-pink-300">CAREER</span>
            </div>
            <p className="text-sm text-pink-200 leading-relaxed">
              看護師・医療従事者専門の<br />キャリア支援サービス
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">法的情報</h4>
            <ul className="space-y-2 text-sm text-pink-200">
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">許可情報</h4>
            <div className="flex items-start gap-3 bg-pink-800 rounded-lg p-4">
              <Shield className="w-5 h-5 text-pink-300 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-pink-200">有料職業紹介事業許可番号</p>
                <p className="text-lg font-bold text-white">13-ユ-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-pink-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-pink-200">© 2024 Nurse Career. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// ========== Main Page ==========
export default function NursePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ReasonsSection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer />
    </div>
  )
}
