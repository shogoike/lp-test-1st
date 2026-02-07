import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ReasonsSection from './components/ReasonsSection'
import SuccessStoriesSection from './components/SuccessStoriesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { CommercialTransaction, PrivacyPolicy } from './components/LegalPages'

function App() {
  const [activeModal, setActiveModal] = useState(null)

  const openCommercial = () => setActiveModal('commercial')
  const openPrivacy = () => setActiveModal('privacy')
  const closeModal = () => setActiveModal(null)

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ReasonsSection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer
        onOpenCommercial={openCommercial}
        onOpenPrivacy={openPrivacy}
      />

      {/* Legal Modals */}
      {activeModal === 'commercial' && (
        <CommercialTransaction onClose={closeModal} />
      )}
      {activeModal === 'privacy' && (
        <PrivacyPolicy onClose={closeModal} />
      )}
    </div>
  )
}

export default App
