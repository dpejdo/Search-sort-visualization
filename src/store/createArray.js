const ARRAY = [];
const ARRAY_LIMIT = 12;
const genRandom = () => {
  return Math.floor(Math.random() * (100 * 5 - 1) + 1);
};
function createArray() {
  let array = ARRAY;
  let limit = ARRAY_LIMIT;
  const setLimit = (value) => (limit = ARRAY_LIMIT * value);
  const setArray = () => {
    const temp = [];
    for (let i = 0; i < limit; i++) temp.push(genRandom());
    array = temp;
  };
  const getArray = () => {
    return array;
  };
  return { array, getArray, limit, setLimit, setArray };
}
export default createArray;
