'use client';
import Post from '../components/Post';

const posts = [
  {
    id: 1,
    title: 'Actualité 1',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi...',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Morgane Peroy',
      role: 'Graphiste',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?...',
    },
  },
  {
    id: 2,
    title: 'Actualité 2',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et...',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
    author: {
      name: 'Morgane Peroy',
      role: 'Graphiste',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?...',
    },
  },
  {
    id: 3,
    title: 'Actualité 3',
    href: '#',
    description: 'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus...',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
    author: {
      name: 'Morgane Peroy',
      role: 'Graphiste',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...',
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Actualités</h2>
          <p className="mt-2 text-lg/8 text-gray-300">Suivez mon parcours sur le blog</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}