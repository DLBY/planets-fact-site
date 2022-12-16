import { PlanetProps } from "@/data/dataType";
import { useEffect, useRef, useState } from "react";

type HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => void;

export const useChangeData = (planetData: any) => {

  const previousTab = useRef("overview");
  const [currentTab, setCurrentTab] = useState("overview");
  const [currentData, setCurrentData] = useState(planetData.overview);

  const handleClick: HandleClick = (e : React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const currentTab = e.target.dataset.type;

    changeData(currentTab ? currentTab : previousTab.current);
  };

  const changeData = (currentTab: string) => {
      previousTab.current = currentTab;
      setCurrentTab(currentTab);

      setCurrentData(planetData[currentTab]);
      // console.log('hook : ', currentData)
  }

  return { currentTab, handleClick, currentData };
}