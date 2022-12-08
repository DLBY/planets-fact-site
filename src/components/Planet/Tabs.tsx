import { planetsData } from '@/data/data';
import { useState } from 'react';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex px-6 font-bold justify-between border-b border-gray-secondary/50">
      <button
        className={`py-5 uppercase text-xxs
            }`}
      >
        Overview
      </button>
      <button
        className={`py-5 uppercase text-xxs
            }`}
      >
        Structure
      </button>
      <button
        className={`py-5 uppercase text-xxs
            }`}
      >
        Surfaces
      </button>
    </div>
  );
};
