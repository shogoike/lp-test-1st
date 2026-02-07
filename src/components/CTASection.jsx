import { Clock, Shield, HeadphonesIcon } from 'lucide-react'

function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">今すぐ30秒で完了</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            30代の今だからこそ、
            <br />
            <span className="text-gold-400">理想のキャリア</span>を掴む。
          </h2>

          <p className="text-lg text-navy-200 mb-10 leading-relaxed">
            あなたの経験と強みを最大限に活かした転職を、
            <br className="hidden md:block" />
            専任コンサルタントが全力でサポートします。
          </p>

          {/* CTA Button */}
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-1"
          >
            無料キャリア相談に申し込む
            <span className="bg-navy-900/20 text-navy-900 text-sm font-medium px-3 py-1 rounded-full">
              30秒で完了
            </span>
          </a>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-navy-300">
              <Shield className="w-5 h-5 text-gold-400" />
              <span className="text-sm">個人情報厳守</span>
            </div>
            <div className="flex items-center gap-2 text-navy-300">
              <HeadphonesIcon className="w-5 h-5 text-gold-400" />
              <span className="text-sm">専任担当がサポート</span>
            </div>
            <div className="flex items-center gap-2 text-navy-300">
              <Clock className="w-5 h-5 text-gold-400" />
              <span className="text-sm">平日夜・土日も対応</span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={`${import.meta.env.BASE_URL}images/consultant.jpg`}
                alt="キャリアコンサルタント"
                className="w-20 h-20 rounded-full object-cover border-2 border-gold-400"
              />
              <div className="text-left">
                <p className="text-white font-medium mb-2">
                  30代のキャリア転職は、人生を変える大きな決断。
                  だからこそ、一人で悩まず私たちにご相談ください。
                </p>
                <p className="text-gold-400 text-sm">
                  キャリアコンサルタント・転職支援歴15年
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
