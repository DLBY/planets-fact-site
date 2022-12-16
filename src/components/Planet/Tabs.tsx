import { planetsData } from '@/data/data';
import { useState } from 'react';

type TabsProps = {
  currentTab: any;
  handleClick: any;
};

export const Tabs = () => {
  const [isActive, setIsActive] = useState('overview');
  return (
    <div className="flex px-6 font-bold justify-between border-b border-gray-secondary/50">
      <button
        className={
          `py-5 uppercase text-xxs
            ` + (isActive === 'overview' ? 'text-white' : 'text-gray')
        }
        data-type={'overview'}
      >
        overview
      </button>
      <button
        className={
          `py-5 uppercase text-xxs
            ` + (isActive === 'internal' ? 'text-white' : 'text-gray')
        }
        data-type={'internal'}
      >
        structure
      </button>
      <button
        className={
          `py-5 uppercase text-xxs
            ` + (isActive === 'surface' ? 'text-white' : 'text-gray')
        }
        data-type={'surface'}
      >
        geology
      </button>
    </div>
  );
};
