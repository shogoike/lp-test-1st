import { useState } from 'react'
import { X } from 'lucide-react'

// 特定商取引法に基づく表記
export function CommercialTransaction({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy-400 hover:text-navy-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-navy-100 pb-4">
            特定商取引法に基づく表記
          </h2>

          <div className="space-y-6 text-navy-700">
            <div>
              <h3 className="font-bold text-navy-900 mb-2">事業者名</h3>
              <p>株式会社キャリアエージェント</p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">代表者</h3>
              <p>代表取締役 山田 太郎</p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">所在地</h3>
              <p>〒100-0001<br />東京都千代田区千代田1-1-1 ○○ビル5F</p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">電話番号</h3>
              <p>03-XXXX-XXXX<br />
              <span className="text-sm text-navy-500">（受付時間：平日10:00〜19:00）</span></p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">メールアドレス</h3>
              <p>info@example.com</p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">サービス料金</h3>
              <p>求職者様のご利用は完全無料です。<br />
              <span className="text-sm text-navy-500">※ 採用企業様からの紹介手数料により運営しております。</span></p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">サービス提供時期</h3>
              <p>お申し込み後、3営業日以内に担当者よりご連絡いたします。</p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">キャンセル・解約について</h3>
              <p>サービスのご利用はいつでも無料でキャンセル・解約が可能です。<br />
              担当者へのお申し出、またはメールにてご連絡ください。</p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 mb-2">有料職業紹介事業許可番号</h3>
              <p className="text-lg font-medium text-navy-900">13-ユ-XXXXXX</p>
              <p className="text-sm text-navy-500">厚生労働大臣許可</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// プライバシーポリシー
export function PrivacyPolicy({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy-400 hover:text-navy-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 border-b border-navy-100 pb-4">
            プライバシーポリシー
          </h2>

          <div className="space-y-8 text-navy-700 text-sm leading-relaxed">
            <p>
              株式会社キャリアエージェント（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
              以下のプライバシーポリシーに基づき、適切な取り扱いと保護に努めます。
            </p>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">1. 個人情報の定義</h3>
              <p>
                本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、
                氏名、生年月日、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できるものをいいます。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">2. 個人情報の取得</h3>
              <p>当社は、以下の場合に個人情報を取得いたします。</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>キャリア相談のお申し込み時</li>
                <li>会員登録時</li>
                <li>お問い合わせ時</li>
                <li>求人へのご応募時</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">3. 個人情報の利用目的</h3>
              <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>転職支援サービスの提供</li>
                <li>求人情報のご案内</li>
                <li>キャリアカウンセリングの実施</li>
                <li>採用企業への推薦・紹介</li>
                <li>サービス向上のための分析・調査</li>
                <li>お問い合わせへの対応</li>
                <li>関連サービスのご案内</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">4. 個人情報の第三者提供</h3>
              <p>
                当社は、お客様の同意を得た場合、または法令に基づく場合を除き、
                個人情報を第三者に提供することはありません。
              </p>
              <p className="mt-2">
                ただし、転職支援サービスにおいては、お客様の同意のもと、
                応募先企業に対して履歴書・職務経歴書等の情報を提供いたします。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">5. 個人情報の管理</h3>
              <p>
                当社は、個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のために、
                必要かつ適切な措置を講じます。また、個人情報を取り扱う従業員に対して、
                適切な監督を行います。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">6. 個人情報の開示・訂正・削除</h3>
              <p>
                お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除を請求することができます。
                ご希望の場合は、下記お問い合わせ窓口までご連絡ください。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">7. Cookieの使用について</h3>
              <p>
                当社のウェブサイトでは、サービス向上のためCookieを使用しています。
                Cookieはブラウザの設定により無効にすることができますが、
                一部のサービスがご利用いただけなくなる場合があります。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">8. プライバシーポリシーの変更</h3>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更した場合は、当ウェブサイトにて公表いたします。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-navy-900 text-base mb-3">9. お問い合わせ窓口</h3>
              <p>
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="mt-3 bg-navy-50 p-4 rounded-lg">
                <p className="font-medium text-navy-900">株式会社キャリアエージェント 個人情報管理責任者</p>
                <p className="mt-1">メール：privacy@example.com</p>
                <p>電話：03-XXXX-XXXX（平日10:00〜19:00）</p>
              </div>
            </div>

            <div className="pt-4 border-t border-navy-100 text-navy-500">
              <p>制定日：2024年1月1日</p>
              <p>最終改定日：2024年1月1日</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 法的ページを管理するコンテキスト
export function useLegalModal() {
  const [activeModal, setActiveModal] = useState(null)

  const openCommercialTransaction = () => setActiveModal('commercial')
  const openPrivacyPolicy = () => setActiveModal('privacy')
  const closeModal = () => setActiveModal(null)

  return {
    activeModal,
    openCommercialTransaction,
    openPrivacyPolicy,
    closeModal,
  }
}
