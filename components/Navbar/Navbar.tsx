"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import images from "@/img";
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Navbar = () => {
  const [discover, setDiscover] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);

  const openMenu = (e: any) => {
    const btnText = e.target.innerText;
    if (btnText === 'Discover') {
      setDiscover(!discover);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === 'Help Center') {
      setDiscover(false);
      setHelp(!help);
      setNotification(false);
      setProfile(false);
    } else if (btnText === 'Notification') {
      setDiscover(false);
      setHelp(false);
      setNotification(!notification);
      setProfile(false);
    } else if (btnText === 'Profile') {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(!profile);
    }
  }


  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Image src={images.logo} alt="NFT Market Place" width={100} height={100} />
          </div>
          <div className="ml-4">
            <div className="relative">
              <Input type='text' placeholder='Search NFT' className="w-64 px-3 py-2 bg-gray-800 text-white rounded-lg outline-none" />
              <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" onClick={() => { }} />
            </div>
          </div>
        </div>
        {/* END OF LEFT SECTION */}
        <div className="flex items-center">
          <p className="text-white cursor-pointer" onClick={(e) => openMenu(e)}>Discover</p>
          <div className="ml-4">
            <Discover />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar;