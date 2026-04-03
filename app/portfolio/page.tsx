import Card from "../components/Card"

export default function Portfolio() {

  const portfolioCards = [
    {
      id: 1,
      name: 'Projet 1',
      href: '#',
      description: 'Description',
      imageSrc: 'https://picsum.photos/400/400',
      imageAlt: 'Projet 1',
    },
    {
      id: 2,
      name: 'Projet 2',
      href: '#',
      description: 'Description',
      imageSrc: 'https://picsum.photos/400/400',
      imageAlt: 'Projet 2',
    },
    {
      id: 3,
      name: 'Projet 3',
      href: '#',
      description: 'Description',
      imageSrc: 'https://picsum.photos/400/400',
      imageAlt: 'Projet 2',
    }
  ]

  return (
    <div className="bg-black text-white min-h-screen flex justify-evenly">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center p-5">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Portfolio
        </h2>
        <span>
            Lorem ipsum
        </span>
        </div>

        <hr className="border-white/20 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

      </div>
    </div>
  )
}