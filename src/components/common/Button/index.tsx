import { ReactNode } from 'react';
import { button } from './style.css';

interface ButtonProps {
  type?: 'submit' | 'button';
  color?: 'primary' | 'disabled';
  size?: 'lg';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  type = 'button',
  color = 'primary',
  size = 'lg',
  className = '',
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${button({ color, size })} ${className}`}
    >
      {children}
    </button>
  );
}
