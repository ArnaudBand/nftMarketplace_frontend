import React from 'react';
import Image from 'next/image';
import images from "@/img";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MapPin } from "lucide-react";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="">
      <div className="bg-black shadow-md absolute right-10 rounded-lg mt-8 w-100">
        <div className="flex p-4">
          <div className="mr-2">
            <Image src={images.user10} alt="Profile image" width={50} height={50} className="rounded-full" />
          </div>
          <div className='flex flex-col gap-y-3'>
            <h5 className="text-white/70">John Rich</h5>
            <p>
              <span className="text-white/70">
                <small>0x34q6ds...</small>
              </span>
            </p>
            <div className="flex items-center text-white/70 gap-x-2">
              <FaUserAlt />
              <p>
                <Link href={{ pathname: '/myprofile' }}>My Profile</Link>
              </p>
            </div>
            <div className="flex items-center text-white/70 gap-x-2">
              <FaRegImage />
              <p>
                <Link href={{ pathname: '/my-item' }}>My Items</Link>
              </p>
            </div>
            <div className="flex items-center text-white/70 gap-x-2">
              <FaUserEdit />
              <p>
                <Link href={{ pathname: '/edit-profile' }}>Edit Profile</Link>
              </p>
            </div>
              <div className="flex items-center text-white/70 gap-x-2">
                <MdHelpCenter />
                <p>
                  <Link href={{ pathname: '/help' }}>Help Center</Link>
                </p>
              </div>
              <div className="flex items-center text-white/70 gap-x-2">
                <TbDownload />
                <p>
                  <Link href={{ pathname: '/disconnet' }}>Disconnet</Link>
                </p>
              </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Profile;