import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  disabled?: any;
}

const CustomButton = forwardRef(
  ({ onClick, type, name, ...other }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button type={type} onClick={onClick} ref={ref} {...other}>
        {name}
      </button>
    );
  }
);

export default CustomButton;
