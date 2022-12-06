import { SVGProps } from 'react';

type HamburgerProps = {
  onClick: () => void;
  isOpen: boolean;
};
export const IconHamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  const classes = isOpen ? 'fill-gray' : 'fill-white';
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={17}
      onClick={onClick}
    >
      <path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill="" fillRule="evenodd" />
    </svg>
  );
};
