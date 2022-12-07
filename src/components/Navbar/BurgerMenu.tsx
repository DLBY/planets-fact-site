import { Link } from 'react-router-dom';
import { planetsData } from '../../data/data';

type BurgerMenuProps = {
  isOpen: boolean;
  resetMenu: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, resetMenu }) => {
  if (!isOpen) return null;
  return (
    <nav className="md:hidden absolute top-[75px] left-0 right-0 bottom-0 bg-blue-dark flex flex-col z-100 py-10 px-6">
      <ul>
        {planetsData.map((planet) => (
          <li className="flex border-b border-gray-secondary/50 px-4 py-3 after:absolute after:right-0 after:content-chevron relative">
            <img src={planet.images.planet} alt={planet.name} className="w-5 h-5" />
            <Link
              key={planet.name}
              className="inline-block uppercase font-bold   text-white text-xsm ml-[25px]"
              to={'/' + planet.name}
              onClick={resetMenu}
            >
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
