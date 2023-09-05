import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>  {
    onClick?: React.MouseEventHandler | undefined,
    type?:  "button" | "submit" | "reset" | undefined,
    name: string,
    disabled?: any,
}

export default function CustomButton({onClick, type, name, ...other} : ButtonProps) {
    return (
        <>
        <button 
        type={type}
        onClick={onClick}
        {...other}>{name}</button>
        </>
    )
}