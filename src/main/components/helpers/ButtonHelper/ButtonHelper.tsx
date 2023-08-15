import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonHelperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonHelper = forwardRef<HTMLButtonElement, ButtonHelperProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          'w-full rounded-full bg-amber-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonHelper.displayName = 'ButtonHelper';
export default ButtonHelper;
