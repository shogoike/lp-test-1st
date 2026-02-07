import { CheckCircle, Briefcase } from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-gold-400 text-sm font-medium">30代専門キャリア支援</span>
            </div>

            {/* Main Copy */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              30代、その先のキャリアを
              <br />
              <span className="text-gold-400">『確信』</span>に変える。
            </h1>

            {/* Sub Copy */}
            <p className="text-lg md:text-xl text-navy-200 mb-8 leading-relaxed">
              満足度98%。あなたの経験を、
              <br className="hidden md:block" />
              最高精度の書類添削で理想の内定へ繋ぐ。
            </p>

            {/* Stats Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <CheckCircle className="w-5 h-5 text-gold-400" />
                <div>
                  <span className="text-2xl font-bold text-white">98</span>
                  <span className="text-gold-400 font-bold">%</span>
                  <p className="text-xs text-navy-200">満足度</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <Briefcase className="w-5 h-5 text-gold-400" />
                <div>
                  <span className="text-2xl font-bold text-white">150</span>
                  <span className="text-gold-400 font-bold">件+</span>
                  <p className="text-xs text-navy-200">非公開求人</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              無料キャリア相談に申し込む
              <span className="text-sm font-normal opacity-80">（30秒で完了）</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl blur-2xl" />
              <img
                src={`${import.meta.env.BASE_URL}images/S__16564348_0.jpg`}
                alt="キャリアコンサルタント"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
