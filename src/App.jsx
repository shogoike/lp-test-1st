import { useState } from 'react'
import './App.css'
import StepForm from './components/StepForm'

function App() {
  const [showForm, setShowForm] = useState(false)

  // スマホ用フォームを表示
  if (showForm) {
    return <StepForm />
  }

  return (
    <div className="lp-container">
      {/* ファーストビュー（結） */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">筑波大学出身アスリート専門</p>
          <h1 className="hero-title">
            グラウンドで輝いた君へ。<br />
            <span className="highlight">次のステージでも、主役になれ。</span>
          </h1>
          <p className="hero-subtitle">
            筑波大学出身の元トップアスリートが、<br />
            あなたの転職を全力でサポート。<br />
            競技で培った強さを、ビジネスの武器に変える。
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">転職成功率</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">支援実績</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150万</span>
              <span className="stat-label">平均年収UP</span>
            </div>
          </div>
          <button className="cta-button" onClick={() => setShowForm(true)}>
            無料キャリア相談を予約する
          </button>
        </div>
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}images/S__16564348_0.jpg`} alt="筑波大学出身アスリート" />
          <div className="hero-image-caption">
            筑波大学蹴球部出身・元Jリーガー
          </div>
        </div>
      </section>

      {/* 共感と課題（起） */}
      <section className="problems">
        <h2 className="section-title">こんな不安、ありませんか？</h2>
        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-icon">?</div>
            <h3>引退後のキャリアが見えない</h3>
            <p>競技一筋でやってきたからこそ、社会に出てから何ができるのか不安...</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">!</div>
            <h3>一般企業の文化がわからない</h3>
            <p>ビジネスマナーや企業でのコミュニケーションに自信がない...</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">...</div>
            <h3>自分の強みが言語化できない</h3>
            <p>競技で培った経験をどうアピールすればいいのかわからない...</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">X</div>
            <h3>相談できる人がいない</h3>
            <p>アスリートの気持ちを理解してくれる転職エージェントが見つからない...</p>
          </div>
        </div>
      </section>

      {/* 解決策（承） */}
      <section className="solution">
        <h2 className="section-title">なぜ私たちが選ばれるのか</h2>
        <div className="solution-content">
          <div className="solution-image">
            <img src={`${import.meta.env.BASE_URL}images/S__16564346_0.png`} alt="コンサルタント" />
          </div>
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-text">
                <h3>全員が元アスリート出身</h3>
                <p>コンサルタント全員がプロ・実業団経験者。あなたの気持ちを本当に理解できます。</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-text">
                <h3>競技経験を「強み」に変換</h3>
                <p>目標達成力、チームワーク、プレッシャー耐性...アスリートならではの価値を言語化します。</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-text">
                <h3>300社以上の独自求人</h3>
                <p>アスリート採用に積極的な企業との独自ネットワーク。非公開求人も多数。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンサルタント紹介 */}
      <section className="consultants">
        <h2 className="section-title">専任コンサルタント</h2>
        <p className="section-subtitle">筑波大学出身の元トップアスリートがあなたを担当</p>
        <div className="consultants-grid">
          <div className="consultant-card">
            <img src={`${import.meta.env.BASE_URL}images/S__16564344_0.png`} alt="池松 大騎" />
            <h3>池松 大騎</h3>
            <p className="consultant-career">筑波大学蹴球部 → 元Jリーガー</p>
            <p className="consultant-message">「筑波で4年間サッカーに打ち込み、Jリーグでプレーした経験があります。引退後の不安、僕も同じでした。だからこそ、本気で寄り添えます。」</p>
          </div>
          <div className="consultant-card">
            <img src={`${import.meta.env.BASE_URL}images/S__16564345_0.jpg`} alt="高橋 翔太" />
            <h3>高橋 翔太</h3>
            <p className="consultant-career">筑波大学陸上部 → 元実業団選手</p>
            <p className="consultant-message">「アスリートの強みは、企業が本当に求めているもの。それを言語化し、最高の転職を実現させます。」</p>
          </div>
        </div>
      </section>

      {/* 社会的証明（転） */}
      <section className="testimonials">
        <h2 className="section-title">転職成功者の声</h2>
        <p className="section-subtitle light">筑波大出身アスリートの転職実績</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={`${import.meta.env.BASE_URL}images/S__16564347_0.jpg`} alt="転職成功者A" />
              <div className="testimonial-info">
                <h3>I.K さん（26歳）</h3>
                <p>筑波大蹴球部 → J2 → 大手IT企業</p>
              </div>
            </div>
            <div className="testimonial-result">
              <span className="before">年収380万</span>
              <span className="arrow">→</span>
              <span className="after">年収580万</span>
            </div>
            <p className="testimonial-text">
              「筑波で4年間、Jで3年間サッカーに捧げました。引退後は正直不安しかなかったけど、
              同じ筑波出身のコンサルタントが親身になってくれて。今は営業として新しい目標に向かって走っています。」
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={`${import.meta.env.BASE_URL}images/S__16564349_0.jpg`} alt="転職成功者B" />
              <div className="testimonial-info">
                <h3>M.T さん（29歳）</h3>
                <p>筑波大蹴球部 → J1 → 外資系コンサル</p>
              </div>
            </div>
            <div className="testimonial-result">
              <span className="before">年収450万</span>
              <span className="arrow">→</span>
              <span className="after">年収750万</span>
            </div>
            <p className="testimonial-text">
              「キャプテンとしてチームを引っ張った経験が、まさかコンサルで活きるとは。
              『お前ならできる』と背中を押してくれたコンサルタントには感謝しかない。筑波の先輩だからこそ信頼できました。」
            </p>
          </div>
        </div>
      </section>

      {/* サポートの流れ */}
      <section className="process">
        <h2 className="section-title">サポートの流れ</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>無料相談</h3>
            <p>オンラインで気軽にご相談。現状のヒアリングと今後の方向性を一緒に考えます。</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>強み分析</h3>
            <p>競技経験を棚卸しし、ビジネスで活きる強みを言語化。自己PRを一緒に作成します。</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>求人紹介</h3>
            <p>あなたに最適な企業をご紹介。面接対策も徹底サポートします。</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>内定・入社</h3>
            <p>条件交渉から入社後のフォローまで。新しいキャリアのスタートを見届けます。</p>
          </div>
        </div>
      </section>

      {/* クロージング */}
      <section className="cta" id="contact">
        <div className="cta-content">
          <h2>まずは3分のキャリア診断から</h2>
          <p>あなたの市場価値を可視化します</p>

          {/* デスクトップ: ボタンでフォーム画面に遷移 */}
          <div className="cta-buttons">
            <button className="cta-main-button" onClick={() => setShowForm(true)}>
              <span className="button-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </span>
              LINEで無料相談する
              <span className="button-badge">最短60秒で完了</span>
            </button>
          </div>

          <div className="cta-benefits">
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>非公開求人の案内が届く</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>元アスリートが直接サポート</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>完全無料・個人情報は厳重管理</span>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-logo">ATHLETE CAREER</p>
          <p className="footer-copyright">© 2024 Athlete Career Support. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
