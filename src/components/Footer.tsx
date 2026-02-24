export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} 簡靖寬. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
