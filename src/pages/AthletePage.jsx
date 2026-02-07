import { useState } from 'react'
import { CheckCircle, Briefcase, Menu, X, UserCheck, Building2, FileEdit, ArrowRight, TrendingUp, Star, Clock, Shield, HeadphonesIcon } from 'lucide-react'

// ========== Header ==========
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: '選ばれる理由', href: '#reasons' },
    { label: '転職実績', href: '#success' },
    { label: '無料相談', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">ATHLETE</span>
            <span className="text-xl font-bold text-emerald-400">CAREER</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-emerald-100 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#cta" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
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
                <a key={link.href} href={link.href} className="text-emerald-100 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#cta" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-center px-5 py-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
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
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-300 text-sm font-medium">体育会・アスリート専門</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              グラウンドで輝いた君へ。<br />
              <span className="text-emerald-400">次のステージ</span>でも主役になれ。
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
              競技で培った強さを、ビジネスの武器に変える。<br />
              未経験から年収UPを実現するセカンドキャリア支援。
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-2xl font-bold text-white">98</span>
                  <span className="text-emerald-400 font-bold">%</span>
                  <p className="text-xs text-emerald-200">満足度</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-2xl font-bold text-white">500</span>
                  <span className="text-emerald-400 font-bold">名+</span>
                  <p className="text-xs text-emerald-200">支援実績</p>
                </div>
              </div>
            </div>

            <a href="#cta" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              無料キャリア相談を予約する
              <span className="text-sm font-normal opacity-80">（60秒で完了）</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-2xl blur-2xl" />
              <img src={`${import.meta.env.BASE_URL}images/S__16564348_0.jpg`} alt="アスリート" className="relative rounded-2xl shadow-2xl w-full object-cover" />
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
      icon: UserCheck,
      title: '元アスリートが担当',
      description: 'コンサルタント全員が競技経験者。あなたの強みを本当に理解できます。',
      detail: '「忍耐力」「目標達成力」「チームワーク」—競技で培った力をビジネスの言葉に変換し、企業にアピールします。',
    },
    {
      icon: Building2,
      title: 'アスリート採用企業と直結',
      description: 'スポーツ経験者を積極採用する企業150社以上と提携。',
      detail: '営業・IT・人材業界を中心に、未経験OKでアスリートの特性を評価する企業をご紹介します。',
    },
    {
      icon: FileEdit,
      title: '競技継続もサポート',
      description: 'デュアルキャリア対応。リモートワーク×競技継続を実現。',
      detail: '現役続行しながら働きたい方も、完全引退後の方も、あなたのライフスタイルに合った働き方を提案します。',
    },
  ]

  return (
    <section id="reasons" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium text-sm tracking-wider mb-3">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            アスリートに<span className="text-emerald-600">選ばれる</span>理由
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            競技経験を「強み」に変えるセカンドキャリア支援
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-8 bg-emerald-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-800 font-medium mb-4">{reason.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.detail}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      image: 'S__16564344_0.png',
      age: 26,
      sport: '元Jリーガー',
      before: { position: 'プロサッカー選手', salary: 380, company: 'J2クラブ' },
      after: { position: '法人営業', salary: 520, company: '大手IT企業' },
      improvements: ['自己PRの言語化', '競技経験の棚卸し', '面接での伝え方改善'],
      comment: '競技で培った「目標達成力」を営業で活かせています。',
    },
    {
      image: 'S__16564345_0.jpg',
      age: 28,
      sport: '元実業団陸上',
      before: { position: '実業団選手', salary: 320, company: '実業団チーム' },
      after: { position: 'キャリアアドバイザー', salary: 480, company: '人材会社' },
      improvements: ['未経験職種への挑戦', '強みの再定義', 'ビジネスマナー習得'],
      comment: '同じ境遇の人を支援できる仕事にやりがいを感じています。',
    },
    {
      image: 'S__16564347_0.jpg',
      age: 24,
      sport: '体育会サッカー部',
      before: { position: '学生（就活）', salary: 0, company: '大学4年' },
      after: { position: 'SaaS営業', salary: 450, company: 'ITベンチャー' },
      improvements: ['ガクチカの作成', '競技経験のアピール', '業界研究サポート'],
      comment: '体育会の経験を高く評価してもらえました。',
    },
  ]

  return (
    <section id="success" className="py-20 lg:py-28 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium text-sm tracking-wider mb-3">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">転職成功者の声</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">未経験から年収UPを実現したアスリートたち</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-800 text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-emerald-700 rounded-full overflow-hidden">
                    <img src={`${import.meta.env.BASE_URL}images/${story.image}`} alt={`${story.age}歳`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-emerald-300 font-medium">{story.age}歳・{story.sport}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-emerald-300 mb-1">BEFORE</p>
                    <p className="text-sm">{story.before.company}</p>
                    <p className="text-lg font-bold mt-1">
                      {story.before.salary > 0 ? `年収${story.before.salary}万円` : '—'}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div className="flex-1 text-center">
                    <p className="text-xs text-emerald-300 mb-1">AFTER</p>
                    <p className="text-sm">{story.after.company}</p>
                    <p className="text-lg font-bold mt-1 text-emerald-400">年収{story.after.salary}万円</p>
                  </div>
                </div>

                {story.before.salary > 0 && (
                  <div className="flex items-center justify-center gap-2 mt-4 bg-emerald-500/20 rounded-lg py-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">+{story.after.salary - story.before.salary}万円 UP</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-3">サポート内容</h4>
                <ul className="space-y-2 mb-4">
                  {story.improvements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-50 rounded-lg p-4 mt-4">
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
    <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">今すぐ60秒で完了</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            競技経験を、<br />
            <span className="text-emerald-400">キャリアの武器</span>に変える。
          </h2>

          <p className="text-lg text-emerald-100 mb-10 leading-relaxed">
            元アスリートのコンサルタントが、<br className="hidden md:block" />
            あなたのセカンドキャリアを全力でサポートします。
          </p>

          <a href="#contact" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1">
            無料キャリア相談に申し込む
            <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">60秒で完了</span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-emerald-200">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">完全無料</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-200">
              <HeadphonesIcon className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">元アスリートが対応</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-200">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">オンライン面談OK</span>
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
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">ATHLETE</span>
              <span className="text-xl font-bold text-emerald-400">CAREER</span>
            </div>
            <p className="text-sm text-emerald-200 leading-relaxed">
              体育会・アスリート専門の<br />キャリア支援サービス
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">法的情報</h4>
            <ul className="space-y-2 text-sm text-emerald-200">
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">許可情報</h4>
            <div className="flex items-start gap-3 bg-emerald-800 rounded-lg p-4">
              <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-emerald-200">有料職業紹介事業許可番号</p>
                <p className="text-lg font-bold text-white">13-ユ-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-emerald-300">© 2024 Athlete Career. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// ========== Main Page ==========
export default function AthletePage() {
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
