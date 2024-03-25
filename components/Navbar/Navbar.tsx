"use client";

// import {discover, helpCenter} from '@/components/links/Usefull_link';
import React, { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import images from '@/img';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import ButtonNFT from '../Button/ButtonNFT';

interface NavbarState {
  discover: boolean;
  help: boolean;
  notification: boolean;
  profile: boolean;
  sidebar: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<NavbarState>({
    discover: false,
    help: false,
    notification: false,
    profile: false,
    sidebar: false,
  });

  const handleMenuToggle = (menu: keyof NavbarState) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  
    // Close other menus
    Object.keys(isOpen).forEach((key) => {
      if (key !== menu) {
        setIsOpen((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    });
  };
  

  const { discover, help, notification, profile, sidebar } = isOpen;

  return (
    <div className="bg-gray-900 py-1.5">
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
        <div className=" flex items-center">
          <p className="text-white cursor-pointer" onClick={() => handleMenuToggle('discover')}>Discover</p>
          {discover && (
            <div className="absolute top-8 bg-black shadow-md mt-8 w-48 rounded-lg">
              <Discover />
            </div>
          )}
        </div>
        {/* Help Center */}
        <div className="flex items-center">
          <p className="text-white cursor-pointer" onClick={() => handleMenuToggle('help')}>Help Center</p>
          {help && (
            <div className="bg-black shadow-md absolute top-8 mt-8 w-48 rounded-lg">
              <HelpCenter />
            </div>
          )}
        </div>
        {/* Notification */}
        <div className="flex items-center">
          <MdNotifications className="text-white text-2xl cursor-pointer" onClick={() => handleMenuToggle('notification')} />
          {notification && <Notification />}
        </div>
        {/* CREATE BUTTON SECTION */}
        <div className="flex items-center">
          <ButtonNFT btnName="Create NFT" handleClick={() => console.log('Create NFT')} />
        </div>
        {/* User Profile */}
        <div className="flex items-center">
          <Image
            src={images.user1}
            alt="Profile"
            className="rounded-full w-10 h-10 mr-2 cursor-pointer"
            onClick={() => handleMenuToggle('profile')}
          />
          {profile && <Profile />}
        </div>
        {/* MENU BUTTON */}
        <div className="flex items-center">
          <CgMenuRight className="text-white text-2xl cursor-pointer" onClick={() => handleMenuToggle('sidebar')} />
        </div>
        {/* SIDEBAR COMPONENT */}
        <div>
          {sidebar && (
            <Sidebar
              setOpenSideMenu={(value: boolean) => setIsOpen(value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
