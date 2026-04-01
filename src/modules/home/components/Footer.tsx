import { Globe, Share2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-stone-50 w-full border-t border-stone-200 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-6 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-stone-900 font-headline">Editorial Appetite</span>
          <p className="text-sm text-stone-500">
            © 2024 Editorial Appetite. Crafted for the Culinary Curator.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {['Help Center', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-primary hover:border-primary transition-all">
            <Globe className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-primary hover:border-primary transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
