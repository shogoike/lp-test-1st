import { useState } from 'react'
import { CheckCircle, Briefcase, Menu, X, Target, Building2, TrendingUp, ArrowRight, Star, Clock, Shield, HeadphonesIcon, Zap } from 'lucide-react'

// ========== Header ==========
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: '選ばれる理由', href: '#reasons' },
    { label: '転職実績', href: '#success' },
    { label: '無料相談', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">SALES</span>
            <span className="text-xl font-bold text-orange-400">CAREER</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-blue-100 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#cta" className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
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
                <a key={link.href} href={link.href} className="text-blue-100 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#cta" className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-center px-5 py-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
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
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">営業職特化</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              営業で勝つ。<br />
              <span className="text-orange-400">年収200万円UP</span>を狙え。
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              SaaS営業・インサイドセールス・人材営業。<br />
              成長企業で稼げる営業ポジションをご紹介。
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <div>
                  <span className="text-2xl font-bold text-white">+150</span>
                  <span className="text-orange-400 font-bold">万</span>
                  <p className="text-xs text-blue-200">平均年収UP</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <Briefcase className="w-5 h-5 text-orange-400" />
                <div>
                  <span className="text-2xl font-bold text-white">300</span>
                  <span className="text-orange-400 font-bold">社+</span>
                  <p className="text-xs text-blue-200">提携企業</p>
                </div>
              </div>
            </div>

            <a href="#cta" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              無料キャリア相談を予約する
              <span className="text-sm font-normal opacity-80">（60秒で完了）</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-2xl blur-2xl" />
              <img src={`${import.meta.env.BASE_URL}images/S__16564348_0.jpg`} alt="営業マン" className="relative rounded-2xl shadow-2xl w-full object-cover" />
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
      icon: Target,
      title: '営業特化のアドバイザー',
      description: '元トップ営業・営業マネージャー経験者が担当。',
      detail: '営業の現場を知り尽くしたコンサルタントが、あなたの強みを引き出し、最適なポジションをご紹介します。',
    },
    {
      icon: Building2,
      title: '成長企業の求人多数',
      description: 'SaaS・IT・人材業界の急成長企業と提携。',
      detail: 'インセンティブ充実・成果報酬型など、頑張りが評価される環境で年収アップを実現できます。',
    },
    {
      icon: Zap,
      title: '未経験からでも挑戦可能',
      description: '営業未経験OK求人も多数保有。',
      detail: 'インサイドセールスやカスタマーサクセスなど、営業キャリアのスタートを切りたい方もサポートします。',
    },
  ]

  return (
    <section id="reasons" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-medium text-sm tracking-wider mb-3">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            営業職に<span className="text-orange-500">選ばれる</span>理由
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            稼げる営業ポジションへの転職をサポート
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-orange-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-blue-600 group-hover:text-orange-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-800 font-medium mb-4">{reason.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.detail}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      age: 27,
      role: '元ルート営業',
      before: { position: 'ルート営業', salary: 380, company: '食品メーカー' },
      after: { position: 'SaaS営業', salary: 580, company: 'ITベンチャー' },
      improvements: ['提案営業スキルの習得', '成果報酬型への転換', 'IT業界への挑戦'],
      comment: '成果が正当に評価される環境で、モチベーションが上がりました。',
    },
    {
      image: 'S__16564345_0.jpg',
      age: 30,
      role: '元接客業',
      before: { position: '店舗スタッフ', salary: 320, company: 'アパレル' },
      after: { position: 'インサイドセールス', salary: 450, company: 'SaaS企業' },
      improvements: ['営業未経験からの挑戦', 'ビジネススキルの習得', 'キャリアチェンジ成功'],
      comment: '未経験でも丁寧にサポートしてもらえました。年収130万円UP！',
    },
    {
      image: 'S__16564347_0.jpg',
      age: 32,
      role: '元人材営業',
      before: { position: 'RA', salary: 500, company: '中堅人材会社' },
      after: { position: 'エンタープライズ営業', salary: 750, company: '外資系IT' },
      improvements: ['大手企業への提案経験', '英語力の活用', 'マネジメント候補'],
      comment: '経験を活かしながらスケールアップできました。',
    },
  ]

  return (
    <section id="success" className="py-20 lg:py-28 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-medium text-sm tracking-wider mb-3">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">転職成功者の声</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">年収アップを実現した営業パーソンたち</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-800 text-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-700 rounded-full overflow-hidden">
                    <img src={`${import.meta.env.BASE_URL}images/${story.image}`} alt={`${story.age}歳`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-orange-300 font-medium">{story.age}歳・{story.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-blue-300 mb-1">BEFORE</p>
                    <p className="text-sm">{story.before.company}</p>
                    <p className="text-lg font-bold mt-1">年収{story.before.salary}万円</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <div className="flex-1 text-center">
                    <p className="text-xs text-orange-300 mb-1">AFTER</p>
                    <p className="text-sm">{story.after.company}</p>
                    <p className="text-lg font-bold mt-1 text-orange-400">年収{story.after.salary}万円</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 bg-orange-500/20 rounded-lg py-2">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-bold">+{story.after.salary - story.before.salary}万円 UP</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-3">転職のポイント</h4>
                <ul className="space-y-2 mb-4">
                  {story.improvements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 rounded-lg p-4 mt-4">
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
    <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">今すぐ60秒で完了</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            営業力を活かして、<br />
            <span className="text-orange-400">年収を最大化</span>しよう。
          </h2>

          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            元トップ営業のコンサルタントが、<br className="hidden md:block" />
            あなたの市場価値を最大化するポジションをご紹介します。
          </p>

          <a href="#contact" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1">
            無料キャリア相談に申し込む
            <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">60秒で完了</span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-blue-200">
              <Shield className="w-5 h-5 text-orange-400" />
              <span className="text-sm">完全無料</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <HeadphonesIcon className="w-5 h-5 text-orange-400" />
              <span className="text-sm">元営業が対応</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-sm">平均年収UP+150万</span>
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
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">SALES</span>
              <span className="text-xl font-bold text-orange-400">CAREER</span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              営業職特化の<br />キャリア支援サービス
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">法的情報</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">許可情報</h4>
            <div className="flex items-start gap-3 bg-blue-800 rounded-lg p-4">
              <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-200">有料職業紹介事業許可番号</p>
                <p className="text-lg font-bold text-white">13-ユ-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-blue-200">© 2024 Sales Career. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// ========== Main Page ==========
export default function SalesPage() {
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
