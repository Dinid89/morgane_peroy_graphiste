'use client'

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-primary text-secondary px-6 lg:px-8">
      <div className="max-w-2xl text-center space-y-6">
        
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Morgane Peroy <small>Graphiste</small>
        </h1>

        <p className="text-lg font-medium sm:text-xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        <div className="flex items-center justify-center gap-x-6 pt-2">
          <a
            href="/contact"
            className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-gray-400 hover:bg-white/20"
          >
            Contact
          </a>

          <a href="/portfolio" className="text-sm font-semibold">
            Réalisations <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}