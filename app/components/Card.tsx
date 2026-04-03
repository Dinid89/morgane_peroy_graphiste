// app/components/Card.tsx
interface CardProps {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function Card({ name, description, imageSrc, imageAlt, href }: CardProps) {
  return (
    <div className="group border border-1 border-gray-400 min-h-[500px] text-center items-center p-5">
      <img src={imageSrc} alt={imageAlt} className="w-full h-64 object-cover" />
      <h3 className="mt-4 font-semibold text-lg">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={href} className="mt-4 inline-block text-blue-500 hover:underline">
        En savoir plus
      </a>
    </div>
  );
}