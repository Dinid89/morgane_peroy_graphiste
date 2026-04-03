export default function Card({ name, description, imageSrc, imageAlt, href }) {
  return (
    <div className="group border border-1 border-gray-400 min-h-[500px] text-center items-center p-5">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-80 object-cover rounded-lg group-hover:opacity-75 transition"
      />

      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-white/60">{description}</p>

      <br />

      <a
        href={href}
        className="inline-block px-4 py-2 text-sm font-medium border border-white rounded hover:bg-white hover:text-black transition"
      >
        Voir
      </a>
    </div>
  );
}
