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
import { discover } from '@/components/links/Usefull_link';

const footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col md:justify-start mb-4 md:mb-0">
            <Image src={images.logo} alt={"Footer logo"} height={100} width={100}/>
            <p className="ml-2 text-sm w-[100%]">
              The World's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
              Buy, sell, and discover exclusive digital items.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href={'#'} className="text-white hover:text-gray-300">
              <TiSocialFacebook />
            </Link>
            <Link href={'#'} className="text-white hover:text-gray-300">
              <TiSocialTwitter/>
            </Link>
            <Link href={'#'} className="text-white hover:text-gray-300">
              <TiSocialInstagram/>
            </Link>
            <Link href={'#'} className="text-white hover:text-gray-300">
              <TiSocialLinkedin/>
            </Link>
            <Link href={'#'} className="text-white hover:text-gray-300">
              <TiSocialYoutube/>
            </Link>
          </div>
          <div className="mt-8 md:flex md:justify-between">
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Discover</h3>
              <Discover items={discover} className={"bg-transparent"} />
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Help center</h3>
              <HelpCenter/>
            </div>
            <div className="md:w-1/3">
              <div className="flex items-center">
                <input type={"email"} placeholder={"Enter your email"}
                       className="bg-gray-700 text-white px-4 py-2 rounded-l-md"/>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                  <RiSendPlaneFill/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer;