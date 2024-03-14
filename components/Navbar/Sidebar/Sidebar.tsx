"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CircleX } from 'lucide-react';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti';
import images from '@/img';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  setOpenSideMenu: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setOpenSideMenu
}) => {
  const [openDiscover, setOpenDiscover] = useState<boolean>(false);
  const [openHelp, setOpenHelp] = useState<boolean>(false);

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

  const openDiscoverMenu = () => {
    setOpenDiscover(!openDiscover);
    setOpenHelp(false);
  }

  // HELP CENTER MENU
  const helpCenter = [
    { name: "About", link: "about" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Sign Up", link: "sign-up" },
    { name: "Sign In", link: "sign-in" },
    { name: "Subscription", link: "subscription" },
  ];


  const openHelpMenu = () => {
    setOpenHelp(!openHelp);
    setOpenDiscover(false);
  }

  const closeSidebar = () => {
    setOpenSideMenu(false);
  }

  return (
    <div className="p-4 absolute top-10 right-2 bg-black/50 shadow-lg mt-8">
      <div className="cursor-pointer absolute top-2 right-2 text-white/50 transition hover:text-white/30 p-4 fill-current" onClick={() => closeSidebar()}>
        <CircleX />
      </div>
      <div className="text-center">
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p className="mt-4 text-sm text-gray-700">
          Discover the most outstanding articles on all topics of NFT &amp; your own stories and share them.
        </p>
        <div className="flex justify-center mt-4">
          <Link href={'#'}><TiSocialFacebook className="mx-2 text-gray-500 hover:text-blue-500" /></Link>
          <Link href={'#'}><TiSocialLinkedin className="mx-2 text-gray-500 hover:text-blue-500" /></Link>
          <Link href={'#'}><TiSocialTwitter className="mx-2 text-gray-500 hover:text-blue-500" /></Link>
          <Link href={'#'}><TiSocialYoutube className="mx-2 text-gray-500 hover:text-blue-500" /></Link>
          <Link href={'#'}><TiSocialInstagram className="mx-2 text-gray-500 hover:text-blue-500" /></Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => openDiscoverMenu()}>
          <p className="text-lg font-semibold">Discover</p>
          <TiArrowSortedDown className="text-lg" />
        </div>
        {openDiscover && (
          <div className="mt-4">
            {discover.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.link}` }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-500">
                {el.name}
              </Link>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center cursor-pointer mt-4" onClick={() => openHelpMenu()}>
          <p className="text-lg font-semibold">Help Center</p>
          <TiArrowSortedDown className="text-lg" />
        </div>
        {openHelp && (
          <div className="mt-4">
            {helpCenter.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.link}` }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-500">
                {el.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="mt-8">
        <Button
          onClick={() => console.log('Create NFT')}
          className="w-full"
        >Create NFT</Button>
        <Button
          onClick={() => console.log('Connect wallet')}
          className="w-full mt-4"
        >Connect Wallet</Button>
      </div>
    </div>

  )
}

export default Sidebar;