import React, { FC } from 'react';
import { Button } from '@/components/ui/button';

interface ButtonNFTProps {
  className?: string;
  btnName: string;
  handleClick: () => void;
}

const ButtonNFT: FC<ButtonNFTProps> = ({ className, btnName, handleClick }) => {
  return (
    <Button onClick={handleClick} className="{className}">
      {btnName}
    </Button>
  )
}

export default ButtonNFT;