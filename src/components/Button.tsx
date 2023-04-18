import { ReactNode } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
type ButtonTypes = {
  color: string;
  bgColor?: string;
  size?: string;
  text?: string;
  borderRadius: string;
  icon?: ReactNode;
  bgHoverColor?: string;
  width?: string;
};

export const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}: ButtonTypes) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};
