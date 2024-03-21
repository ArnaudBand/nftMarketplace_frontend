import Link from 'next/link';

interface DiscoverItem {
  name: string;
  link: string;
}

interface DiscoverProps {
  items: DiscoverItem[];
  className?: string;
}

const Discover: React.FC<DiscoverProps> = ({ items, className = '' }) => {
  return (
    <div className={`bg-black shadow-md absolute rounded-lg mt-8 w-48 ${className}`}>
      {items.map((el, i) => (
        <Link key={i + 1} href={{ pathname: `${el.link}` }} passHref className="block px-4 py-2 text-white/80 hover:bg-gray-200 hover:text-gray-500">
            {el.name}
        </Link>
      ))}
    </div>
  );
};

export default Discover;
