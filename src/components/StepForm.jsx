import { useState, useEffect, useRef } from 'react'
import './StepForm.css'

const LINE_URL = 'https://line.me/R/ti/p/@YOUR_LINE_ID' // LINE公式アカウントのURL

function StepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: 希望選択
    sport: '',
    timing: '',
    hope: '',
    // Step 2: 基本情報
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    address: '',
  })
  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState({})
  const [isAddressLoading, setIsAddressLoading] = useState(false)

  const firstInputRef = useRef(null)

  // ステップ変更時にオートフォーカス
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [currentStep])

  // 郵便番号から住所自動補完
  const fetchAddress = async (postalCode) => {
    const cleaned = postalCode.replace(/-/g, '')
    if (cleaned.length !== 7) return

    setIsAddressLoading(true)
    try {
      const response = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleaned}`
      )
      const data = await response.json()
      if (data.results) {
        const result = data.results[0]
        const address = `${result.address1}${result.address2}${result.address3}`
        setFormData((prev) => ({ ...prev, address }))
        setValidated((prev) => ({ ...prev, address: true }))
      }
    } catch (error) {
      console.error('住所取得エラー:', error)
    }
    setIsAddressLoading(false)
  }

  // バリデーション
  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      case 'phone':
        return /^[0-9-]{10,13}$/.test(value.replace(/-/g, ''))
      case 'postalCode':
        return /^[0-9]{3}-?[0-9]{4}$/.test(value)
      case 'name':
        return value.trim().length >= 2
      default:
        return value.trim().length > 0
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // リアルタイムバリデーション
    const isValid = validateField(name, value)
    setValidated((prev) => ({ ...prev, [name]: isValid }))
    if (isValid) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    // 郵便番号自動補完
    if (name === 'postalCode' && value.replace(/-/g, '').length === 7) {
      fetchAddress(value)
    }
  }

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setValidated((prev) => ({ ...prev, [field]: true }))
  }

  const canProceedStep1 = formData.sport && formData.timing && formData.hope
  const canProceedStep2 =
    validated.name && validated.email && validated.phone && validated.postalCode && formData.address

  const handleNext = () => {
    if (currentStep === 1 && canProceedStep1) {
      setCurrentStep(2)
    } else if (currentStep === 2 && canProceedStep2) {
      setCurrentStep(3)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleLineRedirect = () => {
    // LINE公式アカウントへリダイレクト
    window.location.href = LINE_URL
  }

  const renderProgressBar = () => (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        />
      </div>
      <div className="progress-text">
        <span>STEP {currentStep} / 3</span>
        <span className="progress-hint">
          {currentStep === 1 && 'まずは希望を選択'}
          {currentStep === 2 && 'あと少しで完了'}
          {currentStep === 3 && '最終確認'}
        </span>
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div className="step-content">
      <h2 className="step-title">あなたの希望を教えてください</h2>
      <p className="step-description">タップして選択するだけ。60秒で完了します。</p>

      <div className="form-group">
        <label className="form-label">競技経験</label>
        <div className="button-grid">
          {['サッカー', '野球', 'バスケ', '陸上', 'その他'].map((sport) => (
            <button
              key={sport}
              type="button"
              ref={sport === 'サッカー' ? firstInputRef : null}
              className={`select-button ${formData.sport === sport ? 'selected' : ''}`}
              onClick={() => handleSelect('sport', sport)}
            >
              {sport}
              {formData.sport === sport && <span className="check-icon">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">転職希望時期</label>
        <div className="button-grid single">
          {['すぐにでも', '3ヶ月以内', '半年以内', '情報収集中'].map((timing) => (
            <button
              key={timing}
              type="button"
              className={`select-button full ${formData.timing === timing ? 'selected' : ''}`}
              onClick={() => handleSelect('timing', timing)}
            >
              {timing}
              {formData.timing === timing && <span className="check-icon">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">重視すること</label>
        <div className="button-grid">
          {['年収アップ', 'やりがい', 'ワークライフバランス', '成長環境'].map((hope) => (
            <button
              key={hope}
              type="button"
              className={`select-button ${formData.hope === hope ? 'selected' : ''}`}
              onClick={() => handleSelect('hope', hope)}
            >
              {hope}
              {formData.hope === hope && <span className="check-icon">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="step-content">
      <h2 className="step-title">基本情報を入力</h2>
      <p className="step-description">入力は自動補完でカンタン。</p>

      <div className="form-group">
        <label className="form-label">お名前</label>
        <div className="input-wrapper">
          <input
            ref={firstInputRef}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="例：山田 太郎"
            className={`form-input ${validated.name ? 'valid' : ''} ${errors.name ? 'error' : ''}`}
            autoComplete="name"
          />
          {validated.name && <span className="valid-icon">✓</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">メールアドレス</label>
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="例：example@email.com"
            className={`form-input ${validated.email ? 'valid' : ''}`}
            autoComplete="email"
            inputMode="email"
          />
          {validated.email && <span className="valid-icon">✓</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">電話番号</label>
        <div className="input-wrapper">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="例：090-1234-5678"
            className={`form-input ${validated.phone ? 'valid' : ''}`}
            autoComplete="tel"
            inputMode="tel"
          />
          {validated.phone && <span className="valid-icon">✓</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">郵便番号</label>
        <div className="input-wrapper">
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            placeholder="例：100-0001"
            className={`form-input ${validated.postalCode ? 'valid' : ''}`}
            autoComplete="postal-code"
            inputMode="numeric"
            maxLength={8}
          />
          {validated.postalCode && <span className="valid-icon">✓</span>}
          {isAddressLoading && <span className="loading-icon">...</span>}
        </div>
        <p className="input-hint">入力すると住所が自動入力されます</p>
      </div>

      <div className="form-group">
        <label className="form-label">住所</label>
        <div className="input-wrapper">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="例：東京都千代田区丸の内1-1-1"
            className={`form-input ${validated.address ? 'valid' : ''}`}
            autoComplete="address-line1"
          />
          {validated.address && <span className="valid-icon">✓</span>}
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="step-content">
      <h2 className="step-title">入力内容の確認</h2>
      <p className="step-description">以下の内容で登録します。</p>

      <div className="confirmation-card">
        <div className="confirm-section">
          <h3>希望条件</h3>
          <div className="confirm-item">
            <span className="confirm-label">競技経験</span>
            <span className="confirm-value">{formData.sport}</span>
          </div>
          <div className="confirm-item">
            <span className="confirm-label">転職希望時期</span>
            <span className="confirm-value">{formData.timing}</span>
          </div>
          <div className="confirm-item">
            <span className="confirm-label">重視すること</span>
            <span className="confirm-value">{formData.hope}</span>
          </div>
        </div>

        <div className="confirm-section">
          <h3>基本情報</h3>
          <div className="confirm-item">
            <span className="confirm-label">お名前</span>
            <span className="confirm-value">{formData.name}</span>
          </div>
          <div className="confirm-item">
            <span className="confirm-label">メールアドレス</span>
            <span className="confirm-value">{formData.email}</span>
          </div>
          <div className="confirm-item">
            <span className="confirm-label">電話番号</span>
            <span className="confirm-value">{formData.phone}</span>
          </div>
          <div className="confirm-item">
            <span className="confirm-label">住所</span>
            <span className="confirm-value">{formData.address}</span>
          </div>
        </div>
      </div>

      <div className="line-benefits">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
        </div>
        <div className="benefit-text">
          <p className="benefit-title">LINE公式アカウントで相談</p>
          <p className="benefit-desc">非公開求人の案内が届きます</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="step-form-container">
      {renderProgressBar()}

      <form className="step-form" onSubmit={(e) => e.preventDefault()}>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </form>

      {/* フローティングボタン */}
      <div className="floating-footer">
        {currentStep > 1 && (
          <button type="button" className="back-button" onClick={handleBack}>
            戻る
          </button>
        )}

        {currentStep < 3 && (
          <button
            type="button"
            className="next-button"
            onClick={handleNext}
            disabled={currentStep === 1 ? !canProceedStep1 : !canProceedStep2}
          >
            次へ
          </button>
        )}

        {currentStep === 3 && (
          <button
            type="button"
            className="line-button"
            onClick={handleLineRedirect}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで無料相談する
            <span className="button-sub">最短60秒で完了</span>
          </button>
        )}

        <p className="privacy-note">
          個人情報は適切に管理されます。
          <a href="#">プライバシーポリシー</a>
        </p>
      </div>
    </div>
  )
}

export default StepForm
