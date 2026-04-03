function Footer() {
    return (

    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Menu */}
        <div className="flex justify-center gap-8 text-sm mb-10">
          <a href="/about" className="hover:underline">A propos</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/partenaires" className="hover:underline">Partneraires</a>
        </div>

        {/* Réseaux */}
        <div className="flex justify-center gap-6 mb-10 text-white/70">
          <span className="cursor-pointer hover:text-white">FB</span>
          <span className="cursor-pointer hover:text-white">INST</span>
          <span className="cursor-pointer hover:text-white">GH</span>
          <span className="cursor-pointer hover:text-white">YT</span>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/60">
          © 2026 Morgane Peroy. Tous droits réservés.
        </div>

      </div>
    </footer>
    );
}

export default Footer;