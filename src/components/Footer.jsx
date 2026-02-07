function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-gold-400 mb-1">CAREER AGENT</p>
            <p className="text-sm text-navy-300">30代専門キャリア支援</p>
          </div>
          <div className="text-center md:text-right text-sm text-navy-400">
            <p>© 2024 Career Agent. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
