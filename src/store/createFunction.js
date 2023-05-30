const createFunction = () => {
  let currentFunctionName = '';
  let currentFunction = '';
  let isSort = false;
  const setFunction = (value) => {
    currentFunctionName = value.name;
    currentFunction = value.algorithm;
    isSort = value.isSort;
  };
  const getFunction = () => ({
    currentFunctionName,
    currentFunction,
    isSort,
  });

  return { getFunction, isSort, setFunction };
};
export default createFunction;
