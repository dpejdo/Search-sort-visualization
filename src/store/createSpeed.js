const createSpeed = (set, get) => ({
  speed: 1,
  setSpeed: (value) => set({ speed: value }),
  getSpeed: () => {
    return get().speed;
  },
});
export default createSpeed;
