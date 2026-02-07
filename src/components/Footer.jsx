import { Shield } from 'lucide-react'

function Footer({ onOpenCommercial, onOpenPrivacy }) {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">CAREER</span>
              <span className="text-xl font-bold text-gold-400">AGENT</span>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed">
              30代専門のキャリア支援サービス。<br />
              あなたの経験を最大限に活かした<br />
              転職をサポートします。
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-4">法的情報</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenCommercial}
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  特定商取引法に基づく表記
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </button>
              </li>
            </ul>
          </div>

          {/* License Info */}
          <div>
            <h4 className="font-bold text-white mb-4">許可情報</h4>
            <div className="flex items-start gap-3 bg-navy-800 rounded-lg p-4">
              <Shield className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-navy-300">有料職業紹介事業許可番号</p>
                <p className="text-lg font-bold text-white">13-ユ-XXXXXX</p>
                <p className="text-xs text-navy-400 mt-1">厚生労働大臣許可</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-navy-400">
            <p>© 2024 Career Agent Inc. All rights reserved.</p>
            <p>株式会社キャリアエージェント</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
