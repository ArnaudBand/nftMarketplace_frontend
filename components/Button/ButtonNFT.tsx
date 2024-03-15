import React, { FC } from 'react';
import { Button } from '@/components/ui/button';

interface ButtonNFTProps {
  btnName: string;
  handleClick: () => void;
}

const ButtonNFT: FC<ButtonNFTProps> = ({ btnName, handleClick }) => {
  return (
    <Button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
      {btnName}
    </Button>
  )
}

export default ButtonNFT;