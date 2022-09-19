import create from "zustand";

export const store = create((set) => ({
  modal: false,
  openModal: () => set((state) => ({ modal: !state.modal })),
  
}));
