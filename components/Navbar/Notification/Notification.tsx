import React from 'react';
import Image from 'next/image';
import images from '@/img';

const Notification = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg absolute top-14 shadow-md">
      <p className="text-xl font-bold mb-2">Notification</p>
      <div className="flex items-center">
        <div className="mr-2">
          <Image src={images.user1} alt="Profile image" width={50} height={50} className="rounded-full" />
        </div>
        <div>
          <h5>John Rich</h5>
          <p>Measure action your user...</p>
          <small>3 minutes</small>
        </div>
        <span></span>
      </div>
    </div>
  );
};


export default Notification;