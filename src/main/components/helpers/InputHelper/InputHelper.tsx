import React, { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputHelperProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  placeholder?: string;
  error?: string | null;
}
const InputHelper = forwardRef<HTMLInputElement, InputHelperProps>(
  ({ className, type = 'text', disabled, error, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className={twMerge(
            'flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
            className
          )}
          type={type}
          disabled={disabled}
          {...props}
        />

        {error && <p className={'mt-2 text-sm text-red-600'}>{error}</p>}
      </div>
    );
  }
);
InputHelper.displayName = 'InputHelper';

export default InputHelper;
