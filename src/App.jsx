import { useState, useEffect } from 'react'
import AthletePage from './pages/AthletePage'
import NursePage from './pages/NursePage'
import SalesPage from './pages/SalesPage'

function App() {
  const [currentPage, setCurrentPage] = useState('athlete')

  // URLパラメータでページを切り替え
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const page = params.get('page')
    if (page && ['athlete', 'nurse', 'sales'].includes(page)) {
      setCurrentPage(page)
    }
  }, [])

  // ページ切り替え
  const pages = {
    athlete: <AthletePage />,
    nurse: <NursePage />,
    sales: <SalesPage />,
  }

  return (
    <>
      {/* ページ切り替えボタン（デモ用） */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200">
        <p className="text-xs text-gray-500 font-medium mb-1">LP切替</p>
        <button
          onClick={() => setCurrentPage('athlete')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            currentPage === 'athlete'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          アスリート
        </button>
        <button
          onClick={() => setCurrentPage('nurse')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            currentPage === 'nurse'
              ? 'bg-pink-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          看護師
        </button>
        <button
          onClick={() => setCurrentPage('sales')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            currentPage === 'sales'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          営業
        </button>
      </div>

      {pages[currentPage]}
    </>
  )
}

export default App
