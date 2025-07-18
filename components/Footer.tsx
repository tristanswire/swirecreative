export default function Footer() {
    return (
        <footer className="bg-brand-black text-brand-white text-center py-8 border-t-1 bt-brand-white">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Swire Creative</span>. All rights reserved.
        </p>
      </footer>
    )
}