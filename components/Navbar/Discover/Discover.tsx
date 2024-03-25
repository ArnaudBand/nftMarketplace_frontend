import React from 'react'
import Link from "next/link";

const HelpCenter = () => {
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
    <div>
      {discover.map((el, i) => (
        <Link key={i + 1} href={{pathname: `${el.link}`}} className="block px-4 py-2 text-white/80 hover:bg-gray-200 hover:text-gray-500 rounded-md">
          {el.name}
        </Link>
      ))}
    </div>
  )
}

export default HelpCenter;