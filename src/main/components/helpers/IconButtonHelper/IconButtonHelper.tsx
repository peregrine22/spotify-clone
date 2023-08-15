import React from 'react';
import { IconType } from 'react-icons';
import { RxCaretLeft } from 'react-icons/rx';

interface NavButtonHelperProps {
  icon: IconType;
  onClick: () => void;
  buttonClassName?: string;
  iconClassName?: string;
  iconSize?: number;
}

function IconButtonHelper({
  onClick,
  icon: Icon,
  buttonClassName,
  iconClassName = 'text-white',
  iconSize = 35
}: NavButtonHelperProps) {
  return (
    <button
      onClick={onClick}
      className={
        buttonClassName ||
        'rounded-full bg-black flex items-center justify-center hover:scale-110 transition'
      }
    >
      <Icon className={iconClassName} size={iconSize} />
    </button>
  );
}

export default IconButtonHelper;
