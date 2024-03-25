import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti';
import images from "@/img";
import { Discover, HelpCenter } from '../Navbar';
import { RiSendPlaneFill } from 'react-icons/ri';

const footer = () => {
  return (
    <div className="flex justify-between bg-gray-900 p-3">
      <div className="flex flex-col gap-y-3 w-[30%]">
        <Image src={images.logo} alt="Footer logo" height={100} width={100}/>
        <p className="ml-2 text-sm mt-4 text-white">
          The World's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
          Buy, sell, and discover exclusive digital items.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-300">
            <TiSocialFacebook/>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <TiSocialTwitter/>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <TiSocialInstagram/>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <TiSocialLinkedin/>
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <TiSocialYoutube/>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col w-[20%]">
        <h3 className="text-lg font-semibold mb-4 test-white">Discover</h3>
        <Discover/>
      </div>
      
      <div className="flex flex-col w-[20%]">
        <h3 className="text-lg font-semibold mb-4 text-white">Help Center</h3>
        <HelpCenter/>
      </div>
      
      <div className="flex flex-col items-center w-[30%]">
        <h3 className="text-lg font-semibold mb-4 text-white ">Subscribe</h3>
        <div className={"flex items-center"}>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-700 text-white px-4 py-1 rounded-l-md"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
            <RiSendPlaneFill/>
          </button>
        </div>
        
        <p>
          Discover, collect, and sell extraordinary NFTs OpenSea is
        </p>
      </div>
    </div>
  )
}

export default footer;