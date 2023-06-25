import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          pos: [x, y, z],
        },
      ],
    }));
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((c) => c.id !== id),
    }));
  },
  setTexture: (texture) => {
    set(() => {
      return { texture };
    });
  },
  saveWorld: () => {},
  reserWorld: () => {},
}));
