import Card from "../components/Card"
import cards from "./cards.json"

export default function Portfolio() {

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
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

      </div>
    </div>
  )
}