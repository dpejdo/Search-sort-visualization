import create from 'zustand';
import createArray from './createArray';
import createSpeed from './createSpeed';
import createFunction from './createFunction';
const useStore = create((set, get) => ({
  ...createArray(set, get),
  ...createSpeed(set, get),
  ...createFunction(set, get),
}));

export default useStore;
