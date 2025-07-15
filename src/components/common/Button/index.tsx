import { ReactNode } from 'react';
import { button } from './style.css';

interface ButtonProps {
  type?: 'submit' | 'button';
  color?: 'primary' | 'disabled';
  size?: 'lg';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: any;
}

export default function Button({
  type = 'button',
  color = 'primary',
  size = 'lg',
  className = '',
  onClick,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${button({ color, size })} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
