import create from "zustand";

const useStore = create((set) => {
  return {
    name: "",
    point: 0,
  };
});
