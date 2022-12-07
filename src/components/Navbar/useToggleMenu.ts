import { useState } from "react";

export const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const resetMenu = () => setIsOpen(false);
  return { isOpen, toggleMenu, openMenu, closeMenu, resetMenu };
}