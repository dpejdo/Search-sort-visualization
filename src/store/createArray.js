const ARRAY = [];
const ARRAY_LIMIT = 12;
const genRandom = () => {
  return Math.floor(Math.random() * (100 * 5 - 1) + 1);
};
const createArray = (set, get) => ({
  array: ARRAY,
  limit: ARRAY_LIMIT,
  setLimit: (value) => set(() => ({ limit: ARRAY_LIMIT * value })),
  setArray: () =>
    set(() => {
      let temp = [];
      console.log(get().limit);
      for (let i = 0; i < get().limit; i++) temp.push(genRandom());
      return { array: temp };
    }),
});
export default createArray;
