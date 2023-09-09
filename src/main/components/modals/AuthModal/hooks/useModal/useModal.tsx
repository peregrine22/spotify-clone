import { create } from 'zustand';

interface AuthProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<AuthProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useModal;
