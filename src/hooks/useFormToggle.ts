import { useState } from 'react';

interface IUseFormToggle {
  handleOpen: () => void;
  handleClose: () => void;
  isOpen: boolean;
}

const useFormToggle = (): IUseFormToggle => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleClose,
    handleOpen,
  };
};

export default useFormToggle;
