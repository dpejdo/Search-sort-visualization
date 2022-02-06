const createFunction = (set) => ({
  currentFunctionName: '',
  currentFunction: '',
  isSort: false,
  setFunction: (value) => {
    set({
      currentFunctionName: value.name,
      currentFunction: value.algorithm,
      isSort: value.isSort,
    });
  },
});
export default createFunction;
