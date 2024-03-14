import Link from 'next/link';

const Discover = () => {
  // DISCOVER NAVIGATION MENU
  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account-setting" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" }
  ];

  return (

    <div className="bg-black shadow-md absolute rounded-lg mt-8 w-48">
      {discover.map((el, i) => (
        <Link key={i + 1} href={{ pathname: `${el.link}` }} className="block px-4 py-2 text-white/80 hover:bg-gray-200 hover:text-gray-500">
          {el.name}
        </Link>
      ))}
    </div>

  );
};

export default Discover;
